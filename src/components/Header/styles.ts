import styled from 'styled-components';

import { Menu as MenuIcon } from '@mui/icons-material';

interface HeaderProps {
  comparisonMode?: boolean;
  isSidebarOpen: boolean;
}

export const HeaderContainer = styled.header<HeaderProps>`
  width: ${({ isSidebarOpen }) => (isSidebarOpen ? 'calc(100% - 385px)' : 'calc(100% - 40px)')};

  position: fixed;
  z-index: 4;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  pointer-events: auto;

  padding: 15px 20px;

  background: ${({ comparisonMode }) => (comparisonMode ? '#ffffffe6' : null)};
  backdrop-filter: blur(2px);
`;

interface MenuButtonProps {
  comparisonMode?: boolean;
}

export const MenuButton = styled(MenuIcon)<MenuButtonProps>`
  cursor: pointer;

  pointer-events: auto;

  color: ${({ comparisonMode }) => (comparisonMode ? 'black' : 'white')};
`;

export const MapControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  span {
    pointer-events: auto;
  }
`;

export const HeaderLeftSide = styled.div`
  grid-column: 1;
  justify-self: start;
  align-self: center;
  display: flex;
`;

export const HeaderCenterSide = styled.div`
  grid-column: 2;
  justify-self: center;
  align-self: center;
`;

export const HeaderRightSide = styled.div`
  grid-column: 3;
  justify-self: end;
  align-self: center;
  display: flex; /* Adicionado para usar flexbox */
  align-items: center; /* Alinha verticalmente os elementos ao centro */

  button {
    margin-right: 10px; /* Espaçamento entre os botões */
    background-color: #0A74A6;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #00406F;
  }
`;

export const HeaderRightSideLanguage = styled.div`
  /* Removido o grid-column para não afetar a posição */
  justify-self: flex-end;
  align-self: right;

  /* Custom CSS for HeaderRightSide component */
  button {
    margin-right: 10px; /* Espaçamento entre os botões */
    backgroundColor: rgba(0, 64, 111, 0.5);
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
  }

  button:hover {
    backgroundColor: rgba(0, 64, 111, 0.5);
  }
`;
