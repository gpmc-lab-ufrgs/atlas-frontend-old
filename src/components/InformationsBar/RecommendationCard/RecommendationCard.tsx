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
    <Styles.Container style={{ backgroundColor: 'rgba(0, 64, 111, 0.9)' }}>
      <Box px="20px" py="15px" color="white">
        <Box display="flex" justifyContent="space-between" pb="10px">
          <Styles.Title></Styles.Title>
          <CloseIcon onClick={handleCloseCard} cursor="pointer" />
        </Box>

        <Styles.Text style={{ color:'white' }} >{summary}</Styles.Text>

        <Button class="custom-button" variant="outlined" color="primary" onClick={handleRedirect} aria-label="more-button">
          <b color="white">Sistema de recomendação</b>
        </Button>
      </Box>
    </Styles.Container>
  );
}
