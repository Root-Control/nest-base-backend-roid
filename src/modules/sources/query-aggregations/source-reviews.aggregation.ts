export default [
  {
    $lookup: {
      from: 'categories',
      let: { sourceId: '$_id' },
      pipeline: [
        { $match: { type: 'source' } },
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
      as: 'categoryPoints',
    },
  },
  {
    $project: {
      _id: 1,
      url: '$url',
      sourceImage: '$sourceImage',
      createdAt: '$createdAt',
      updatedAt: '$updatedAt',
      points: '$categoryPoints',
    },
  },
];
