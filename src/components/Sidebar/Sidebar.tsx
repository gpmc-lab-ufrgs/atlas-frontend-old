import React from 'react';
import Drawer from '@components/Drawer';
import { Box, Button } from '@mui/material';
import { AutoStories } from '@mui/icons-material';
import { useSidebar } from '@context/sidebarContext';

import { useComparison } from '@context/comparisonContext';
import { useComparison as useComparisonState } from '@context/comparisonContextState';

import { useSelectedDistrict } from '@context/district/selectedContext';
import { useSelectedState } from '@context/state/selectedContext';

import Minimizer from './Minimizer';
import RegionDetails from './RegionDetails';
import ComparisonButton from './ComparisonButton';
import ComparisonDetails from './ComparisonDetails';
import * as Styles from './styles';
import { selectedStates } from '../Map/hook/useStateLayer/stateActions';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  isComparisonMode: boolean;
  title?: string;
}

const Sidebar: React.FC<Props> = ({ isComparisonMode, title }) => {

  const isState = window.location.href.includes('/state');
  const isDistrict = window.location.href.includes('/district');
  let comparison, selected;

  if (isState) {
    const { comparison: mainComparison } = useComparisonState();
    const { selected: selectedMain } = useSelectedState();

    comparison = mainComparison;
    selected = selectedMain;
  } else {
    const { comparison: mainComparison } = useComparison();
    const { selected: selectedMain } = useSelectedDistrict();

    comparison = mainComparison;
    selected = selectedMain;
  }

  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  const location = useLocation();
  const { pathname } = location;
  const isEnglish = pathname.includes('/en');

  const hasSelectedDistrict = Boolean(selected);
  const hasComparisonRegions = comparison.length !== 0;

  const SidebarContent = () => {
    const handleClearSelection = () => {
      selectedStates.length = 0;
      setIsSidebarOpen(false);
    };

    const handleDeleteState = (stateId) => {
    const updatedSelectedStates = selectedStates.filter((state) => state.id !== stateId);
    selectedStates.length = 0; // Clear the array
    selectedStates.push(...updatedSelectedStates);

    setIsSidebarOpen(false);
  };


  const handleAddToComparison = () => {
  if (selectedStates.length > 0) {
    const comparisonRegionIds = selectedStates.map((state) => state.id);
    const comparisonUrl = 'http://3.92.188.34:3000/comparison_states/' + comparisonRegionIds.join('+');

    console.log('Selected states:', selectedStates);
    console.log('Comparison URL:', comparisonUrl);

    window.location.href = comparisonUrl; // Redirect the user to the external comparison page
  } else {
    alert('Selecione pelo menos um estados para comparar');
  }
};

    if (isComparisonMode) {
      return <ComparisonDetails />;
    } else if (hasComparisonRegions || hasSelectedDistrict) {
      return (
        <>
          <Styles.Title>{hasSelectedDistrict ? title : (isEnglish ? 'Atlas of Opportunities' : 'Atlas de Oportunidades')}</Styles.Title>
          <ComparisonButton />
          <RegionDetails />
        </>
      );
    }

    return (
      <><br /><br /><br />
        {/*<Styles.Title>{isEnglish ? 'Atlas of Opportunities' : 'Atlas de Oportunidades'}</Styles.Title>*/}
          {selectedStates.length === 0 ? (
            <h4 style={{ color: 'white' }}>
              {isEnglish ? 'Select a region on the map to view its details' : 'Selecione uma região no mapa para ver seus detalhes'}
            </h4>
          ) : (
            <>
            {/*<div style={{ display: 'flex', marginTop: '20px', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Button variant="contained" onClick={handleClearSelection} style={{ backgroundColor: "#fff", color: "#000" }}>
                  {isEnglish ? 'Clear selection of states' : 'Limpar seleção de estados'}
                </Button>
              </div><br /><br />
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ul>
                  {selectedStates.map((state, index) => (
                    <li style={{ color: 'white' }} key={index}>
                      <b>{state.name}</b>
                      <button onClick={() => handleDeleteState(state.id)}>X</button>
                    </li>

                  ))}
                </ul>
              </div><br /><br />
              <div style={{ display: 'flex', marginLeft: '20px', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                {/*<Button to={isEnglish ? '/comparison_states_en/' + comparisonRegionIds.join('+') : '/comparison_states/'} onClick={handleAddToComparison} style={{ backgroundColor: "#0A74A6", color: "#fff" }}>
                  {isEnglish ? 'Show comparison' : 'Mostrar comparação'}
                </Button>

                </div>*/}
              <br /><br /><br />
              <br />
            </>
          )}
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
