import styled from "styled-components";

import { Box, Drawer as DrawerSkeleton } from "@mui/material";

export const Drawer = styled(DrawerSkeleton)`
  width: 0;
`;

export const DrawerContent = styled(Box)`
  min-width: 280px;
  margin: 20px 20px;
`;
