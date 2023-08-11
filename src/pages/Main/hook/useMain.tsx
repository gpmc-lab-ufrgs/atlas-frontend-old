import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { useSidebar } from '@context/sidebarContext';
import { useComparison } from '@context/comparisonContext';
import { useSelectedDistrict } from '@context/district/selectedContext';

const useMain = () => {
  const { comparison, addComparisonDistrict } = useComparison();
  const { setIsSidebarOpen } = useSidebar();
  const { all } = useSelectedDistrict();

  const location = useLocation();
  const navigate = useNavigate();

  const [isComparisonModeEnabled, setIsComparisonModeEnabled] = useState<boolean>(false);

  useEffect(() => {
  if (
    comparison.length === 0 &&
    (location.pathname.startsWith('/comparison/') || location.pathname.startsWith('/comparison_en/') || location.pathname.startsWith('/comparison_states/'))
  ) {
    const pathIds = location.pathname.replace('/comparison/', '').replace('/comparison_en/', '').replace('/comparison_states/', '');
    if (pathIds) {
      const ids = pathIds.split('+');
      let featuresFromUrl;

      if (location.pathname.startsWith('/comparison_states/')) {
        featuresFromUrl = all.filter((ft: any) => ids.includes(ft.properties['CD_MUN'].toString()));
      } else {
        featuresFromUrl = all.filter((ft: any) => ids.includes(ft.properties['CD_MUN'].toString()));
      }

      setIsSidebarOpen(true);
      addComparisonDistrict(featuresFromUrl);
    } else {
      navigate('');
    }
  }
}, [location, comparison]);


  useEffect(() => {
    if (location.pathname.startsWith('/comparison/') && all.length !== 0) {
      const ids = comparison.map((feature: any) => feature.properties.CD_MUN);
      const newPath = '/comparison/' + ids.join('+');
      if (location.pathname !== newPath) {
        navigate(newPath);
      }
    }
  }, [comparison, location]);

  useEffect(() => {
    if (location.pathname.startsWith('/comparison_states/') && all.length !== 0) {
      const ids = comparison.map((feature: any) => feature.properties.CD_MUN);
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

  return {
    isComparisonModeEnabled,
  };
};

export default useMain;
