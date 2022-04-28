import React, { createContext, useContext } from "react";

import { Feature } from "@types/Feature";

import geojsonRS from "@data/states/RS_Municipios_2020.json";
import geojsonBR from "@data/BR_UF_2020.json";

import useFeature, {
  DEFAULT_VALUE as FEATURE_DEFAULT_VALUE,
} from "@hook/useFeature";

interface FeatureActions {
  all: Array<Feature>;
  selected: Feature | null;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
  highlighted: Feature | null;
  setHighlighted: React.Dispatch<React.SetStateAction<any>>;
  resetValues(): void;
}

interface FeaturesContext {
  district: FeatureActions;
  state: FeatureActions;
}

const DEFAULT_VALUE = {
  district: FEATURE_DEFAULT_VALUE,
  state: FEATURE_DEFAULT_VALUE,
};

const featuresContext = createContext<FeaturesContext>(DEFAULT_VALUE);

export function FeaturesProvider({ children }: any) {
  //@ts-ignore
  const allDistricts: Array<Feature> = geojsonRS["features"];
  //@ts-ignore
  const allStates: Array<Feature> = geojsonBR["states"];

  const district = useFeature({ allFeatures: allDistricts });
  const state = useFeature({ allFeatures: allStates });

  return (
    <featuresContext.Provider value={{ district, state }}>
      {children}
    </featuresContext.Provider>
  );
}

export function useFeatures() {
  const context = useContext(featuresContext);
  const { district, state } = context;
  return {
    district,
    state,
  };
}
