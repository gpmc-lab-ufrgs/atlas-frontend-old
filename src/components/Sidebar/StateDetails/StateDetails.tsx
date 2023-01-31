import { Box } from '@mui/material';

import districtProps from '@config/district';

import { useComparison } from '@context/comparisonContext';

import ComparisonSection from './ComparisonSection';
import DataSection from './DataSection';

const StateDetails = () => {
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

export default StateDetails;
