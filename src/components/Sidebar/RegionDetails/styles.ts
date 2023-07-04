import styled from 'styled-components';

import { Box } from '@mui/material';
import { Close, ChevronRight } from '@mui/icons-material';

import { Link } from 'react-router-dom';

export const ComparisonButton = styled(Link)`
  display: flex;
  align-items: center;
  align-self: center;

  margin-top: 20px;
  padding: 5px 15px;

  background-color: rgba(0, 64, 111, 0.9);

  text-decoration: none;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #fff;

  box-sizing: border-box;
  border: 1px solid #000;
  border-radius: 100px;

  cursor: pointer;

  p {
    margin: 0;
  }
`;

export const ChevronIcon = styled(ChevronRight)`
  color: #fff;
  margin-left: 10px;
`;

export const CloseIcon = styled(Close)`
  cursor: pointer;
  color: rgb(153, 153, 153) #4a7929;
`;

export const PropsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;

  font-size: 14px;
`;

export const PropsTitle = styled.h2`
  font-size: 13px;

  margin-top: 12px;
  margin-bottom: 5px;
`;

export const ComparisonList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 15px;

  font-size: 15px;
`;

export const DisclaimerText = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;

  margin: 20px 0px 10px;
`;

export const ValueContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 5px;

  p {
    margin: 0;
  }
`;
