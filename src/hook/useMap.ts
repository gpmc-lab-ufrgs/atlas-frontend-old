import { useSidebar } from '@context/sidebarContext';
import { useHighlightedDistrict } from '@context/district/highlightedContext';
import { useSelectedDistrict } from '@context/district/selectedContext';
import { useHighlightedState } from '@context/state/highlightedContext';
import { useSelectedState } from '@context/state/selectedContext';

const useMap = () => {
  const { setIsSidebarOpen } = useSidebar();

  const { setHighlighted: setHighlightedDistrict } = useHighlightedDistrict();
  const { setHighlighted: setHighlightedState } = useHighlightedState();
  const { setSelected: setSelectedDistrict } = useSelectedDistrict();
  const { setSelected: setSelectedState } = useSelectedState();

  const resetDistrictValues = () => {
    setIsSidebarOpen(false);
    setHighlightedDistrict(null);
    setSelectedDistrict(null);
  };

  const resetMapValues = () => {
    resetDistrictValues();
    setHighlightedState(null);
    setSelectedState(null);
  };

  return { resetMapValues, resetDistrictValues };
};

export default useMap;
