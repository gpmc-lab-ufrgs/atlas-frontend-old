import { useSidebar } from "@store/index";
import { useFeatures, useStates } from "@store/index";

const useMap = () => {
  const { setSelectedState } = useStates();
  const { setIsSidebarOpen } = useSidebar();
  const { setHighlightedDistrict, setSelectedDistrict } = useFeatures();

  const resetMapValues = () => {
    setIsSidebarOpen(false);
    setHighlightedDistrict(null);
    setSelectedDistrict(null);
    setSelectedState(null);
  };

  return { resetMapValues };
};

export default useMap;
