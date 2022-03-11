import styled from "styled-components";

import { Box } from "@mui/material";

export const MainContainer = styled(Box)`
  width: 100%;
  height: calc(100% - 60px);
`;

interface Comparison {
  isSidebarOpen: boolean;
  theme: {};
}

export const ComparisonWrapper = styled.div<Comparison>`
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? "355" : "0")}px;
  position: absolute;
  transition: ${({ theme }) =>
    theme.transitions.create(["left"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    })};
`;
