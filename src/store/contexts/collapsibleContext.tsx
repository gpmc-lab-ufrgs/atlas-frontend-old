import React, { useState, createContext,  useContext } from "react";

type CollapsibleType = {
  "Locations to Compare": boolean
  "Demographic Summary": boolean,
  "Economic Summary": boolean,
  "Growth Summary": boolean,
  "Residential Housing Summary": boolean,
  "Financial Transactions": boolean,
  "Business Counts": boolean,
  "Turnover vs. Cost of Sales": boolean,
  "Business Rental Costs": boolean,
}

type CollapsibleContext = {  
  collapsible: CollapsibleType,
  setCollapsible: React.Dispatch<React.SetStateAction<any>>
}

const DEFAULT_VALUE = {
  collapsible: {
    "Locations to Compare": true,
    "Demographic Summary": false,
    "Economic Summary": false,
    "Growth Summary": false,
    "Residential Housing Summary": false,
    "Financial Transactions": false,
    "Business Counts": false,
    "Turnover vs. Cost of Sales": false,
    "Business Rental Costs": false,
  },
  setCollapsible: () => {}
}

const collapsibleContext = createContext<CollapsibleContext>(DEFAULT_VALUE);

export function CollapsibleProvider({ children }: any) {
  const [collapsible, setCollapsible] = useState(DEFAULT_VALUE.collapsible) 

  return (
    <collapsibleContext.Provider
      value={{collapsible, setCollapsible}}
    >
      {children}
    </collapsibleContext.Provider>
  );
}

export function useCollapsible() {
  const context = useContext(collapsibleContext);
  const { collapsible, setCollapsible } = context;
  return { collapsible, setCollapsible };
}
