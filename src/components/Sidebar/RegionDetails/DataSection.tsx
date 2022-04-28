import React from "react";

import CollapsibleSection from "@components/CollapsibleSection";
import MetricDetails from "@components/MetricDetails";

import { useFeatures } from "@store/featuresContext";
import { useComparison } from "@store/comparisonContext";

import {
  DistrictSectionType,
  DistrictContentType,
} from "@config/districtProps";

import { Tooltip } from "@mui/material";

import * as Styles from "./styles";

const DataSection: React.FC<DistrictSectionType> = ({ title, content }) => {
  const { district } = useFeatures();
  const { comparison } = useComparison();

  const isSelectedOnComparison = comparison.some(
    (region) =>
      region.properties.CD_MUN === district.selected?.properties.CD_MUN
  );

  return (
    <CollapsibleSection title={title}>
      {content.map((props: DistrictContentType, id) => (
        <Styles.PropsWrapper key={id}>
          {props.title === "" ? (
            <Styles.PropsTitle>{props.description}</Styles.PropsTitle>
          ) : (
            <Tooltip title={props.description} arrow>
              <Styles.PropsTitle>{props.title}</Styles.PropsTitle>
            </Tooltip>
          )}

          {comparison.map((district) => (
            <Styles.ValueContent>
              <p>{district.properties.NM_MUN}</p>
              <MetricDetails district={district} metric={props} />
            </Styles.ValueContent>
          ))}

          {!isSelectedOnComparison && (
            <Styles.ValueContent>
              <p>{district.selected?.properties.NM_MUN}</p>
              <MetricDetails district={district.selected} metric={props} />
            </Styles.ValueContent>
          )}
        </Styles.PropsWrapper>
      ))}
    </CollapsibleSection>
  );
};

export default DataSection;
