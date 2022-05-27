import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Button } from '@mui/material';

import * as Styles from './styles';

export default function CardContent() {
  const [hasSummaryCard, setHasSummaryCard] = useState(!localStorage.getItem('hasLocalStorage'));
  const history = useHistory();

  const handleCloseCard = () => {
    localStorage.setItem('hasLocalStorage', 'false');

    setHasSummaryCard(false);
  };

  const handleRedirect = () => {
    history.push('/aboutTheAtlas');
  };

  if (!hasSummaryCard) {
    return <></>;
  }

  const summary =
    "Recent research has revealed a connection between people's mobility and the economy — areas with diverse community movement patterns are more likely to experience higher economic growth. This version of the Atlas aims to make such insights accessible to small business owners and government planners.";

  return (
    <Styles.Container>
      <Box py="25px" px="25px">
        <Box display="flex" justifyContent="space-between" pb="10px">
          <Styles.Title>Atlas Of Opportunity</Styles.Title>
          <CloseIcon onClick={handleCloseCard} cursor="pointer" />
        </Box>

        <Styles.Text>{summary}</Styles.Text>

        <Button variant="outlined" color="primary" onClick={handleRedirect}>
          Saiba mais...
        </Button>
      </Box>
    </Styles.Container>
  );
}
