import React from 'react';
import Drawer from '@components/Drawer';
import { Box, Button } from '@mui/material';
import { AutoStories } from '@mui/icons-material';
import { useSidebar } from '@context/sidebarContext';
import { useComparison } from '@context/comparisonContext';
import { useSelectedDistrict } from '@context/district/selectedContext';
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
  const { comparison, addToComparison } = useComparison();
  const { selected } = useSelectedDistrict();
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

    const handleAddToComparison = () => {
      if (selectedStates.length > 1) {
        const comparisonRegionIds = selectedStates.map((state) => state.id);
        const comparisonUrl = '/comparison/' + comparisonRegionIds.join('+');
        console.log('Selected states:', selectedStates);
        console.log('Comparison URL:', comparisonUrl);
        alert(`Comparing: ${selectedStates.map((state) => state.name).join(', ')}. URL: ${comparisonUrl}`);
        return (
          <Link to={comparisonUrl}></Link>
        );
      } else {
        alert('Selecione pelo menos dois estados para comparar');
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
      <>
        <Styles.Title>{isEnglish ? 'Atlas of Opportunities' : 'Atlas de Oportunidades'}</Styles.Title>
        <Styles.EmptyContent>
          {selectedStates.length === 0 ? (
            <h4 style={{ color: 'white' }}>{isEnglish ? 'Select a region on the map to view its details' : 'Selecione uma região no mapa para ver seus detalhes'}</h4>
          ) : (
            <>
              <button onClick={handleClearSelection}>{isEnglish ? 'Clear selection' : 'Limpar seleção'}</button>
              <Button variant="contained" onClick={handleAddToComparison}>{isEnglish ? 'Compare' : 'Comparar'}</Button>
              <br />
              <ul>
                {selectedStates.map((state, index) => (
                  <li key={index}>{state.name}</li>
                ))}
              </ul>
            </>
          )}
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
