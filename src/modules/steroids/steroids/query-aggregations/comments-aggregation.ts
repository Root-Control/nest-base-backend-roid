export default [
  {
    $lookup: {
      from: 'comments',
      localField: '_id',
      foreignField: 'referenceId',
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
      commonName: { $first: '$commonName' },
      name: { $first: '$name' },
      commentCount: { $first: '$commentCount' },
    },
  },
  {
    $project: {
      _id: 1,
      name: 1,
      manufacturer: 1,
      commonName: 1,
      commentCount: 1,
    },
  },
];
