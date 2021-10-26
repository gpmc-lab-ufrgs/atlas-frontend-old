import propsMapping, { propsMappingSectionType, propsMappingContentType } from "../../../../config/propsMapping"
import { useComparison } from "../../../../store"
import { CollapsibleSection } from "../../../index"
import "./styles.css"
  
export const GridView = () => {
  const { comparison } = useComparison();

  const propsDetails = (section: propsMappingSectionType) => {
    return (  
      <div className="grid-container">
        {section.content.length > 0 ? 
          <>
            {section.content.map((content: propsMappingContentType, id) => (
              <div key={id} className="grid-item metric">
              <div className="grid-item-head">
                <h2>{content.label}</h2>
              </div>
              <div className="grid-item-body">
                {comparison.map((feature, id) => (
                  <div key={id} className="comparison">
                    <label title={feature?.properties.NAME_DIST}>{feature?.properties.NAME_DIST}</label>
                    {/* @ts-ignore */}
                    <data value={feature?.properties[content.id]}>{content.format(feature?.properties[content.id])}</data>
                  </div>
                ))}
              </div>
            </div>
            ))}
          </>
        :
          <div className="metric" style={{padding: '10px 0'}}>No Data</div> 
        }
      </div>
    )
  }
  
  
  return (
    <div className="grid-view">
      {propsMapping.map((section) => (
        <CollapsibleSection title={section.title} key={section.title}>
          {propsDetails(section)}
        </CollapsibleSection>
      ))}
    </div>
  )
}