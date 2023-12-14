import { PipelineStage } from 'mongoose';

function getReviewAggregation(
  modelName: 'Source' | 'Steroid',
): PipelineStage[] {
  return [
    {
      $lookup: {
        from: 'categories',
        let: { sourceId: '$_id' },
        pipeline: [
          { $match: { type: modelName } },
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
  ];
}

export { getReviewAggregation };
