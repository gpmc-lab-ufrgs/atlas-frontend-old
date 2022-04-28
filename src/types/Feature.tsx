export interface Feature {
  type: string;
  geometry: {
    type: string;
    coordinates: number[][][];
  };
  properties: {
    CD_MUN: string;
    NM_MUN: string;
    SIGLA_UF: string;
    AREA_KM2: number;
  };
}
