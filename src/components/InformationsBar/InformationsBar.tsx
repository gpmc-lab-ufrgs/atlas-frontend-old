import React from 'react';

import { useTheme } from '@mui/material/styles';

import { useSidebar } from '@store/sidebarContext';

import { SummaryCard } from './SummaryCard';
import { CloroplethLegend } from './CloroplethLegend';
import * as Styles from './styles';

interface InformationBarProps {
  legendTick: number[];
}

export default function InformationBar({ legendTick }: InformationBarProps) {
  const { isSidebarOpen } = useSidebar();
  const theme = useTheme();

  return (
    <Styles.SideInformationsContainer theme={theme} isSidebarOpen={isSidebarOpen}>
      <SummaryCard />
      <CloroplethLegend legendTick={legendTick} />
    </Styles.SideInformationsContainer>
  );
}
