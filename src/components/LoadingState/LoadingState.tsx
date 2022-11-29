import React from 'react';
import { CircularProgress } from '@mui/material';

import * as Styles from './styles';

export default function LoadingState() {
  return (
    <Styles.Container>
        <Styles.LoadingModal>
            <CircularProgress 
                size={'5rem'} 
                thickness={4}
            />
        </Styles.LoadingModal>
    </Styles.Container>
  );
}