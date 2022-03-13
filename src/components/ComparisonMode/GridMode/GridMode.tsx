import { Feature } from "@store/contexts/featuresContext";

import districtProps from "@config/districtProps";

import GridContent from "./GridContent";

import * as Styles from "./styles";

interface Props {
  comparison: Array<Feature>;
}

const GridMode: React.FC<Props> = ({ comparison }) => {
  return (
    <Styles.GridContainer>
      {districtProps.map((section) => (
        <GridContent section={section} comparison={comparison} />
      ))}
    </Styles.GridContainer>
  );
};

export default GridMode;
