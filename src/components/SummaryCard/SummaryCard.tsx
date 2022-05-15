import React from 'react';

import { useTheme } from '@mui/material/styles';

import { useSidebar } from '@store/sidebarContext';

import { CardContent } from './CardContent';
import * as Styles from './styles';

export default function SummaryCard() {
  const { isSidebarOpen } = useSidebar();
  const theme = useTheme();

  return (
    <Styles.SideInformationsContainer theme={theme} isSidebarOpen={isSidebarOpen}>
      <CardContent />
    </Styles.SideInformationsContainer>
  );
}
