import { District } from '@customTypes/district';
import { State } from '@customTypes/state';

const selectedDistrict: District = {
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
    CD_MUN: 2709400,
    NM_MUN: 'Goiânia',
    SIGLA_UF: 'GO',
    AREA_KM2: 367.888,
  },
};

const selectedState: State = {
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
    NM_UF: 'Goiás',
    CD_UF: 9323,
    SIGLA_UF: 'GO',
    AREA_KM2: 367.888,
    POPULATION: 367.888,
  },
};

export const scenarios = {
  district: {
    all: [],
    selected: selectedDistrict,
    setSelected: () => {},
  },
  state: {
    all: [],
    selected: selectedState,
    setSelected: () => null,
  },
};
