import { useHistory } from "react-router";

import { Box } from "@mui/material";

import Collapsible from "@components/Collapsible";

import { useComparison } from "@store/comparisonContext";
import useMap from "@hook/useMap";

import * as Styles from "./styles";

import "./styles.css";

const ComparisonDetails = () => {
  const { comparison, removeComparisonDistrict } = useComparison();
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
        <Collapsible title="Locations to Compare">
          <>
            {comparison.map((feature: any, id) => (
              <Styles.ComparisonList key={id}>
                {feature.properties.NM_MUN}
                <Styles.CloseButton
                  onClick={() => removeComparisonDistrict(feature)}
                />
              </Styles.ComparisonList>
            ))}
          </>
        </Collapsible>
      )}
    </Box>
  );
};

export default ComparisonDetails;
