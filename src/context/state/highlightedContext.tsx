import React, { createContext, useContext, useState } from 'react';

import { State } from '@customTypes/state';

export interface StateActions {
  highlighted: State | null;
  setHighlighted: React.Dispatch<React.SetStateAction<any>>;
}

const DEFAULT_VALUE_HIGHLIGHTED_CONTEXT: StateActions = {
  highlighted: null,
  setHighlighted: () => {},
};

export const highlightedStatesContext = createContext<StateActions>(DEFAULT_VALUE_HIGHLIGHTED_CONTEXT);

export function HighlightedStatesProvider({ children }: any) {
  const [highlighted, setHighlighted] = useState(null);

  return (
    <highlightedStatesContext.Provider
      value={{
        setHighlighted,
        highlighted,
      }}
    >
      {children}
    </highlightedStatesContext.Provider>
  );
}

export function useHighlightedState() {
  const context = useContext(highlightedStatesContext);
  const state = context;
  return state;
}
