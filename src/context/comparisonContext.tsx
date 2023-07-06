import React, { useState, createContext, useContext } from 'react';

import { District } from '@customTypes/district';

export type ComparisonContext = {
  comparison: Array<District>;
  addComparisonDistrict: React.Dispatch<React.SetStateAction<any>>;
  removeComparisonDistrict: React.Dispatch<React.SetStateAction<any>>;
  removeAllComparisons: () => void; // Add the removeAllComparisons function declaration
};

const DEFAULT_VALUE: ComparisonContext = {
  comparison: [],
  addComparisonDistrict: () => {},
  removeComparisonDistrict: () => {},
  removeAllComparisons: () => {} // Initialize removeAllComparisons with an empty function
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

  const removeAllComparisons = () => {
    setComparison([]);
  };

  return (
    <comparisonContext.Provider
      value={{ comparison, addComparisonDistrict, removeComparisonDistrict, removeAllComparisons }}
    >
      {children}
    </comparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(comparisonContext);
  const { comparison, addComparisonDistrict, removeComparisonDistrict, removeAllComparisons } = context;
  return { comparison, addComparisonDistrict, removeComparisonDistrict, removeAllComparisons };
}
