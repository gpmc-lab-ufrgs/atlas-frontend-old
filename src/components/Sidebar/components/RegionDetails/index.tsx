import { FaTimes, FaChevronRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

import { CollapsibleSection } from "../../../CollapsibleSection"
import { useFeatures, useComparison } from "../../../../store"
import { ComparisonButton } from "../ComparisonButton"
import "./styles.css"

export const RegionDetails = () => {
  const { selectedFeature } = useFeatures();
  const { comparison, removeComparisonFeature } = useComparison();
  const ids = comparison.map((feature: any) => feature.properties.FEATID);

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

  const ComparisonResult = () => (
    <Link to={"/comparison/" + ids.join('+')} className="comparisonButton">
      Show Comparison
      <FaChevronRight className="comparisonIcon"/>
    </Link>
  )
  

  return (
    <div className="regionDetails">
      <div className="title"/>
      <>
        {selectedFeature && <ComparisonButton/>}
        {comparison.length > 0 &&
          <CollapsibleSection title="Locations to Compare">
            <>
              {comparison.map((feature: any) => (
                <div className="comparisonList" key={feature.properties.FEATID}>
                  {feature.properties["NAME_DIST"]}
                  <FaTimes
                    className="closeIcon"
                    onClick={() => removeComparisonFeature(feature)}
                    />
                </div>
              ))}
              {comparison.length > 1 && ComparisonResult() }
              <div>
                <p className="disclaimerText">Add up to 4 regions.</p>
              </div>
            </>
          </CollapsibleSection>
        }
      </>
      { collapsibleOptions.map((option, id) => (
        <CollapsibleSection key={id} title={option}>
          <div className="metric" style={{padding: '10px 0'}}>No Data</div>
        </CollapsibleSection>
      ))}
    </div>
  )
}