import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { useTheme } from "@mui/material/styles";

import { useSidebar } from "@store/index";

import * as Styles from "./styles";

const Minimizer = () => {
  const theme = useTheme();
  const { sidebarIsOpen, setSidebarIsOpen } = useSidebar();

  const toggleSidebar = () => setSidebarIsOpen(!sidebarIsOpen);

  return (
    <Styles.MinimizerWrapper
      theme={theme}
      onClick={toggleSidebar}
      isSidebarOpen={sidebarIsOpen}
    >
      {!sidebarIsOpen ? <FaChevronLeft /> : <FaChevronRight />}
    </Styles.MinimizerWrapper>
  );
};

export default Minimizer;
