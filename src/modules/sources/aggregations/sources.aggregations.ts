const sourceCommentsAggregation = [
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
      commentCount: { $size: '$docs' },
    },
  },
  {
    $group: {
      _id: '$_id',
      url: { $first: '$url' },
      description: { $first: '$description' },
      user: { $first: '$user' },
      commentCount: { $first: '$commentCount' },
    },
  },
  {
    $project: {
      _id: 1,
      url: 1,
      description: 1,
      user: 1,
      commentCount: 1,
    },
  },
];

export { sourceCommentsAggregation };
