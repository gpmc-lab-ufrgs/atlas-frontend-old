import { useSidebar } from "@store/sidebarContext";
import { useFeatures } from "@store/featuresContext";

const useMap = () => {
  const { setIsSidebarOpen } = useSidebar();
  const { district, state } = useFeatures();

  const resetMapValues = () => {
    setIsSidebarOpen(false);
    district.resetValues();
    state.resetValues();
  };

  return { resetMapValues };
};

export default useMap;
