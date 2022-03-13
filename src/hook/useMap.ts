import { useSidebar } from "@store/index";
import { useFeatures } from "@store/index";

const useMap = () => {
  const { setIsSidebarOpen } = useSidebar();
  const {
    setHighlightedDistrict,
    setSelectedDistrict,
    setSelectedState,
    setHighlightedState,
  } = useFeatures();

  const resetMapValues = () => {
    setIsSidebarOpen(false);
    setHighlightedDistrict(null);
    setSelectedDistrict(null);
    setSelectedState(null);
    setHighlightedState(null);
  };

  return { resetMapValues };
};

export default useMap;
