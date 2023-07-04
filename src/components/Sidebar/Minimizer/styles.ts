import styled from 'styled-components';

interface Minimizer {
  isSidebarOpen: boolean;
  theme: unknown;
}

export const MinimizerWrapper = styled.div<Minimizer>`
  pointer-events: auto;
  cursor: pointer;


  top: 80px;
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? '345' : '0')}px;
  padding-left: 18px;

  transition: ${({ theme }) =>
    theme.transitions.create(['left'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    })};

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;

  position: fixed;
  width: 20px;
  height: 40px;

  background: #00406F;
  color: white;

  border-radius: 0px 5px 5px 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25), 0 -1px 0 rgba(0, 0, 0, 0.1);
`;
