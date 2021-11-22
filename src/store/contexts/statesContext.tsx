import React, { useState, createContext,  useContext } from "react";
// import geojsonDataObject from "../../data/GeoSes.json";
import geojsonBR from "../../data/BR_UF_2020.json";

export type State = { 
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


type StatesContext = {
  states: Array<State>,
  selectedState: State | null,
  setSelectedState: React.Dispatch<React.SetStateAction<any>>
  highlightedState: State | null,
  setHighlightedState: React.Dispatch<React.SetStateAction<any>>
}

const DEFAULT_VALUE = {
  //@ts-ignore
  states: geojsonBR['states'],
  selectedState: null,
  setSelectedState: () => {},
  highlightedState: null,
  setHighlightedState: () => {},
}

const statesContext = createContext<StatesContext>(DEFAULT_VALUE);

export function StatesProvider({ children }: any) {
  const [ states ] = useState(DEFAULT_VALUE.states) 
  const [ selectedState, setSelectedState ] = useState(DEFAULT_VALUE.selectedState)
  const [ highlightedState, setHighlightedState ] = useState(DEFAULT_VALUE.highlightedState)

  return (
    <statesContext.Provider
      value={{
        states,
        selectedState,
        setSelectedState,
        highlightedState,
        setHighlightedState
      }}
    >
      {children}
    </statesContext.Provider>
  );
}

export function useStates() {
  const context = useContext(statesContext);
  const { states, selectedState, setSelectedState, highlightedState, setHighlightedState } = context;
  return { states, selectedState, setSelectedState, highlightedState, setHighlightedState };
}
