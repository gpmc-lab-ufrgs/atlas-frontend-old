export const selected = {
  'type': 'Feature',
  'geometry': {
    'type': 'Polygon',
    'coordinates': [
      [
        [
          -53.7451171875,
          -30.5137659522877
        ],
        [
          -53.74391555786133,
          -30.51554058622328
        ],
      ]]
  },
  'properties': {
    'CD_MUN': 2709400,
    'NM_MUN': 'Viçosa',
    'SIGLA_UF': 'AL',
    'AREA_KM2': 367.888
  }
};


export const districtMock = {
  all: [],
  selected,
  setSelected: () => { },
  highlighted: null,
  setHighlighted: () => { },
  resetValues: () => { },
};

export const districtMockFalse = {
  all: [],
  selected: null,
  setSelected: () => { },
  highlighted: null,
  setHighlighted: () => { },
  resetValues: () => { },
};
export const comparisonMock = {
  comparison: [selected],
  addComparisonDistrict: () => { },
  removeComparisonDistrict: () => { },
};

export const comparisonMockFalse = {
  comparison: [],
  addComparisonDistrict: () => { },
  removeComparisonDistrict: () => { },
};

export const sidebarOpenMock = {
  isSidebarOpen: true,
  setIsSidebarOpen: () => { },
};
