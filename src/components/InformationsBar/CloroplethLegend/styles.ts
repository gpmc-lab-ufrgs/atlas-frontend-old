import { Card } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Card)`
  bottom: 100px;
  position: fixed;
  z-index: 2;

  font-size: 14px;
  width: 305px;

  display: flex;
  flex-direction: column;
  border-radius: 5px !important;
`;

export const Title = styled.h3`
  margin: 0px;
  padding-right: 25px;
  padding-right: 25px;
`;
