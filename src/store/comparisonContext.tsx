import React, { useState, createContext, useContext } from 'react';

import { District } from '@customTypes/feature';

type ComparisonContext = {
  comparison: Array<District>;
  addComparisonDistrict: React.Dispatch<React.SetStateAction<any>>;
  removeComparisonDistrict: React.Dispatch<React.SetStateAction<any>>;
};

const DEFAULT_VALUE = {
  comparison: [],
  addComparisonDistrict: () => {},
  removeComparisonDistrict: () => {},
};

export const comparisonContext = createContext<ComparisonContext>(DEFAULT_VALUE);

export function ComparisonProvider({ children }: any) {
  const [comparison, setComparison] = useState<District[]>(DEFAULT_VALUE.comparison);

  const addComparisonDistrict = (addValue: District[]) => {
    setComparison([...comparison, ...addValue]);
  };

  const removeComparisonDistrict = (removeValue: District) => {
    setComparison(
      comparison.filter(
        (district: District) =>
          //@ts-ignore
          district.properties['NM_MUN'] !== removeValue.properties['NM_MUN'],
      ),
    );
  };

  return (
    <comparisonContext.Provider value={{ comparison, addComparisonDistrict, removeComparisonDistrict }}>
      {children}
    </comparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(comparisonContext);
  const { comparison, addComparisonDistrict, removeComparisonDistrict } = context;
  return { comparison, addComparisonDistrict, removeComparisonDistrict };
}
