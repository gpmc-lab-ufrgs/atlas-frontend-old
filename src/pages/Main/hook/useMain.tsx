import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { useComparison } from '@store/comparisonContext';
import { useSelectedDistrict } from '@store/district/selectedContext';
import { useSidebar } from '@store/sidebarContext';

const useMain = () => {
  const { comparison, addComparisonDistrict } = useComparison();
  const { setIsSidebarOpen } = useSidebar();
  const { all } = useSelectedDistrict();

  const location = useLocation();
  const navigate = useNavigate();

  const [isComparisonModeEnabled, setIsComparisonModeEnabled] = useState<boolean>(false);

  useEffect(() => {
    if (comparison.length === 0 && location.pathname.startsWith('/comparison/')) {
      const pathIds = location.pathname.replace('/comparison/', '');
      if (pathIds) {
        const ids = pathIds.split('+');
        const featuresFromUrl = all.filter((ft: any) => ids.includes(ft.properties['CD_MUN'].toString()));
        setIsSidebarOpen(true);
        addComparisonDistrict(featuresFromUrl);
      } else {
        navigate('/');
      }
    }
  }, [location, history, comparison]);

  useEffect(() => {
    if (location.pathname.startsWith('/comparison/') && all.length !== 0) {
      const ids = comparison.map((feature: any) => feature.properties.CD_MUN);
      const newPath = '/comparison/' + ids.join('+');
      if (location.pathname !== newPath) {
        navigate(newPath);
      }
    }
  }, [comparison, location, history]);

  useEffect(() => {
    setIsComparisonModeEnabled(location.pathname.startsWith('/comparison'));
  }, [location]);

  return {
    isComparisonModeEnabled,
  };
};

export default useMain;
