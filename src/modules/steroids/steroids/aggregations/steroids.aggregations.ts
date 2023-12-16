const steroidCommentsAggregation = [
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
      ],
      as: 'docs',
    },
  },
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
  {
    $addFields: {
      commentCount: { $size: '$docs' },
    },
  },
  {
    $group: {
      _id: '$_id',
      manufacturer: { $first: '$manufacturer' },
      userId: { $first: '$userId' },
      commonName: { $first: '$commonName' },
      name: { $first: '$name' },
      commentCount: { $first: '$commentCount' },
    },
  },
  {
    $project: {
      _id: 1,
      name: 1,
      userId: 1,
      manufacturer: 1,
      commonName: 1,
      commentCount: 1,
    },
  },
];

const steroidReviewsAggregation = [
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
      from: 'manufacturers',
      localField: 'manufacturerId',
      foreignField: '_id',
      as: 'manufacturerId',
    },
  },
  {
    $unwind: {
      path: '$manufacturerId',
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $lookup: {
      from: 'commonnames',
      localField: 'commonNameId',
      foreignField: '_id',
      as: 'commonNameId',
    },
  },
  {
    $unwind: {
      path: '$commonNameId',
      preserveNullAndEmptyArrays: true,
    },
  },
];

export { steroidCommentsAggregation, steroidReviewsAggregation };
