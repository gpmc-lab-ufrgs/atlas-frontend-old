import { Feature } from "@customTypes/feature";

import districtProps from "@config/district";

import GridContent from "./GridContent";

import * as Styles from "./styles";

interface Props {
  comparison: Array<Feature>;
}

const GridMode: React.FC<Props> = ({ comparison }) => {
  return (
    <Styles.GridContainer>
      {districtProps.map((section, id) => (
        <GridContent section={section} comparison={comparison} key={id} />
      ))}
    </Styles.GridContainer>
  );
};

export default GridMode;
