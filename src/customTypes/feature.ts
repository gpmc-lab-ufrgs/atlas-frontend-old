export interface District {
  type: string;
  geometry: {
    type: string;
    coordinates: number[][][];
  };
  properties: {
    CD_MUN?: number;
    NM_MUN?: string;
    SIGLA_UF: string;
    AREA_KM2: number;
  };
}

export interface State {
  type: string;
  geometry: {
    type: string;
    coordinates: number[][][];
  };
  properties: {
    NM_UF?: string;
    CD_UF?: number;
    SIGLA_UF: string;
    AREA_KM2: number;
  };
}

export type Feature = State | District;
