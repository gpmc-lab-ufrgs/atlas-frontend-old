import styled from "styled-components";

import { Menu as MenuIcon } from "@mui/icons-material";

interface Props {
  comparisonMode?: boolean;
}

export const HeaderContainer = styled.div<Props>`
  position: fixed;
  z-index: 4;

  top: 0;
  left: 0;
  right: 0;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  pointer-events: none;

  margin: 20px;

  background: ${({ comparisonMode }) => (comparisonMode ? "#ffffffe6" : null)};
`;

export const MenuButton = styled(MenuIcon)<Props>`
  cursor: pointer;

  pointer-events: auto;

  color: ${({ comparisonMode }) => (comparisonMode ? "black" : "white")};
`;

export const HeaderLeftSide = styled.div`
  grid-column: 1;
  justify-self: start;
`;

export const HeaderCenterSide = styled.div`
  grid-column: 2;
  justify-self: center;
`;

export const HeaderRightSide = styled.div`
  grid-column: 3;
  justify-self: end;
`;
