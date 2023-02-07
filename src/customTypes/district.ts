export interface District {
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
    MUNICIPALITY_CODE?: number;
    MUNICIPALITY_NAME?: string;
    ACRONYM_FU: string;
    AREA_KM2: number;
  };
}
