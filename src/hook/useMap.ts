import { useSidebar } from "@store/index";
import { useFeatures, useStates } from "@store/index";

const useMap = () => {
  const { setSelectedState } = useStates();
  const { setIsSidebarOpen } = useSidebar();
  const { setHighlightedFeature, setSelectedFeature } = useFeatures();

  const resetMapValues = () => {
    setIsSidebarOpen(false);
    setHighlightedFeature(null);
    setSelectedFeature(null);
    setSelectedState(null);
  };

  return { resetMapValues };
};

export default useMap;
