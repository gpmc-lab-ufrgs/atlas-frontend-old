import { useHistory } from "react-router";

import { Box } from "@mui/material";

import CollapsibleSection from "@components/CollapsibleSection";

import { useComparison } from "@store/index";
import useMap from "@hook/useMap";

import * as Styles from "./styles";

import "./styles.css";

const ComparisonDetails = () => {
  const { comparison, removeComparisonFeature } = useComparison();
  const { resetMapValues } = useMap();
  const history = useHistory();

  const handleGoBack = () => {
    history.replace("/");
    resetMapValues();
  };

  const Title = () => (
    <Styles.TitleWrapper>
      <Styles.ArrowBackButton onClick={handleGoBack} />
      <Styles.Title>Comparing Locations</Styles.Title>
    </Styles.TitleWrapper>
  );

  return (
    <Box>
      <Title />
      {comparison.length > 0 && (
        <>
          <CollapsibleSection title="Locations to Compare">
            <>
              {comparison.map((feature: any) => (
                <Styles.ComparisonList>
                  {feature.properties.NM_MUN}
                  <Styles.CloseButton
                    onClick={() => removeComparisonFeature(feature)}
                  />
                </Styles.ComparisonList>
              ))}
            </>
          </CollapsibleSection>
        </>
      )}
    </Box>
  );
};

export default ComparisonDetails;
