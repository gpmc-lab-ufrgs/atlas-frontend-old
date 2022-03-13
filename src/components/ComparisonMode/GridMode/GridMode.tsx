import { useComparison } from "@store/index";
import countyProps from "@config/countyProps";

import GridContent from "./GridContent";

import * as Styles from "./styles";

const GridMode = () => {
  const { comparison } = useComparison();

  return (
    <Styles.GridContainer>
      {countyProps.map((section) => (
        <GridContent section={section} comparison={comparison} />
      ))}
    </Styles.GridContainer>
  );
};

export default GridMode;
