import React from 'react';
import { Box } from '@mui/material';

import * as Styles from './styles';

export default function CloroplethLegend() {
  return (
    <Styles.Container style={{ backgroundColor: 'rgba(0, 64, 111, 0.9)' }}>
      <Box px="20px" py="15px"  color="white">

        <Box>
          <Styles.Title>População</Styles.Title>
        </Box>

        <Styles.GradientBar />

        <Box display="flex" justifyContent="space-between">
          <Styles.Legend>Baixa</Styles.Legend>
          <Styles.Legend>Alta</Styles.Legend>
        </Box>
      </Box>
    </Styles.Container>
  );
}
