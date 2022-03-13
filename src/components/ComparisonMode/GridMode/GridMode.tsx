import { Feature } from "@store/contexts/featuresContext";

import countyProps from "@config/countyProps";

import GridContent from "./GridContent";

import * as Styles from "./styles";

interface Props {
  comparison: Array<Feature>;
}

const GridMode: React.FC<Props> = ({ comparison }) => {
  return (
    <Styles.GridContainer>
      {countyProps.map((section) => (
        <GridContent section={section} comparison={comparison} />
      ))}
    </Styles.GridContainer>
  );
};

export default GridMode;
