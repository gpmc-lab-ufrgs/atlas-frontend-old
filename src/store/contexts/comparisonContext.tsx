import { useState, createContext,  useContext } from "react";
import { Feature } from "./featuresContext"

type ComparisonContext = {  
  comparison: Array<Feature>
  addComparisonFeature: React.Dispatch<React.SetStateAction<any>>
  removeComparisonFeature: React.Dispatch<React.SetStateAction<any>>
}

const DEFAULT_VALUE = {
  comparison: [],
  addComparisonFeature: () => {},
  removeComparisonFeature: () => {}
}

const comparisonContext = createContext<ComparisonContext>(DEFAULT_VALUE);

export function ComparisonProvider({ children }: any) {
  const [comparison, setComparison] = useState<Feature[]>(DEFAULT_VALUE.comparison) 

  const addComparisonFeature = (addValue : Feature[]) => {
    setComparison([...comparison, ...addValue])
  }
  
  const removeComparisonFeature = (removeValue : Feature) => {
    setComparison(comparison.filter(feature => feature.properties["NAME_DIST"] !== removeValue.properties["NAME_DIST"]))
  }

  return (
    <comparisonContext.Provider
      value={{ comparison, addComparisonFeature, removeComparisonFeature }}
    >
      {children}
    </comparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(comparisonContext);
  const { comparison, addComparisonFeature, removeComparisonFeature } = context;
  return { comparison, addComparisonFeature, removeComparisonFeature };
}
