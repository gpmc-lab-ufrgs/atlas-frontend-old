import { useSidebar } from "../../../../store";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./styles.css";

export const MinimizerSidebarButton = () => {
  const { sidebarIsOpen, setSidebarIsOpen } = useSidebar();

  const toggleSidebar = () => setSidebarIsOpen(!sidebarIsOpen);

  return (
    <div
      className={
        !sidebarIsOpen ? "toggleButton toggleButtonClose" : "toggleButton"
      }
      onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
    >
      {!sidebarIsOpen ? <FaChevronLeft /> : <FaChevronRight />}
    </div>
  );
};
