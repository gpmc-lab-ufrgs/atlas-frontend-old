import React, { useState, createContext, useContext } from "react";
import { Feature } from "@types/Feature";

type ComparisonContext = {
  comparison: Array<Feature>;
  addComparisonDistrict: React.Dispatch<React.SetStateAction<any>>;
  removeComparisonDistrict: React.Dispatch<React.SetStateAction<any>>;
};

const DEFAULT_VALUE = {
  comparison: [],
  addComparisonDistrict: () => {},
  removeComparisonDistrict: () => {},
};

const comparisonContext = createContext<ComparisonContext>(DEFAULT_VALUE);

export function ComparisonProvider({ children }: any) {
  const [comparison, setComparison] = useState<Feature[]>(
    DEFAULT_VALUE.comparison
  );

  const addComparisonDistrict = (addValue: Feature[]) => {
    setComparison([...comparison, ...addValue]);
  };

  const removeComparisonDistrict = (removeValue: Feature) => {
    setComparison(
      comparison.filter(
        (district: Feature) =>
          district.properties["NM_MUN"] !== removeValue.properties["NM_MUN"]
      )
    );
  };

  return (
    <comparisonContext.Provider
      value={{ comparison, addComparisonDistrict, removeComparisonDistrict }}
    >
      {children}
    </comparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(comparisonContext);
  const { comparison, addComparisonDistrict, removeComparisonDistrict } =
    context;
  return { comparison, addComparisonDistrict, removeComparisonDistrict };
}
