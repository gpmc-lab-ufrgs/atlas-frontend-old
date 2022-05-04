import { useSelectedDistrict } from "@store/district/selectedContext";
import { useComparison } from "@store/comparisonContext";

import { Feature } from "@customTypes/feature";

import * as Styles from "./styles";

const ComparisonButton = () => {
  const { selected } = useSelectedDistrict();
  const { comparison, addComparisonDistrict, removeComparisonDistrict } =
    useComparison();

  const isButtonOn = comparison.length >= 4;
  const isSelectedOnComparison = comparison.some(
    (region) => region.properties.CD_MUN === selected?.properties.CD_MUN
  );

  const comparisonClick = (feature: Feature | null) => {
    if (isSelectedOnComparison) {
      removeComparisonDistrict(feature);
    } else {
      addComparisonDistrict([feature]);
    }
  };

  return (
    <Styles.ComparisonButton>
      <Styles.ButtonWrapper
        disabled={!isSelectedOnComparison && isButtonOn}
        onClick={() => comparisonClick(selected)}
      >
        <Styles.ComparisonIcon />
        {isSelectedOnComparison
          ? "Remover da comparação"
          : "Adicionar a comparação"}
      </Styles.ButtonWrapper>
    </Styles.ComparisonButton>
  );
};

export default ComparisonButton;
