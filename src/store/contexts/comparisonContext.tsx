import { useState, createContext,  useContext } from "react";
import { Feature } from "./featuresContext"

type ComparisonType = "table" | "grid"

type ComparisonContext = {  
  comparison: Array<Feature>
  addComparisonFeature: React.Dispatch<React.SetStateAction<any>>
  removeComparisonFeature: React.Dispatch<React.SetStateAction<any>>
  comparisonMode: boolean
  setComparisonMode: React.Dispatch<React.SetStateAction<any>>
  comparisonType: ComparisonType
  setComparisonType: React.Dispatch<React.SetStateAction<any>>
}

const DEFAULT_VALUE = {
  comparison: [],
  addComparisonFeature: () => {},
  removeComparisonFeature: () => {},
  comparisonMode: false,
  setComparisonMode: () => {},
  comparisonType: "table" as ComparisonType,
  setComparisonType: () => {}
}

const comparisonContext = createContext<ComparisonContext>(DEFAULT_VALUE);

export function ComparisonProvider({ children }: any) {
  const [comparison, setComparison] = useState<Feature[]>(DEFAULT_VALUE.comparison) 
  const [comparisonMode, setComparisonMode] = useState<boolean>(DEFAULT_VALUE.comparisonMode) 
  const [comparisonType, setComparisonType] = useState<ComparisonType>(DEFAULT_VALUE.comparisonType) 

  const addComparisonFeature = (addValue : Feature[]) => {
    setComparison([...comparison, ...addValue])
  }
  
  const removeComparisonFeature = (removeValue : Feature) => {
    setComparison(comparison.filter(feature => feature.properties["NAME_DIST"] !== removeValue.properties["NAME_DIST"]))
  }

  return (
    <comparisonContext.Provider
      value={{ comparison, addComparisonFeature, removeComparisonFeature, comparisonMode, setComparisonMode, comparisonType, setComparisonType }}
    >
      {children}
    </comparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(comparisonContext);
  const { comparison, addComparisonFeature, removeComparisonFeature, comparisonMode, setComparisonMode, comparisonType, setComparisonType } = context;
  return { comparison, addComparisonFeature, removeComparisonFeature, comparisonMode, setComparisonMode, comparisonType, setComparisonType };
}
