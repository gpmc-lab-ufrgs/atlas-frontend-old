import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Window, TableChart } from "@mui/icons-material";

import MenuDrawer from "@components/MenuDrawer";
import ProjectInformations from "@components/ProjectInformations";

import { useComparison } from "@store/index";

import { SegmentedControl } from "./components";

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

  const options = [
    { label: "Table", value: "table", icon: <TableChart /> },
    { label: "Grid", value: "grid", icon: <Window /> },
  ];

  useEffect(() => {
    setComparisonMode(location.pathname.startsWith("/comparison"));
  }, [location, setComparisonMode]);

  if (comparisonMode) {
    <Styles.HeaderContainer comparisonMode>
      <Styles.HeaderCenterSide>
        <SegmentedControl
          options={options}
          defaultValue={comparisonType}
          onChange={setComparisonType}
          width={170}
        />
      </Styles.HeaderCenterSide>
      <Styles.HeaderRightSide>
        <Styles.MenuButton comparisonMode onClick={() => setOpenMenu(true)} />

        <MenuDrawer open={openMenu} setOpen={setOpenMenu} anchor="right">
          <ProjectInformations setOpen={setOpenMenu} />
        </MenuDrawer>
      </Styles.HeaderRightSide>
    </Styles.HeaderContainer>;
  }

  return (
    <Styles.HeaderContainer comparisonMode={false}>
      <Styles.HeaderRightSide>
        <Styles.MenuButton
          comparisonMode={false}
          onClick={() => setOpenMenu(true)}
        />

        <MenuDrawer open={openMenu} setOpen={setOpenMenu} anchor="right">
          <ProjectInformations setOpen={setOpenMenu} />
        </MenuDrawer>
      </Styles.HeaderRightSide>
    </Styles.HeaderContainer>
  );
};

export default Header;
