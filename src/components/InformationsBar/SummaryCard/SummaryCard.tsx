import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Button } from '@mui/material';

import * as Styles from './styles';
import { VolunteerActivismOutlined } from '@mui/icons-material';

export default function SummaryCard() {
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
    'O Atlas de Oportunidade é um projeto que tem o objetivo de ajudar na identificação, mensuração e classificação de necessidades humanas não satisfeitas, estimação de potencial de mercado, previsão de demanda e identificação de oportunidades de negócio em larga escala.';

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
