import React, { useState, createContext,  useContext } from "react";
import geojsonURL from "../../data/SP-districts-geojson.json";

type Feature = { 
  type: string,
  geometry: {
    type: string, 
    coordinates:number[][][]
  },
  properties: {
    CLASSID: number,
    FEATID: number,
    REVISIONNU: number,
    PERSONS_NUM:	number,
    NAME_DIST: string,
    SIGLA_DIST: string,
    COD_DIST: string,
    COD_SUB: string,
    DATA_CRIAC: string,
    USUARIO_ID: number
  }
}

type FeaturesContext = {
  features: Array<Feature>,
  selectedFeature: Feature | null,
  setSelectedFeature: React.Dispatch<React.SetStateAction<any>>
  highlightedFeature: Feature | null,
  setHighlightedFeature: React.Dispatch<React.SetStateAction<any>>
}

const DEFAULT_VALUE = {
  //@ts-ignore
  features: geojsonURL["features"],
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
