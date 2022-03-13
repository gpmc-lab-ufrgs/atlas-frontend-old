import React, { useState, createContext, useContext } from "react";

import geojsonGO from "@data/states/GO_Municipios_2020.json";
import geojsonBR from "@data/BR_UF_2020.json";

export type Feature = {
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
};

// type DistrictContent = {
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
  districts: Array<Feature>;
  selectedDistrict: Feature | null;
  setSelectedDistrict: React.Dispatch<React.SetStateAction<any>>;
  highlightedDistrict: Feature | null;
  setHighlightedDistrict: React.Dispatch<React.SetStateAction<any>>;
  states: Array<Feature>;
  selectedState: Feature | null;
  setSelectedState: React.Dispatch<React.SetStateAction<any>>;
  highlightedState: Feature | null;
  setHighlightedState: React.Dispatch<React.SetStateAction<any>>;
};

const DEFAULT_VALUE = {
  //@ts-ignore
  districts: geojsonGO["features"],
  selectedDistrict: null,
  setSelectedDistrict: () => {},
  highlightedDistrict: null,
  setHighlightedDistrict: () => {},
  //@ts-ignore
  states: geojsonBR["states"],
  selectedState: null,
  setSelectedState: () => {},
  highlightedState: null,
  setHighlightedState: () => {},
};

const featuresContext = createContext<FeaturesContext>(DEFAULT_VALUE);

export function FeaturesProvider({ children }: any) {
  const [districts] = useState(DEFAULT_VALUE.districts);
  const [selectedDistrict, setSelectedDistrict] = useState(
    DEFAULT_VALUE.selectedDistrict
  );
  const [highlightedDistrict, setHighlightedDistrict] = useState(
    DEFAULT_VALUE.highlightedDistrict
  );

  const [states] = useState(DEFAULT_VALUE.states);
  const [selectedState, setSelectedState] = useState(
    DEFAULT_VALUE.selectedState
  );
  const [highlightedState, setHighlightedState] = useState(
    DEFAULT_VALUE.highlightedState
  );

  return (
    <featuresContext.Provider
      value={{
        districts,
        selectedDistrict,
        setSelectedDistrict,
        highlightedDistrict,
        setHighlightedDistrict,
        states,
        selectedState,
        setSelectedState,
        highlightedState,
        setHighlightedState,
      }}
    >
      {children}
    </featuresContext.Provider>
  );
}

export function useFeatures() {
  const context = useContext(featuresContext);
  const {
    districts,
    selectedDistrict,
    setSelectedDistrict,
    highlightedDistrict,
    setHighlightedDistrict,
    states,
    selectedState,
    setSelectedState,
    highlightedState,
    setHighlightedState,
  } = context;
  return {
    districts,
    selectedDistrict,
    setSelectedDistrict,
    highlightedDistrict,
    setHighlightedDistrict,
    states,
    selectedState,
    setSelectedState,
    highlightedState,
    setHighlightedState,
  };
}
