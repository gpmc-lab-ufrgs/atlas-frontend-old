import React, { createContext, useContext, useState } from 'react';

import { District } from '@customTypes/district';

import { DEFAULT_VALUE } from '@hook/useFeature';

interface DistrictActions {
  highlighted: District | null;
  setHighlighted: React.Dispatch<React.SetStateAction<any>>;
}

const highlightedDistrictsContext = createContext<DistrictActions>(DEFAULT_VALUE);

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
