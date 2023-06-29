import React from 'react';

import { useState } from 'react';

import { useTheme } from '@mui/material/styles';

import { useSidebar } from '@context/sidebarContext';
import { useSelectedDistrict } from '@context/district/selectedContext';

import Map from '@components/Map';
import Modal from '@components/Modal';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Sidebar from '@components/Sidebar';
import InformationsBar from '@components/InformationsBar';
import ComparisonMode from '@components/ComparisonMode';

import { useMain } from './hook';

import * as Styles from './styles';

const Main = () => {
  const { isSidebarOpen } = useSidebar();
  const { selected } = useSelectedDistrict();

  const theme = useTheme();

  const [comparisonType, setComparisonType] = useState('table');
  const { isComparisonModeEnabled } = useMain();


  return (
    <Styles.MainContainer>
      <Modal />

      <Sidebar isComparisonMode={isComparisonModeEnabled} title={selected?.properties.NM_MUN} />

      <InformationsBar />

      <Styles.ComparisonWrapper isSidebarOpen={isSidebarOpen} theme={theme}>
        <Header
          isComparisonModeOn={isComparisonModeEnabled}
          comparisonType={comparisonType}
          setComparisonType={setComparisonType}
        />

        {isComparisonModeEnabled && <CompatisonMode comparisonType={comparisonType} />}
      </Styles.ComparisonWrapper>

      <Map />

      <Footer />
    </Styles.MainContainer>
  );
};

export default Main;
