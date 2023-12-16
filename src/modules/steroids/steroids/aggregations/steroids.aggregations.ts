import { PipelineStage, Types } from 'mongoose';

const steroidReviewsAggregation = (steroidId?: string) => {
  const sourceObjectId = steroidId ? new Types.ObjectId(steroidId) : undefined;

  const populationAggregation: PipelineStage[] = [
    {
      $lookup: {
        from: 'manufacturers',
        localField: 'manufacturerId',
        foreignField: '_id',
        as: 'manufacturer',
      },
    },
    {
      $unwind: {
        path: '$manufacturer',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'commonnames',
        localField: 'commonNameId',
        foreignField: '_id',
        as: 'commonName',
      },
    },
    {
      $unwind: {
        path: '$commonName',
        preserveNullAndEmptyArrays: true,
      },
    },
  ];

  const aggregation: PipelineStage[] = [
    {
      $lookup: {
        from: 'comments',
        let: { refId: '$_id' },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ['$referenceId', '$$refId'] },
                  { $eq: ['$type', 'Comment'] },
                ],
              },
            },
          },
          { $sort: { createdAt: -1 } },
          { $limit: 1 },
        ],
        as: 'lastComment',
      },
    },
    {
      $lookup: {
        from: 'comments',
        let: { refId: '$_id' },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ['$referenceId', '$$refId'] },
                  { $eq: ['$type', 'Review'] },
                ],
              },
            },
          },
          { $sort: { createdAt: -1 } },
          { $limit: 1 },
        ],
        as: 'lastReview',
      },
    },
    {
      $lookup: {
        from: 'comments',
        let: { refId: '$_id' },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ['$referenceId', '$$refId'] },
                  { $eq: ['$type', 'Review'] },
                ],
              },
            },
          },
          { $count: 'total' },
        ],
        as: 'reviewCount',
      },
    },
    {
      $unwind: {
        path: '$reviewCount',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'comments',
        let: { refId: '$_id' },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ['$referenceId', '$$refId'] },
                  { $eq: ['$type', 'Comment'] },
                ],
              },
            },
          },
          { $count: 'total' },
        ],
        as: 'commentCount',
      },
    },
    {
      $unwind: {
        path: '$commentCount',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'userId',
        foreignField: '_id',
        as: 'user',
      },
    },
    {
      $unwind: {
        path: '$user',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $addFields: {
        commentCount: {
          $ifNull: ['$commentCount.total', 0],
        },
        lastComment: { $arrayElemAt: ['$lastComment', 0] },
        reviewCount: {
          $ifNull: ['$reviewCount.total', 0],
        },
        lastReview: { $arrayElemAt: ['$lastReview', 0] },
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'lastComment.userId',
        foreignField: '_id',
        as: 'lastCommentUser',
      },
    },
    {
      $unwind: {
        path: '$lastCommentUser',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'categories',
        let: { sourceId: '$_id' },
        pipeline: [
          { $match: { type: 'Steroid' } },
          {
            $lookup: {
              from: 'ratingstars',
              let: { categoryId: '$_id', sourceId: '$$sourceId' },
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $and: [
                        { $eq: ['$categoryId', '$$categoryId'] },
                        { $eq: ['$referenceId', '$$sourceId'] },
                      ],
                    },
                  },
                },
                {
                  $group: {
                    _id: null,
                    avgPoints: { $avg: { $toInt: '$points' } },
                    count: { $sum: 1 },
                  },
                },
              ],
              as: 'ratingStar',
            },
          },
          {
            $unwind: {
              path: '$ratingStar',
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $project: {
              _id: 0,
              category: '$shortName',
              average: { $ifNull: ['$ratingStar.avgPoints', 0] },
              roundedAverage: {
                $ifNull: [{ $round: ['$ratingStar.avgPoints'] }, 0],
              },
              reviews: { $ifNull: ['$ratingStar.count', 0] },
            },
          },
        ],
        as: 'points',
      },
    },
    {
      $unwind: {
        path: '$points',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $group: {
        _id: '$_id',
        name: { $first: '$name' },
        createdAt: { $first: '$createdAt' },
        updatedAt: { $first: '$updatedAt' },
        user: { $first: '$user' },
        commentCount: { $first: '$commentCount' },
        reviewCount: { $first: '$reviewCount' },
        lastComment: { $first: '$lastComment' },
        lastReview: { $first: '$lastReview' },
        lastCommentUser: { $first: '$lastCommentUser' },
        commonName: { $first: '$commonName' },
        manufacturer: { $first: '$manufacturer' },
        points: { $push: '$points' },
      },
    },
    {
      $project: {
        _id: 1,
        url: 1,
        name: 1,
        createdAt: 1,
        updatedAt: 1,
        user: 1,
        commentCount: 1,
        reviewCount: 1,
        lastComment: 1,
        lastReview: 1,
        lastCommentUser: 1,
        commonName: 1,
        manufacturer: 1,
        points: 1,
      },
    },
  ];

  if (sourceObjectId) {
    aggregation.push({
      $match: {
        _id: sourceObjectId,
      },
    });
  }
  return [...populationAggregation, ...aggregation];
};

export { steroidReviewsAggregation };
