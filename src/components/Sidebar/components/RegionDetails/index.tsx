import { CollapsibleSection } from "./components"
import { ComparisonButton } from "../ComparisonButton"
import { useFeatures, useComparison } from "../../../../store"
import { FaTimes } from 'react-icons/fa';
import "./styles.css"

export const RegionDetails = () => {
  const { selectedFeature } = useFeatures();
  const { comparison, removeComparisonFeature } = useComparison();

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
      <>
        {selectedFeature && <ComparisonButton/>}
        {comparison.length > 0 &&
          <CollapsibleSection title="Locations to Compare">
            <>
              {comparison.map((feature: any) => (
                <div className="comparisonList" key={feature.properties.SA2_MAIN16}>
                  {feature.properties["NAME_DIST"]}
                  <FaTimes
                    className="closeIcon"
                    onClick={() => removeComparisonFeature(feature)}
                    />
                </div>
              ))}
              <div>
                <p className="disclaimerText">Add up to 4 regions.</p>
              </div>
            </>
          </CollapsibleSection>
        }
      </>
      { collapsibleOptions.map((option) => (
        <CollapsibleSection title={option}>
          <div className="metric" style={{padding: '10px 0'}}>No Data</div>
        </CollapsibleSection>
      ))}
    </div>
  )
}