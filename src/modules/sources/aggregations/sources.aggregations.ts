import { PipelineStage, Types } from 'mongoose';

const sourceReviewsAggregation = (sourceId?: string) => {
  const sourceObjectId = sourceId ? new Types.ObjectId(sourceId) : undefined;

  const sourceReviewsAggregation: PipelineStage[] = [
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

    // Segunda parte: Agregación de reseñas (de sourceReviewsAggregation)
    {
      $lookup: {
        from: 'categories',
        let: { sourceId: '$_id' },
        pipeline: [
          { $match: { type: 'Source' } },
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
        url: { $first: '$url' },
        createdAt: { $first: '$createdAt' },
        description: { $first: '$description' },
        reviewCount: { $first: '$reviewCount' },
        lastReview: { $first: '$lastReview' },
        htmlTitle: { $first: '$htmlTitle' },
        htmlInfo: { $first: '$htmlInfo' },
        user: { $first: '$user' },
        commentCount: { $first: '$commentCount' },
        lastComment: { $first: '$lastComment' },
        lastCommentUser: { $first: '$lastCommentUser' },
        points: { $push: '$points' },
      },
    },
    {
      $project: {
        _id: 1,
        url: 1,
        createdAt: 1,
        description: 1,
        htmlTitle: 1,
        htmlInfo: 1,
        reviewCount: 1,
        lastReview: 1,
        user: 1,
        commentCount: 1,
        lastComment: 1,
        lastCommentUser: 1,
        points: 1,
      },
    },
  ];

  if (sourceObjectId) {
    sourceReviewsAggregation.push({
      $match: {
        _id: sourceObjectId,
      },
    });
  }
  return sourceReviewsAggregation;
};

export { sourceReviewsAggregation };
