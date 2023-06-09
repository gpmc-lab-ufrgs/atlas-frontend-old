import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Button } from '@mui/material';

import * as Styles from './styles';
import './recommendationcard.css';

export default function RecommendationCard() {
  const [hasRecommendationCard, setHasRecommendationCard] = useState(!localStorage.getItem('hasLocalStorage'));
  const navigate = useNavigate();

  const handleCloseCard = () => {
    localStorage.setItem('hasLocalStorage', 'false');

    setHasRecommendationCard(false);
  };

  const handleRedirect = () => {
    navigate('recommendation');
  };

  if (!hasRecommendationCard) {
    return <></>;
  }

  const summary =
    'Não sabe por onde começar? Experimente o sistema de recomendação.';

  return (
    <Styles.Container>
      <Box p="20px">
        <Box display="flex" justifyContent="space-between" pb="10px">
          <Styles.Title></Styles.Title>
          <CloseIcon onClick={handleCloseCard} cursor="pointer" />
        </Box>

        <Styles.Text>{summary}</Styles.Text>

        <Button class="custom-button" variant="outlined" color="primary" onClick={handleRedirect} aria-label="more-button">
          <b>Sistema de recomendação</b>
        </Button>
      </Box>
    </Styles.Container>
  );
}
