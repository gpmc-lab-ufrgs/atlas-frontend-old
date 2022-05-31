import { Card } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Card)`
  top: 150px;
  position: fixed;

  font-size: 14px;
  width: 305px;

  display: flex;
  flex-direction: column;
  border-radius: 5px !important;
`;

export const Title = styled.h2`
  margin: 0px;
`;

export const Text = styled.p`
  line-height: 150%;
  color: #1f3349;
`;

export const ExplanationCardReadMore = styled.a`
  align-self: flex-start;
  color: rgb(0, 153, 229);
`;
