import React from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { useTheme } from '@mui/material/styles';

import { useSidebar } from '@context/sidebarContext';

import * as Styles from './styles';

const Minimizer = () => {
  const theme = useTheme();
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Styles.MinimizerWrapper theme={theme} onClick={toggleSidebar} isSidebarOpen={isSidebarOpen}>
      {!isSidebarOpen ? <FaChevronRight /> : <FaChevronLeft />}
    </Styles.MinimizerWrapper>
  );
};

export default Minimizer;
