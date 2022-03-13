import React from "react";

import CollapsibleSection from "@components/CollapsibleSection";
import MetricDetails from "@components/MetricDetails";

import {
  DistrictSectionType,
  DistrictContentType,
} from "@config/districtProps";

import { Feature } from "@store/contexts/featuresContext";

import * as Styles from "./styles";

interface Props {
  section: DistrictSectionType;
  comparison: Array<Feature>;
}

const GridContent: React.FC<Props> = ({ section, comparison }) => {
  return (
    <CollapsibleSection title={section.title} key={section.title}>
      <Styles.GridContainer>
        {section.content.map((content: DistrictContentType, id) => (
          <Styles.Grid key={id}>
            <Styles.Title>
              <h2>{content.label}</h2>
            </Styles.Title>
            <Styles.GridItem>
              {comparison.map((feature, id) => (
                <Styles.ComparisonLabel key={id}>
                  <label title={feature?.properties.NM_MUN}>
                    {feature?.properties.NM_MUN}
                  </label>
                  <MetricDetails feature={feature} metric={content} />
                </Styles.ComparisonLabel>
              ))}
            </Styles.GridItem>
          </Styles.Grid>
        ))}
      </Styles.GridContainer>
    </CollapsibleSection>
  );
};

export default GridContent;
