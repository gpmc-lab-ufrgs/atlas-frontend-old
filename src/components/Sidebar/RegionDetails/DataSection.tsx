import React from "react";

import CollapsibleSection from "@components/CollapsibleSection";
import MetricDetails from "@components/MetricDetails";

import { useFeatures } from "@store/index";

import {
  DistrictSectionType,
  DistrictContentType,
} from "@config/districtProps";

import * as Styles from "./styles";

const DataSection: React.FC<DistrictSectionType> = ({ title, content }) => {
  const { selectedFeature } = useFeatures();

  return (
    <CollapsibleSection title={title}>
      {content.map((props: DistrictContentType, id) => (
        <Styles.PropsWrapper key={id}>
          <Styles.PropsTitle>{props.description}</Styles.PropsTitle>

          <MetricDetails feature={selectedFeature} metric={props} />
        </Styles.PropsWrapper>
      ))}
    </CollapsibleSection>
  );
};

export default DataSection;
