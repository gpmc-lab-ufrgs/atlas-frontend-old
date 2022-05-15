import { useSidebar } from "@store/sidebarContext";
import { useHighlightedDistrict } from "@store/district/highlightedContext";
import { useSelectedDistrict } from "@store/district/selectedContext";
import { useHighlightedState } from "@store/state/highlightedContext";
import { useSelectedState } from "@store/state/selectedContext";

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
