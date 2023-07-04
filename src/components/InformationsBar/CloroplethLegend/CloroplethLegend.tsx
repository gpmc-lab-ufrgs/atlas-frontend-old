import React from 'react';
import { Box } from '@mui/material';

import * as Styles from './styles';

export default function CloroplethLegend() {
  return (
    <Styles.Container>
  <Box px="20px" py="15px" backgroundColor="#00406F" color="white">

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
