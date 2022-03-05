import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import MenuDrawer from "@components/MenuDrawer";
import ProjectInformations from "@components/ProjectInformations";

import { useComparison } from "@store/index";

import { SegmentedControl } from "@components/Header";

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

          <MenuDrawer open={openMenu} setOpen={setOpenMenu} anchor="right">
            <ProjectInformations setOpen={setOpenMenu} />
          </MenuDrawer>
        </Styles.HeaderRightSide>
      </Styles.HeaderContainer>
    );
  }

  return (
    <Styles.HeaderContainer>
      <Styles.HeaderRightSide>
        <Styles.MenuButton onClick={() => setOpenMenu(true)} />

        <MenuDrawer open={openMenu} setOpen={setOpenMenu} anchor="right">
          <ProjectInformations setOpen={setOpenMenu} />
        </MenuDrawer>
      </Styles.HeaderRightSide>
    </Styles.HeaderContainer>
  );
};

export default Header;
