import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useComparison, useSidebar } from "@store/index";

import SearchBar from "./SearchBar";

import Drawer from "@components/Drawer";
import ComparisonControl from "./ComparisonControl";
import ProjectInformations from "./ProjectInformations";

import * as Styles from "./styles";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const { isSidebarOpen } = useSidebar();
  const {
    comparisonType,
    setComparisonType,
    comparisonMode,
    setComparisonMode,
  } = useComparison();

  useEffect(() => {
    setComparisonMode(location.pathname.startsWith("/comparison"));
  }, [location, setComparisonMode]);

  if (comparisonMode) {
    return (
      <Styles.HeaderContainer comparisonMode isSidebarOpen={isSidebarOpen}>
        <Styles.HeaderCenterSide>
          <ComparisonControl
            comparisonType={comparisonType}
            setComparison={setComparisonType}
          />
        </Styles.HeaderCenterSide>

        <Styles.HeaderRightSide>
          <Styles.MenuButton comparisonMode onClick={() => setOpenMenu(true)} />

          <Drawer open={openMenu} setOpen={setOpenMenu} anchor="right">
            <ProjectInformations setOpen={setOpenMenu} />
          </Drawer>
        </Styles.HeaderRightSide>
      </Styles.HeaderContainer>
    );
  }

  return (
    <Styles.HeaderContainer isSidebarOpen={isSidebarOpen}>
      <Styles.HeaderLeftSide>
        <SearchBar />
      </Styles.HeaderLeftSide>
      <Styles.HeaderRightSide>
        <Styles.MenuButton onClick={() => setOpenMenu(true)} />

        <Drawer open={openMenu} setOpen={setOpenMenu} anchor="right">
          <ProjectInformations setOpen={setOpenMenu} />
        </Drawer>
      </Styles.HeaderRightSide>
    </Styles.HeaderContainer>
  );
};

export default Header;
