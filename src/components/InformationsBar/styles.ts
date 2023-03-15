import styled from 'styled-components';

interface Minimizer {
  isSidebarOpen: boolean;
  theme: unknown;
}

export const SideInformationsContainer = styled.div<Minimizer>`
  z-index: 2;
  position: absolute;
  font-family: 'Roboto', sans-serif;

  left: ${({ isSidebarOpen }) => (isSidebarOpen ? '365' : '20')}px;

  transition: ${({ theme }) =>
    theme.transitions.create(['left'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    })};
`;
