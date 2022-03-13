import React from "react";

import CollapsibleSection from "@components/CollapsibleSection";
import MetricDetails from "@components/MetricDetails";

import { useFeatures, useComparison } from "@store/index";

import {
  DistrictSectionType,
  DistrictContentType,
} from "@config/districtProps";

import * as Styles from "./styles";

const DataSection: React.FC<DistrictSectionType> = ({ title, content }) => {
  const { selectedDistrict } = useFeatures();
  const { comparison } = useComparison();

  const isSelectedOnComparison = comparison.some(
    (district) =>
      district.properties.CD_MUN === selectedDistrict?.properties.CD_MUN
  );

  return (
    <CollapsibleSection title={title}>
      {content.map((props: DistrictContentType, id) => (
        <Styles.PropsWrapper key={id}>
          <Styles.PropsTitle>{props.description}</Styles.PropsTitle>

          {comparison.map((district) => (
            <Styles.ValueContent>
              <p>{district.properties.NM_MUN}</p>
              <MetricDetails district={district} metric={props} />
            </Styles.ValueContent>
          ))}

          {!isSelectedOnComparison && (
            <Styles.ValueContent>
              <p>{selectedDistrict?.properties.NM_MUN}</p>
              <MetricDetails district={selectedDistrict} metric={props} />
            </Styles.ValueContent>
          )}
        </Styles.PropsWrapper>
      ))}
    </CollapsibleSection>
  );
};

export default DataSection;
