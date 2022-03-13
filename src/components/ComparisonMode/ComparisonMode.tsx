import { useComparison } from "@store/index";

import GridMode from "./GridMode";
import TableMode from "./TableMode";

import * as Styles from "./styles";

const ComparisonMode = () => {
  const { comparisonType } = useComparison();

  function comparisonModeToggle() {
    switch (comparisonType) {
      case "table":
        return <TableMode />;
      case "grid":
        return <GridMode />;
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
