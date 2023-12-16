import { PipelineStage, Types } from 'mongoose';

const sourceCommentsAggregation: PipelineStage[] = [
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
        { $sort: { createdAt: -1 } }, // Ordenar por fecha de creación, descendente
        { $limit: 1 }, // Limitar a solo el último comentario
      ],
      as: 'lastComment',
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
      commentCount: { $size: '$lastComment' },
      lastComment: { $arrayElemAt: ['$lastComment', 0] },
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
    $group: {
      _id: '$_id',
      url: { $first: '$url' },
      createdAt: { $first: '$createdAt' },
      description: { $first: '$description' },
      htmlTitle: { $first: '$htmlTitle' },
      htmlInfo: { $first: '$htmlInfo' },
      user: { $first: '$user' },
      commentCount: { $first: '$commentCount' },
      lastComment: { $first: '$lastComment' },
      lastCommentUser: { $first: '$lastCommentUser' },
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
      user: 1,
      commentCount: 1,
      lastComment: 1,
      lastCommentUser: 1,
    },
  },
];

const sourceReviewsAggregation = [
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
            category: '$name',
            average: { $ifNull: ['$ratingStar.avgPoints', 0] },
            roundedAverage: {
              $ifNull: [{ $round: ['$ratingStar.avgPoints'] }, 0],
            },
          },
        },
      ],
      as: 'points',
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
];

const sourceReviewsAggregationById = (sourceId: string) => {
  const sourceObjectId = new Types.ObjectId(sourceId);
  return [
    {
      $match: {
        _id: sourceObjectId,
      },
    },
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
              category: '$name',
              average: { $ifNull: ['$ratingStar.avgPoints', 0] },
              roundedAverage: {
                $ifNull: [{ $round: ['$ratingStar.avgPoints'] }, 0],
              },
              count: { $ifNull: ['$ratingStar.count', 0] },
            },
          },
        ],
        as: 'points',
      },
    },
  ];
};

export {
  sourceCommentsAggregation,
  sourceReviewsAggregation,
  sourceReviewsAggregationById,
};
