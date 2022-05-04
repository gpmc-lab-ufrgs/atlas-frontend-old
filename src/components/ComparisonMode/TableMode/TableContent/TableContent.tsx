import React from "react";

import Collapsible from "@components/Collapsible";

import MetricDetails from "@components/MetricDetails";

import {
  DistrictSectionType,
  DistrictContentType,
} from "@config/districtProps";

import { Feature } from "@customTypes/feature";

import * as Styles from "./styles";

interface Props {
  section: DistrictSectionType;
  comparison: Array<Feature>;
}

const TableContent: React.FC<Props> = ({ section, comparison }) => {
  return (
    <Collapsible title={section.title}>
      {section.content.map((content: DistrictContentType, id) => (
        <Styles.Table lineTableNumber={id} key={id}>
          <Styles.ColumnTitle>{content.description}</Styles.ColumnTitle>
          {comparison.map((region, id) => (
            <Styles.Column gridColumnNumber={id + 2} key={id}>
              <MetricDetails district={region} metric={content} />
            </Styles.Column>
          ))}
        </Styles.Table>
      ))}
    </Collapsible>
  );
};

export default TableContent;
