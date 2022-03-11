import { Box } from "@mui/material";

import countyProps from "@config/countyProps";

import { useComparison } from "@store/index";

import ComparisonSection from "./ComparisonSection";
import DataSection from "./DataSection";

const RegionDetails = () => {
  const { comparison } = useComparison();

  return (
    <Box>
      {comparison.length > 0 && <ComparisonSection />}
      {countyProps.map((section, id) => (
        <DataSection key={id} title={section.title} content={section.content} />
      ))}
    </Box>
  );
};

export default RegionDetails;
