import React from 'react';

import { useState } from 'react';

import { useTheme } from '@mui/material/styles';

import { useSidebar } from "@store/sidebarContext";
import { useSelectedDistrict } from "@store/district/selectedContext";

import Map from "@components/Map";
import Modal from "@components/Modal";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";
import SummaryCard from "@components/SummaryCard";
import CompatisonMode from "@components/ComparisonMode";



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

      <Sidebar
        isComparisonMode={isComparisonModeOn}
        title={selected?.properties.NM_MUN}
      />

      <SummaryCard/>

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
