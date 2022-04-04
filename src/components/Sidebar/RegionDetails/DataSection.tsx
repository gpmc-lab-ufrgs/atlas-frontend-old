import React from "react";

import Collapsible from "@components/Collapsible";

import MetricDetails from "@components/MetricDetails";

import { useSelectedDistrict } from "@store/district/selectedContext";
import { useComparison } from "@store/comparisonContext";

import {
  DistrictSectionType,
  DistrictContentType,
} from "@config/districtProps";

import * as Styles from "./styles";

const DataSection: React.FC<DistrictSectionType> = ({ title, content }) => {
  const { selected } = useSelectedDistrict();
  const { comparison } = useComparison();

  const isSelectedOnComparison = comparison.some(
    (region) => region.properties.CD_MUN === selected?.properties.CD_MUN
  );

  return (
    <Collapsible title={title}>
      {content.map((props: DistrictContentType, id) => (
        <Styles.PropsWrapper key={id}>
          <Styles.PropsTitle>{props.description}</Styles.PropsTitle>

          {comparison.map((district, id) => (
            <Styles.ValueContent key={id}>
              <p>{district.properties.NM_MUN}</p>
              <MetricDetails district={district} metric={props} />
            </Styles.ValueContent>
          ))}

          {!isSelectedOnComparison && (
            <Styles.ValueContent>
              <p>{selected?.properties.NM_MUN}</p>
              <MetricDetails district={selected} metric={props} />
            </Styles.ValueContent>
          )}
        </Styles.PropsWrapper>
      ))}
    </Collapsible>
  );
};

export default DataSection;
