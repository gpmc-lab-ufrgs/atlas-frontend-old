import { useState, createContext,  useContext } from "react";
import geojsonURL from "../../data/SP-districts-geojson.json";

type FeaturesContext = {
  features: Array<any>
}

const DEFAULT_VALUE = {
  //@ts-ignore
  features: geojsonURL["features"]
}

const featuresContext = createContext<FeaturesContext>(DEFAULT_VALUE);

export function FeaturesProvider({ children }: any) {
  const [ features ] = useState(DEFAULT_VALUE) 

  return (
    <featuresContext.Provider
      value={features}
    >
      {children}
    </featuresContext.Provider>
  );
}

export function useFeatures() {
  const context = useContext(featuresContext);
  const { features } = context;
  return { features };
}
