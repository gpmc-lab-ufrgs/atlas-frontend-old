import styled from "styled-components";

import { Box } from "@mui/material";

export const MainContainer = styled(Box)`
  width: 100%;
  height: calc(100% - 60px);
`;

interface Comparison {
  isSidebarOpen: boolean;
}

export const ComparisonWrapper = styled.div<Comparison>`
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? "355" : "0")}px;
  position: absolute;
`;
