import { useSidebar } from "../../../../store"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "./styles.css";

export const SidebarButton = () => {
  const { sidebarIsOpen, setSidebarIsOpen } = useSidebar()

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };
    
  return (
    <div className={sidebarIsOpen ? "toggleButton toggleButtonClose" : "toggleButton"} onClick={toggleSidebar}>
      {sidebarIsOpen ? (<FaChevronLeft />) : (<FaChevronRight />)}
    </div>
  )
}
