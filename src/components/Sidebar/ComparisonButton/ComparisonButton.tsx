import { useFeatures } from "@store/featuresContext";
import { useComparison } from "@store/comparisonContext";
import { Feature } from "@types/Feature";

import * as Styles from "./styles";

const ComparisonButton = () => {
  const { district } = useFeatures();
  const { comparison, addComparisonDistrict, removeComparisonDistrict } =
    useComparison();

  const isButtonOn = comparison.length >= 4;
  const isSelectedOnComparison = comparison.some(
    (region) =>
      region.properties.CD_MUN === district.selected?.properties.CD_MUN
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
        onClick={() => comparisonClick(district.selected)}
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
