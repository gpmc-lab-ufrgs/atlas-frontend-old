import React, { createContext, useContext, useEffect, useState } from 'react';

import { State } from '@customTypes/state';

import { DEFAULT_VALUE } from '@hook/useFeature';
import { getAllStates } from '@services/state';

export interface StateActions {
  all: Array<State>;
  selected: State | null;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
}

export const selectedStatesContext = createContext<StateActions>(DEFAULT_VALUE);

export function SelectedStatesProvider({ children }: any) {
  const [all, setAll] = useState<State[]>([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getAllStates().then((states) => {
      setAll(states);
    });
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
