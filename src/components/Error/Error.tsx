import React from 'react';

import { Alert } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

import * as Styles from './styles';

const Error: React.FC = () => {
  return (
    <Styles.Container>
      <Alert severity="error" variant="filled" icon={<RefreshIcon />}>
        An unexpected error has occurred. Please try again!
      </Alert>
    </Styles.Container>
  );
};

export default Error;
