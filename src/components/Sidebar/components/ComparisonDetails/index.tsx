import { useHistory } from "react-router";

import { CollapsibleSection } from "../../../CollapsibleSection"
import { useComparison, useFeatures } from "../../../../store"
import { FaTimes, FaArrowLeft } from 'react-icons/fa';
import { Map } from "../../../index"
import "./styles.css"

export const ComparisonDetails = () => {
  const { comparison, removeComparisonFeature } = useComparison();
  const { setSelectedFeature } = useFeatures()
  const history = useHistory();
  
  const handleGoBack = () => {
    history.replace("/")
    setSelectedFeature(null)
  }

  const Header = () => (
    <div className="comparisonHeader">
      <div className="comparisonHeaderContent">
        <div onClick={handleGoBack} className="comparisonHeaderIcon">
          <FaArrowLeft />
        </div>
        Comparing Locations
      </div>
    </div>
  )

  return (
    <div className="comparisonDetails">
      <Header/>
      <div className="title"/>
      {comparison.length > 0 &&
        <>
          <CollapsibleSection title="Locations to Compare">
            <>
              {comparison.map((feature: any) => (
                <div className="comparisonList" key={feature.CD_MUN}>
                  {feature.NM_MUN}
                  <FaTimes
                    className="closeIcon"
                    onClick={() => removeComparisonFeature(feature)}
                    />
                </div>
              ))}
            </>
          </CollapsibleSection>
          <CollapsibleSection title="Map">
            <div className="miniMap">
              <Map mini={true}/>
            </div>
          </CollapsibleSection>
        </>
        }
    </div>
  )
}