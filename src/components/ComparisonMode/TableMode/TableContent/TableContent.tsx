import React from "react";

import { MetricDetails } from "@components/MetricDetails";
import { CollapsibleSection } from "@components/CollapsibleSection/index";

import { CountySectionType, CountyContentType } from "@config/countyProps";

import { Feature } from "@store/contexts/featuresContext";

import * as Styles from "./styles";

interface Props {
  section: CountySectionType;
  comparison: Array<Feature>;
}

const TableContent: React.FC<Props> = ({ section, comparison }) => {
  return (
    <CollapsibleSection title={section.title}>
      {section.content.map((content: CountyContentType, id) => (
        <Styles.Table lineTableNumber={id}>
          <Styles.ColumnTitle>{content.description}</Styles.ColumnTitle>
          {comparison.map((region, id) => (
            <Styles.Column gridColumnNumber={id + 2}>
              <MetricDetails feature={region} metric={content} />
            </Styles.Column>
          ))}
        </Styles.Table>
      ))}
    </CollapsibleSection>
  );
};

export default TableContent;
