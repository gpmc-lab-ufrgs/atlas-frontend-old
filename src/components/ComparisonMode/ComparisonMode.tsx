import { useComparison } from "@store/index";

import GridMode from "./GridMode";
import TableMode from "./TableMode";

import * as Styles from "./styles";

const ComparisonMode = () => {
  const { comparisonType, comparison } = useComparison();

  function comparisonModeToggle() {
    switch (comparisonType) {
      case "table":
        return <TableMode comparison={comparison} />;
      case "grid":
        return <GridMode comparison={comparison} />;
      default:
        return <>Erro ao carregar dados</>;
    }
  }

  return (
    <Styles.ComparisonWrapper>
      {comparisonModeToggle()}
    </Styles.ComparisonWrapper>
  );
};

export default ComparisonMode;
