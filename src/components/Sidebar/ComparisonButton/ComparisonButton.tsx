import { useFeatures, useComparison } from "@store/index";
import { Feature } from "@store/contexts/featuresContext";

import * as Styles from "./styles";

const ComparisonButton = () => {
  const { selectedDistrict } = useFeatures();
  const { comparison, addComparisonDistrict, removeComparisonDistrict } =
    useComparison();

  const isComparing =
    comparison.find(
      (feature: any) =>
        feature["FU_NAME"] === selectedDistrict?.properties.NM_MUN
    ) !== undefined;

  const enableButton = comparison.length >= 4;

  const comparisonClick = (feature: Feature | null) => {
    if (isComparing) {
      removeComparisonDistrict(feature);
    } else {
      addComparisonDistrict([feature]);
    }
  };

  return (
    <Styles.ComparisonButton>
      <Styles.ButtonWrapper
        disabled={!isComparing && enableButton}
        onClick={() => comparisonClick(selectedDistrict)}
      >
        <Styles.ComparisonIcon />
        {isComparing ? "Remove from Comparison" : "Add to Comparison"}
      </Styles.ButtonWrapper>
    </Styles.ComparisonButton>
  );
};

export default ComparisonButton;
