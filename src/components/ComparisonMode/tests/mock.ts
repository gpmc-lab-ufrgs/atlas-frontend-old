const comparisonDistrictMock = [
  {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-53.7451171875, -30.5137659522877],
          [-53.74391555786133, -30.51554058622328],
        ],
      ],
    },
    properties: {
      MUNICIPALITY_CODE: 1200013,
      MUNICIPALITY_NAME: 'Acrelândia',
      ACRONYM_FU: 'RS',
      AREA_KM2: 1811.613,
    },
  },
];

const comparisonMock = {
  comparison: comparisonDistrictMock,
  addComparisonDistrict: () => {},
  removeComparisonDistrict: () => {},
};

export const scenarios = {
  comparisonMock,
};
