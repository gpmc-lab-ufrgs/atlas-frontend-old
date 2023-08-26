import React, { useState, createContext, useContext } from 'react';

import { State } from '@customTypes/state';

export type ComparisonContext = {
  comparison: Array<State>;
  addComparisonState: React.Dispatch<React.SetStateAction<any>>;
  removeComparisonState: React.Dispatch<React.SetStateAction<any>>;
  removeAllComparisons: () => void; // Add the removeAllComparisons function declaration
};

const DEFAULT_VALUE: ComparisonContext = {
  comparison: [],
  addComparisonState: () => {},
  removeComparisonState: () => {},
  removeAllComparisons: () => {} // Initialize removeAllComparisons with an empty function
};

export const comparisonContext = createContext<ComparisonContext>(DEFAULT_VALUE);

export function ComparisonProviderState({ children }: any) {
  const [comparison, setComparison] = useState<State[]>(DEFAULT_VALUE.comparison);

  console.log('ComparisonProviderState - Initial comparison:', comparison); // Add this line to log the initial comparison value

  const addComparisonState = (addValue: State[]) => {
    const newComparison = [...comparison, ...addValue];
    console.log('addComparisonState - New comparison:', newComparison); // Add this line to log the new comparison value
    setComparison(newComparison);
  };

  const removeComparisonState = (removeValue: State) => {
    const newComparison = comparison.filter(
      (state: State) =>
        //@ts-ignore
        state.properties['NM_UF'] !== removeValue.properties['NM_UF']
    );
    console.log('removeComparisonState - New comparison:', newComparison); // Add this line to log the new comparison value
    setComparison(newComparison);

  };

  const removeAllComparisons = () => {
    console.log('removeAllComparisons - Clearing comparison');
    setComparison([]);
  };

  return (
    <comparisonContext.Provider
      value={{ comparison, addComparisonState, removeComparisonState, removeAllComparisons }}
    >
      {children}
    </comparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(comparisonContext);
  const { comparison, addComparisonState, removeComparisonState, removeAllComparisons } = context;
  return { comparison, addComparisonState, removeComparisonState, removeAllComparisons };
}
