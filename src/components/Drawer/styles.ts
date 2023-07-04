import styled from 'styled-components';

import { Box, Drawer as DrawerSkeleton } from '@mui/material';

export const Drawer = styled(DrawerSkeleton)`
  width: 0;

  .css-4t3x6l-MuiPaper-root-MuiDrawer-paper {
    overflow-y: auto;
    background-color: rgba(0, 64, 111, 0.9);
  }
`;


export const DrawerContent = styled(Box)`
  min-width: 280px;
  margin: 20px;
`;
