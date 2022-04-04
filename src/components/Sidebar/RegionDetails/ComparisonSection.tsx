import Collapsible from "@components/Collapsible";

import { useComparison } from "@store/comparisonContext";

import * as Styles from "./styles";

const ComparisonSection = () => {
  const { comparison, removeComparisonDistrict } = useComparison();

  const comparisonRegionIds = comparison.map(
    (feature: any) => feature.properties.CD_MUN
  );

  const ComparisonResult = () => (
    <Styles.ComparisonButton
      to={"/comparison/" + comparisonRegionIds.join("+")}
    >
      <p>Show Comparison</p>
      <Styles.ChevronIcon />
    </Styles.ComparisonButton>
  );

  return (
    <Collapsible title="Locations to Compare">
      {comparison.map((feature: any) => (
        <Styles.ComparisonList key={feature.properties.CD_MUN}>
          {feature.properties["NM_MUN"]}
          <Styles.CloseIcon onClick={() => removeComparisonDistrict(feature)} />
        </Styles.ComparisonList>
      ))}

      {comparison.length > 0 && ComparisonResult()}
      <Styles.DisclaimerText>Add up to 4 regions.</Styles.DisclaimerText>
    </Collapsible>
  );
};

export default ComparisonSection;
