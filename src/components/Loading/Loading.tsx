import React from 'react';
import { Box, CircularProgress } from '@mui/material';

import * as Styles from './styles';

export default function Loading() {
  return (
    <Styles.Container aria-label="loading-circle">
      <Box sx={{ position: 'relative' }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: '#909090',
          }}
          size={'4rem'}
          thickness={4}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color: '#379D4E',
            animationDuration: '700ms',
            position: 'absolute',
            left: 0,
          }}
          size={'4rem'}
          thickness={4}
        />
      </Box>
    </Styles.Container>
  );
}
