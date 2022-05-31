import React from 'react';

import geojsonBR from '@data/BR_UF_2020.json';
import extremePopulationValues from '@data/ExtremePopValuesByState.json';

import { State } from '@customTypes/feature';

import { useState } from 'react';

import { useTheme } from '@mui/material/styles';

import { useSidebar } from '@store/sidebarContext';
import { useSelectedDistrict } from '@store/district/selectedContext';
import { useSelectedState } from '@store/state/selectedContext';

import Map from '@components/Map';
import Modal from '@components/Modal';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Sidebar from '@components/Sidebar';
import InformationsBar from '@components/InformationsBar';
import CompatisonMode from '@components/ComparisonMode';

import { useMain } from './hook';

import * as Styles from './styles';

const Main = () => {
  const { isSidebarOpen } = useSidebar();
  const { selected } = useSelectedDistrict();

  const allStates: Array<State> = geojsonBR.features;

  const theme = useTheme();

  const [comparisonType, setComparisonType] = useState('table');
  const { isComparisonModeEnabled } = useMain();

  const { selected: selectedState } = useSelectedState();

  const biggestState: State = allStates.reduce(function (prev: any, current: any) {
    return prev.properties?.POPULATION > current.properties?.POPULATION ? prev : current;
  });

  const smallestState: State = allStates.reduce(function (prev: any, current: any) {
    return prev.properties?.POPULATION < current.properties?.POPULATION ? prev : current;
  });

  const legendTick: number[] = !selectedState
    ? [smallestState.properties.POPULATION, biggestState.properties.POPULATION]
    : [
        extremePopulationValues[selectedState.properties.SIGLA_UF].MIN_POPULATION_DISTRICT.POPULATION,
        extremePopulationValues[selectedState.properties.SIGLA_UF].MAX_POPULATION_DISTRICT.POPULATION,
      ];

  return (
    <Styles.MainContainer>
      <Modal />

      <Sidebar isComparisonMode={isComparisonModeEnabled} title={selected?.properties.NM_MUN} />

      <InformationsBar legendTick={legendTick} />

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
