import React from 'react';

import { Box } from '@mui/material';

import districtProps from '@config/district';

import { useComparison } from '@context/comparisonContext';

import ComparisonSection from './ComparisonSection';
import DataSection from './DataSection';

const RegionDetails = () => {
  const { comparison } = useComparison();

  return (
    <Box>
      {comparison.length > 0 && <ComparisonSection />}
      {districtProps.map((section) => (
        <DataSection key={`${section.title}-${section.content}`} title={section.title} content={section.content} />
      ))}
    </Box>
  );
};

export default RegionDetails;
