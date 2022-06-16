import styled from 'styled-components';

import { Menu as MenuIcon } from '@mui/icons-material';

interface HeaderProps {
  comparisonMode?: boolean;
  isSidebarOpen: boolean;
}

interface IReturnRoute {
  selectedLayer: string;
}

export const HeaderContainer = styled.header<HeaderProps>`
  width: ${({ isSidebarOpen }) => (isSidebarOpen ? 'calc(100% - 385px)' : 'calc(100% - 40px)')};

  position: fixed;
  z-index: 4;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  pointer-events: none;

  padding: 15px 20px;

  background: ${({ comparisonMode }) => (comparisonMode ? '#ffffffe6' : null)};
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
`;

export const ReturnRoute = styled.div<IReturnRoute>`
  font-size: 20px;
  white-space: nowrap;
  margin-left: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  pointer-events: auto;

  .country {
    font-weight: ${({ selectedLayer }) => (selectedLayer === 'country' ? 'bold' : 'normal')};
  }

  .state {
    font-weight: ${({ selectedLayer }) => (selectedLayer === 'state' ? 'bold' : 'normal')};
  }

  .district {
    font-weight: ${({ selectedLayer }) => (selectedLayer === 'district' ? 'bold' : 'normal')};
  }
`;

export const ReturnRouteButton = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: white;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
