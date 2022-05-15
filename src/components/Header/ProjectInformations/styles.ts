import styled from 'styled-components';

import { Box } from '@mui/system';
import { Close } from '@mui/icons-material';

export const ProjectInformationWrapper = styled(Box)`
  min-width: 230px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 20px;

  border-bottom: 1px solid #ccc;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const CloseButton = styled(Close)`
  cursor: pointer;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  a {
    background-color: white;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 15px 10px;
    color: black;
    font-size: 16px;
    line-height: 120%;
    cursor: pointer;
    text-decoration: none;

    :hover {
      background-color: #f5f5f5;
    }
  }
`;
