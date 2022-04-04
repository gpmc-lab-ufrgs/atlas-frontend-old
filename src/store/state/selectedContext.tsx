import React, { createContext, useContext, useState } from "react";

import { State } from "@customTypes/feature";

import geojsonBR from "@data/BR_UF_2020.json";

import { DEFAULT_VALUE } from "@hook/useFeature";

interface StateActions {
  all: Array<State>;
  selected: State | null;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
}

const selectedStatesContext = createContext<StateActions>(DEFAULT_VALUE);

export function SelectedStatesProvider({ children }: any) {
  //@ts-ignore
  const allStates: Array<State> = geojsonBR["features"];

  const [all] = useState(allStates);
  const [selected, setSelected] = useState(null);

  return (
    <selectedStatesContext.Provider
      value={{
        all,
        selected,
        setSelected,
      }}
    >
      {children}
    </selectedStatesContext.Provider>
  );
}

export function useSelectedState() {
  const context = useContext(selectedStatesContext);
  const state = context;
  return state;
}
