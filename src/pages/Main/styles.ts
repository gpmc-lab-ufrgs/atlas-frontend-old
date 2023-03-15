import styled from 'styled-components';

import { Box } from '@mui/material';

export const MainContainer = styled(Box)`
  width: 100%;
  height: calc(100% - 60px);
`;

interface Comparison {
  isSidebarOpen: boolean;
  theme: unknown;
}

export const ComparisonWrapper = styled.div<Comparison>`
  width: ${({ isSidebarOpen }) => (isSidebarOpen ? 'calc(100% - 345px)' : '100%')};
  height: 100%;

  left: ${({ isSidebarOpen }) => (isSidebarOpen ? '345' : '0')}px;
  position: absolute;
  transition: ${({ theme }) =>
    theme.transitions.create(['left'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    })};
`;
