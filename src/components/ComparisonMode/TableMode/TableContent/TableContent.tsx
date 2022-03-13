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

const TableContent: React.FC<Props> = ({ section, comparison }) => {
  return (
    <CollapsibleSection title={section.title}>
      {section.content.map((content: DistrictContentType, id) => (
        <Styles.Table lineTableNumber={id}>
          <Styles.ColumnTitle>{content.description}</Styles.ColumnTitle>
          {comparison.map((region, id) => (
            <Styles.Column gridColumnNumber={id + 2}>
              <MetricDetails district={region} metric={content} />
            </Styles.Column>
          ))}
        </Styles.Table>
      ))}
    </CollapsibleSection>
  );
};

export default TableContent;
