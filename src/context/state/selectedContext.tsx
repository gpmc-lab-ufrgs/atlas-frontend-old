import React, { createContext, useContext, useState } from 'react';

import { State } from '@customTypes/state';

import geojsonBR from '@data/BR_UF_2020.json';

export interface StateActions {
  allStates: Array<State>;
  selectedState: State | null;
  setSelectedState: React.Dispatch<React.SetStateAction<any>>;
}

const DEFAULT_VALUE_STATE_ACTIONS: StateActions = {
  allStates: [],
  selectedState: null,
  setSelectedState: () => {},
};

export const selectedStatesContext = createContext<StateActions>(DEFAULT_VALUE_STATE_ACTIONS);

export function SelectedStatesProvider({ children }: any) {
  //@ts-ignore
  const [allStates] = useState<State[]>(geojsonBR['features']);
  const [selectedState, setSelectedState] = useState(null);

  return (
    <selectedStatesContext.Provider
      value={{
        allStates,
        selectedState,
        setSelectedState,
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
