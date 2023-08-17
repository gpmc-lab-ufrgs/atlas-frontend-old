import React from 'react';

import { useState } from 'react';

import { useTheme } from '@mui/material/styles';

import { useSidebar } from '@context/sidebarContext';
import { useSelectedDistrict } from '@context/district/selectedContext';
import { useSelectedState } from '@context/state/selectedContext';

import Map from '@components/Map';
import Modal from '@components/Modal';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Sidebar from '@components/Sidebar';
import InformationsBar from '@components/InformationsBar';
import CompatisonMode from '@components/ComparisonMode';

import { useMain } from './hook';
import { useMainState } from './hook';

import * as Styles from './styles';

const Main = () => {
  const { isSidebarOpen } = useSidebar();
  const { selected } = useSelectedDistrict();
  const { selected: selectedState } = useSelectedState();

  const theme = useTheme();

  const [comparisonType, setComparisonType] = useState('table');

 const isState = window.location.href.includes('/comparison_states');
  let isComparisonModeEnabledRegion;
  let selectedRegion;

  if (isState) {
    const { isComparisonModeEnabled: mainStateComparisonEnabled } = useMainState();
    const { selected: selectedMain } = useSelectedState();

    isComparisonModeEnabledRegion = mainStateComparisonEnabled;
    selectedRegion = selectedMain;

  } else {
    const { isComparisonModeEnabled: mainStateComparisonEnabled } = useMain();
    const { selected: selectedMain } = useSelectedDistrict();

    isComparisonModeEnabledRegion = mainStateComparisonEnabled;
    selectedRegion = selectedMain;
  }

  return (
    <Styles.MainContainer>
      <Modal />

      <Sidebar isComparisonMode={isComparisonModeEnabledRegion} title={selectedRegion?.properties.NM_UF} />

      <InformationsBar />

      <Styles.ComparisonWrapper isSidebarOpen={isSidebarOpen} theme={theme}>
        <Header
          isComparisonModeOn={isComparisonModeEnabledRegion}
          comparisonType={comparisonType}
          setComparisonType={setComparisonType}
        />

        {isComparisonModeEnabledRegion && <CompatisonMode comparisonType={comparisonType} />}
      </Styles.ComparisonWrapper>

      <Map />

      <Footer />
    </Styles.MainContainer>
  );
};

export default Main;
