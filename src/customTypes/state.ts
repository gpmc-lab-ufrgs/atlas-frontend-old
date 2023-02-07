export interface State {
  type: string;
  _geometry?: {
    type: string;
    coordinates: number[][][];
  };
  geometry: {
    type: string;
    coordinates: number[][][];
  };
  properties: {
    NM_UF?: string;
    CD_UF?: number;
    ACRONYM_FU: string;
    AREA_KM2: number;
    POPULATION?: number;
  };
}
