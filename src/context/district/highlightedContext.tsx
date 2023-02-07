import React, { createContext, useContext, useState } from 'react';

import { District } from '@customTypes/district';

export interface DistrictActions {
  highlighted: District | null;
  setHighlighted: React.Dispatch<React.SetStateAction<any>>;
}

const DEFAULT_VALUE_HIGHLIGHTED_CONTEXT: DistrictActions = {
  highlighted: null,
  setHighlighted: () => {},
};

export const highlightedDistrictsContext = createContext<DistrictActions>(DEFAULT_VALUE_HIGHLIGHTED_CONTEXT);

export function HighlightedDistrictProvider({ children }: any) {
  const [highlighted, setHighlighted] = useState(null);

  return (
    <highlightedDistrictsContext.Provider
      value={{
        setHighlighted,
        highlighted,
      }}
    >
      {children}
    </highlightedDistrictsContext.Provider>
  );
}

export function useHighlightedDistrict() {
  const context = useContext(highlightedDistrictsContext);
  const district = context;
  return district;
}
