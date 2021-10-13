import { CollapsibleSection } from "../../../CollapsibleSection"
import { useComparison } from "../../../../store"
import { Link } from "react-router-dom";
import { FaTimes, FaArrowLeft } from 'react-icons/fa';
import "./styles.css"

export const ComparisonDetails = () => {
  const { comparison, removeComparisonFeature } = useComparison();
  
  const Header = () => (
    <div className="comparisonHeader">
      <div className="comparisonHeaderContent">
        <Link to="/" className="comparisonHeaderIcon">
          <FaArrowLeft />
        </Link>
        Comparing Locations
      </div>
    </div>
  )

  return (
    <div className="comparisonDetails">
      <Header/>
      <div className="title"/>
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
          </>
        </CollapsibleSection>
      }
    </div>
  )
}