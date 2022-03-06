import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useComparison } from "@store/index";

import Drawer from "@components/Drawer";
import SearchBar from "@components/SearchBar";
import { SegmentedControl, ProjectInformations } from "@components/Header";

import * as Styles from "./styles";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

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
      <Styles.HeaderContainer comparisonMode>
        <Styles.HeaderCenterSide>
          <SegmentedControl
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
    <Styles.HeaderContainer>
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
