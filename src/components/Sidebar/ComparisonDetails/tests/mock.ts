const comparisonDetailsMock = [
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
      CD_MUN: 1200013,
      NM_MUN: 'Acrelândia',
      SIGLA_UF: 'RS',
      AREA_KM2: 1811.613,
    },
  },
];

const comparisonMock = {
  comparison: comparisonDetailsMock,
  addComparisonDistrict: () => {},
  removeComparisonDistrict: () => {},
};

export const scenarios = {
  comparisonMock,
};
