import React, { useState, createContext,  useContext } from "react";
// import geojsonDataObject from "../../data/GeoSes.json";
import geojsonDF from "../../data/states/DF_Municipios_2020.json";

export type Feature = { 
  type: string,
  geometry: {
    type: string, 
    coordinates:number[][][]
  },
  properties: {
    CD_MUN: string,
    NM_MUN: string,
    SIGLA_UF: string,
    AREA_KM2: number,
  }
}

// type FeatureContent = {
//   MUNIC_CODE7: number,
//   MUNIC_CODE6: number,
//   FU: number,
//   FU_NAME: string,
//   LONG: string,
//   LAT: string,
//   OBSERVED: number,
//   EXPECTED: string,
//   RR_PREV: string,
//   HDI: string,
//   HDI_educ: string,
//   HDI_long: string,
//   HDI_inc: string,
//   GeoSES: string,
//   GeoSESed: string,
//   GeoSESpv: string,
//   GeoSESdp: string,
//   GeoSESwl: string,
//   GeoSESin: string,
//   GeoSESsg: string,
// }

type FeaturesContext = {
  features: Array<Feature>,
  selectedFeature: Feature | null,
  setSelectedFeature: React.Dispatch<React.SetStateAction<any>>
  highlightedFeature: Feature | null,
  setHighlightedFeature: React.Dispatch<React.SetStateAction<any>>
}

const DEFAULT_VALUE = {
  //@ts-ignore
  features: geojsonDF['features'],
  selectedFeature: null,
  setSelectedFeature: () => {},
  highlightedFeature: null,
  setHighlightedFeature: () => {},
}

const featuresContext = createContext<FeaturesContext>(DEFAULT_VALUE);

export function FeaturesProvider({ children }: any) {
  const [ features ] = useState(DEFAULT_VALUE.features) 
  const [ selectedFeature, setSelectedFeature ] = useState(DEFAULT_VALUE.selectedFeature)
  const [ highlightedFeature, setHighlightedFeature ] = useState(DEFAULT_VALUE.highlightedFeature)

  return (
    <featuresContext.Provider
      value={{
        features,
        selectedFeature,
        setSelectedFeature,
        highlightedFeature,
        setHighlightedFeature
      }}
    >
      {children}
    </featuresContext.Provider>
  );
}

export function useFeatures() {
  const context = useContext(featuresContext);
  const { features, selectedFeature, setSelectedFeature, highlightedFeature, setHighlightedFeature } = context;
  return { features, selectedFeature, setSelectedFeature, highlightedFeature, setHighlightedFeature };
}
