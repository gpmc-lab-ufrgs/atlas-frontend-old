import { CollapsibleSection } from "./components"
// import { useFeatures } from "../../store"
import "./styles.css"

export const RegionDetails = () => {
  // const { selectedFeature } = useFeatures();

  const collapsibleOptions = [
    "Demographic Summary",
    "Economic Summary",
    "Growth Summary",
    "Residential Housing Summary",
    "Financial Transactions",
    "Business Counts",
    "Turnover vs. Cost of Sales",
    "Business Rental Costs",
  ]
  

  return (
    <div className="regionDetails">
      <div className="title"/>
      { 
        collapsibleOptions.map((option) => (
          <CollapsibleSection title={option}>
            <div className="metric" style={{padding: '10px 0'}}>No Data</div>
          </CollapsibleSection>
        ))
      }
    </div>
  )
}