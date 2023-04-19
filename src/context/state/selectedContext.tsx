import React, { createContext, useContext, useState, useEffect } from 'react';
import { State } from '@customTypes/state';
import { DEFAULT_VALUE } from '@hook/useFeature';

export interface StateActions {
  all: Array<State>;
  selected: State | null;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
}

export const selectedStatesContext = createContext<StateActions>(DEFAULT_VALUE);

export function SelectedStatesProvider({ children }: any) {
  const [all, setAll] = useState<Array<State>>([]);
  const [selected, setSelected] = useState<State | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://3.95.16.204:8001/state/geojson');
        const data = await response.json();
        setAll(data.features);
      } catch (error) {
        console.error('Error fetching state data:', error);
      }
    };
    fetchData();
  }, []);

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
