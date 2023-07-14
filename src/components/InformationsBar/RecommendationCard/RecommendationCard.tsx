import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Button } from '@mui/material';

import * as Styles from './styles';
import './recommendationcard.css';

export default function RecommendationCard() {
  const [hasRecommendationCard, setHasRecommendationCard] = useState(!localStorage.getItem('hasLocalStorage'));
  const navigate = useNavigate();

  const location = useLocation();
  const { pathname } = location;

  const isEnglish = pathname.includes('/en');

  const handleCloseCard = () => {
    localStorage.setItem('hasLocalStorage', 'false');
    setHasRecommendationCard(false);
  };

  const handleRedirect = () => {
    navigate(isEnglish ? 'recommendation/' : 'recommendation');
  };

  if (!hasRecommendationCard) {
    return null;
  }

  const summary = isEnglish ? 'Do not know where to start? Try the recommendation system' : 'Não sabe por onde começar? Experimente o sistema de recomendação.';
  const buttonText = isEnglish ? 'Recommendation System' : 'Sistema de recomendação';

  return (
    <Styles.Container style={{ backgroundColor: 'rgba(0, 64, 111, 0.5)' }}>
      <Box px="20px" py="20px" color="white">
        <Box display="flex" justifyContent="space-between">
          {/*<CloseIcon onClick={handleCloseCard} cursor="pointer" />*/}
        </Box>

        <Styles.Text style={{ color: 'white' }}>
          <b>{summary}</b>
        </Styles.Text>

        <Button
          className="custom-button"
          variant="outlined"
          style={{ backgroundColor: '#0A74A6', color: '#ffffff' }}
          onClick={handleRedirect}
          aria-label="more-button"
        >
          <b style={{ color: 'white' }}>{buttonText}</b>
        </Button>
      </Box>
    </Styles.Container>
  );
}
