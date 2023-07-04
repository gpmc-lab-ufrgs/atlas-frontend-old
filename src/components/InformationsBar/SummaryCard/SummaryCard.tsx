import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Button } from '@mui/material';

import * as Styles from './styles';

export default function SummaryCard() {
  const [hasSummaryCard, setHasSummaryCard] = useState(!localStorage.getItem('hasLocalStorage'));
  const navigate = useNavigate();

  const handleCloseCard = () => {
    localStorage.setItem('hasLocalStorage', 'false');

    setHasSummaryCard(false);
  };

  const handleRedirect = () => {
    navigate('aboutTheAtlas');
  };

  if (!hasSummaryCard) {
    return <></>;
  }

  const summary =
    'O Atlas de Oportunidades é um site gratuito de apoio à decisão que visa ajudar empreendedores e empresas a identificar oportunidades de negócios. O projeto combina várias fontes de dados, processadas com ciência de dados espaciais e algoritmos de Inteligência Artificial.';

  return (
    <Styles.Container>
      <Box p="20px">
        <Box display="flex" justifyContent="space-between" pb="10px" >
          <Styles.Title>Atlas de Oportunidades</Styles.Title>
          <CloseIcon onClick={handleCloseCard} cursor="pointer" />
        </Box>

        <Styles.Text >{summary}</Styles.Text>

        <Button variant="outlined" color="primary" onClick={handleRedirect} aria-label="more-button">
          Saiba mais...
        </Button>
      </Box>
    </Styles.Container>
  );
}
