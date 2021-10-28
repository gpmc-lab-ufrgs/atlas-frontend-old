import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { ReactComponent as TableIcon} from "../../assets/table.svg";
import { ReactComponent as GridIcon} from "../../assets/grid.svg";
import { useComparison, useSidebar, useHamburgerMenu } from "../../store"
import { SegmentedControl } from "./components"

import "./styles.css";

export const Header = () => {
  const { comparisonType, setComparisonType, comparisonMode, setComparisonMode } = useComparison();
  const { sidebarIsOpen } = useSidebar();
  const { setHamburgerMenuIsOpen } = useHamburgerMenu()
  const location = useLocation();
  const options = [
    { label: 'Table', value: "table", icon: <TableIcon /> },
    { label: 'Grid', value: "grid", icon: <GridIcon /> },
  ];

  useEffect(() => {
    setComparisonMode(location.pathname.startsWith('/comparison'));
  }, [location, setComparisonMode]);

  return (
    <div className={`container ${comparisonMode && "comparisonMode"} ${sidebarIsOpen && "sidebarOpen"}`}>
      <div className="navbarLeft">
      </div>
      <div className="navbarCenter">
        {comparisonMode && 
          <SegmentedControl
            options={options}
            defaultValue={comparisonType}
            onChange={setComparisonType}
            width={170}
          />
        }
      </div>
      <div className="navbarRight">
        <button className={`hamburgerButton ${comparisonMode ? "black" : "white"}`}
          onClick={() => setHamburgerMenuIsOpen(true)}
        >
          <div className="menu-icon-bar"></div>
          <div className="menu-icon-bar"></div>
          <div className="menu-icon-bar"></div>
        </button>
      </div>
    </div>
  );
}
