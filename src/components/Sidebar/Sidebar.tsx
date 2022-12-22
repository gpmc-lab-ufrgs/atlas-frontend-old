import React from 'react';

import Drawer from '@components/Drawer';

import { AutoStories } from '@mui/icons-material';
import { Box } from '@mui/material';

import { useComparison } from '@context/comparisonContext';
import { useSelectedDistrict } from '@context/district/selectedContext';
import { useSidebar } from '@context/sidebarContext';

import ComparisonButton from './ComparisonButton';
import ComparisonDetails from './ComparisonDetails';
import Minimizer from './Minimizer';
import RegionDetails from './RegionDetails';
import StateDetails from './StateDetails';

import { useSelectedState } from '@context/state/selectedContext';
import * as Styles from './styles';

interface Props {
  isComparisonMode: boolean;
  title?: string;
}

const Sidebar: React.FC<Props> = ({ isComparisonMode, title }) => {
  const { comparison } = useComparison();
  const { selected: selectedState } = useSelectedState();
  const { selected: selectedDistrict } = useSelectedDistrict();
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  const hasSelectedState = Boolean(selectedState);
  const hasSelectedDistrict = Boolean(selectedDistrict);
  const hasComparisonRegions = comparison.length !== 0;

  const SidebarContent = () => {
    if (isComparisonMode) {
      return <ComparisonDetails />;
    } else if ((hasComparisonRegions || hasSelectedState) && !hasSelectedDistrict) {
      return (
        <>
          <Styles.Title>{hasSelectedState ? selectedState?.properties.NM_UF : 'Atlas de Oportunidades'}</Styles.Title>
          <StateDetails />
        </>
      );
    } else if (hasComparisonRegions || hasSelectedDistrict) {
      return (
        <>
          <Styles.Title>{hasSelectedDistrict ? title : 'Atlas de Oportunidades'}</Styles.Title>
          <ComparisonButton />
          <RegionDetails />
        </>
      );
    }

    return (
      <>
        <Styles.Title>Atlas de Oportunidades</Styles.Title>
        <Styles.EmptyContent>
          <h4>Selecione uma região no mapa para ver seus detalhes</h4>
          <Box paddingLeft={2}>
            <AutoStories />
          </Box>
        </Styles.EmptyContent>
      </>
    );
  };

  return (
    <Box>
      <Minimizer />
      <Drawer open={isSidebarOpen} setOpen={setIsSidebarOpen} anchor="left" hideBackdrop>
        <Styles.SidebarContent>
          <SidebarContent />
        </Styles.SidebarContent>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
