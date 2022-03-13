import { useFeatures, useComparison } from "@store/index";
import { Feature } from "@store/contexts/featuresContext";

import * as Styles from "./styles";

const ComparisonButton = () => {
  const { selectedDistrict } = useFeatures();
  const { comparison, addComparisonDistrict, removeComparisonDistrict } =
    useComparison();

  const isButtonOn = comparison.length >= 4;
  const isSelectedOnComparison = comparison.some(
    (district) =>
      district.properties.CD_MUN === selectedDistrict?.properties.CD_MUN
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
        onClick={() => comparisonClick(selectedDistrict)}
      >
        <Styles.ComparisonIcon />
        {isSelectedOnComparison
          ? "Remove from Comparison"
          : "Add to Comparison"}
      </Styles.ButtonWrapper>
    </Styles.ComparisonButton>
  );
};

export default ComparisonButton;
