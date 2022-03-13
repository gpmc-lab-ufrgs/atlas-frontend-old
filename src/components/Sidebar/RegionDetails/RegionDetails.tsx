import { Box } from "@mui/material";

import districtProps from "@config/districtProps";

import { useComparison } from "@store/index";

import ComparisonSection from "./ComparisonSection";
import DataSection from "./DataSection";

const RegionDetails = () => {
  const { comparison } = useComparison();

  return (
    <Box>
      {comparison.length > 0 && <ComparisonSection />}
      {districtProps.map((section, id) => (
        <DataSection key={id} title={section.title} content={section.content} />
      ))}
    </Box>
  );
};

export default RegionDetails;
