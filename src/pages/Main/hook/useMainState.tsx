import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { useSidebar } from '@context/sidebarContext';
import { useComparison } from '@context/comparisonContextState';
import { useSelectedState } from '@context/state/selectedContext';

const useMain = () => {
  const { comparison, addComparisonState } = useComparison();
  const { setIsSidebarOpen } = useSidebar();
  const { all } = useSelectedState();

  const location = useLocation();
  const navigate = useNavigate();

  const [isComparisonModeEnabled, setIsComparisonModeEnabled] = useState<boolean>(false);

  console.log('Comparison value at the beginning:', comparison);

useEffect(() => {
  if (
    comparison.length === 0 &&
    (location.pathname.startsWith('/comparison_states/') || location.pathname.startsWith('/comparison_states_en/'))
  ) {
    const pathIds = location.pathname.replace('/comparison_states/', '').replace('/comparison_states_en/', '');
    console.log('Path IDs:', pathIds); // Temporary log
    if (pathIds) {
      const ids = pathIds.split('+');
      console.log('All IDs:', ids); // Temporary log
      const featuresFromUrl = all.filter((ft: any) => ids.includes(ft.properties['CD_UF'].toString()));
      console.log('Features from URL:', featuresFromUrl); // Temporary log
      setIsSidebarOpen(true);
      addComparisonState(featuresFromUrl);
    } else {
      navigate('');
    }
  }
}, [location, comparison]);



  useEffect(() => {
    if (location.pathname.startsWith('/comparison_states/') && all.length !== 0) {
      const ids = comparison.map((feature: any) => feature.properties.CD_UF);
      const newPath = '/comparison_states/' + ids.join('+');
      if (location.pathname !== newPath) {
        navigate(newPath);
      }
    }
  }, [comparison, location]);

  useEffect(() => {
    if (location.pathname.startsWith('/comparison_states/') && all.length !== 0) {
      const ids = comparison.map((feature: any) => feature.properties.CD_UF);
      const newPath = '/comparison_states/' + ids.join('+');
      if (location.pathname !== newPath) {
        navigate(newPath);
      }
    }
  }, [comparison, location]);

  useEffect(() => {
    setIsComparisonModeEnabled(
      location.pathname.startsWith('/comparison') || location.pathname.startsWith('/comparison_en')
    );
  }, [location]);

  console.log('Comparison value at the end:', comparison);

  return {
    isComparisonModeEnabled,
  };
};

export default useMain;
