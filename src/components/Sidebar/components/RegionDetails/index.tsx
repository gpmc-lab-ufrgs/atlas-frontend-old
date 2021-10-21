import { FaTimes, FaChevronRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

import { CollapsibleSection } from "../../../CollapsibleSection"
import { useFeatures, useComparison } from "../../../../store"
import { ComparisonButton } from "./components"
import propsMapping, { propsMappingSectionType, propsMappingContentType } from "../../../../config/propsMapping"
import "./styles.css"

export const RegionDetails = () => {
  const { selectedFeature } = useFeatures();
  const { comparison, removeComparisonFeature } = useComparison();
  const ids = comparison.map((feature: any) => feature.properties.FEATID);

  const ComparisonResult = () => (
    <Link to={"/comparison/" + ids.join('+')} className="comparisonButton">
      Show Comparison
      <FaChevronRight className="comparisonIcon"/>
    </Link>
  )
  
  const propsDetails = (section: propsMappingSectionType) => (
    <div>
      {section.content.length > 0 ? 
        <>
          {section.content.map((content: propsMappingContentType, id) => (
            <div className="propsContent" key={id}>
              <h2>{content.label}</h2>
              {/* @ts-ignore */}
              <p>{selectedFeature?.properties[content.id] ? content.format(selectedFeature?.properties[content.id]) : 'n/a'}</p>
            </div>
          ))}
        </>
      :
        <div className="metric" style={{padding: '10px 0'}}>No Data</div> 
      }
    </div>
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
              {comparison.length > 0 && ComparisonResult() }
              <div>
                <p className="disclaimerText">Add up to 4 regions.</p>
              </div>
            </>
          </CollapsibleSection>
        }
      </>
      { propsMapping.map((section, id) => (
        <CollapsibleSection key={id} title={section.title}>
          {propsDetails(section)}
        </CollapsibleSection>
      ))}
    </div>
  )
}