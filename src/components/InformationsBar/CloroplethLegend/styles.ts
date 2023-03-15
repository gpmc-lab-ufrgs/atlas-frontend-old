import { Card } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Card)`
  bottom: 100px;
  position: fixed;

  font-size: 14px;
  width: 305px;

  display: flex;
  flex-direction: column;
  border-radius: 5px !important;
`;

export const Title = styled.h3`
  margin: 0px;
`;

export const Legend = styled.p`
  margin: 0px;
  margin-top: 10px;

  font-size: 11px;
  font-weight: 500;
`;

export const GradientBar = styled.div`
  width: 100%;
  height: 25px;

  margin-top: 20px;

  background-image: linear-gradient(to right, #addc91 0%, #6cc24a 33%, #509e2f 66%, #4a7729 100%);
  border-radius: 5px;
`;
