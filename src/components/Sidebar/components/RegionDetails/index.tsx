import { FaTimes, FaChevronRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

import propsMapping, { propsMappingSectionType, propsMappingContentType } from "../../../../config/propsMapping"
import { useFeatures, useComparison } from "../../../../store"
import geosesData from "../../../../data/GeoSesObject.json";
import { CollapsibleSection } from "../../../index"
import { ComparisonButton } from "./components"
import { MetricDetails } from "../../../index"
import "./styles.css"

export const RegionDetails = () => {
  const { selectedFeature } = useFeatures();
  const { comparison, removeComparisonFeature } = useComparison();
  const ids = comparison.map((feature: any) => feature.properties.CD_MUN);

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
            <>
              <h2 title={content.label}>{content.label}</h2>
              {
                //@ts-ignore
                geosesData[selectedFeature?.properties.CD_MUN][content.id] ?
                <MetricDetails key={id} feature={selectedFeature} metric={content} /> :
                <div className="propsContent" key={id}>
                  <h2>{content.label}</h2>
                  <p>'n/a'</p>
                </div>
              }
            </>
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
      <div className='regionDetailsContent'>
        {selectedFeature && <ComparisonButton/>}
        {comparison.length > 0 &&
          <CollapsibleSection title="Locations to Compare">
            <>
              {comparison.map((feature: any) => (
                <div className="comparisonList" key={feature.properties.CD_MUN}>
                  {feature.properties["NM_MUN"]}
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
        { propsMapping.map((section, id) => (
          <CollapsibleSection key={id} title={section.title}>
            {propsDetails(section)}
          </CollapsibleSection>
        ))}
      </div>
    </div>
  )
}