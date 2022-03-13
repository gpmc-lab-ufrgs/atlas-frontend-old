import { useComparison } from "@store/index";

import { GridView } from "./components";
import TableMode from "./TableMode";

import * as Styles from "./styles";

const ComparisonMode = () => {
  const { comparisonType } = useComparison();

  function comparisonModeToggle() {
    switch (comparisonType) {
      case "table":
        return <TableMode />;
      case "grid":
        return <GridView />;
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
