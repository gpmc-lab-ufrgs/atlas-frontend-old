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

  const resetMapValues = () => {
    setIsSidebarOpen(false);
    setHighlightedDistrict(null);
    setHighlightedState(null);
    setSelectedDistrict(null);
    setSelectedState(null);
  };

  return { resetMapValues };
};

export default useMap;
