import styled from 'styled-components';

import { ArrowBack, Close } from '@mui/icons-material';

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ArrowBackButton = styled(ArrowBack)`
  cursor: pointer;
  margin-right: 10px;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const ComparisonList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 15px;
  font-size: 15px;
`;

export const CloseButton = styled(Close)`
  cursor: pointer;
  color: rgb(153, 153, 153);
`;
