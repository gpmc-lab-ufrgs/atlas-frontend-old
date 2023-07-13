import React from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

import * as Styles from './styles';

export default function CloroplethLegend() {
  const location = useLocation();
  const { pathname } = location;

  const isEnglish = pathname.includes('/en');

  return (
    <Styles.Container style={{ backgroundColor: 'rgba(0, 64, 111, 0.5)' }}>
      <Box px="20px" py="15px" color="white">
        <Box>
          <Styles.Title>{isEnglish ? 'Population' : 'População'}</Styles.Title>
        </Box>

        <Styles.GradientBar />

        <Box display="flex" justifyContent="space-between">
          <Styles.Legend>{isEnglish ? 'Low' : 'Baixa'}</Styles.Legend>
          <Styles.Legend>{isEnglish ? 'High' : 'Alta'}</Styles.Legend>
        </Box>
      </Box>
    </Styles.Container>
  );
}
