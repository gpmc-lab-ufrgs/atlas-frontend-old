import React, { useState } from "react";

import { useSidebar } from "@store/sidebarContext";

import { Switch } from "@mui/material";

import Drawer from "@components/Drawer";

import SearchBar from "./SearchBar";
import ComparisonControl from "./ComparisonControl";
import ProjectInformations from "./ProjectInformations";

import * as Styles from "./styles";

interface Props {
  isComparisonModeOn: boolean;
  comparisonType: string;
  setComparisonType(value: string): void;
  mapType: boolean;
  setMapType: (bool: boolean) => void;
}

const Header: React.FC<Props> = ({
  isComparisonModeOn,
  comparisonType,
  setComparisonType,
  mapType,
  setMapType,
}) => {
  const [openMenu, setOpenMenu] = useState(false);

  const { isSidebarOpen } = useSidebar();

  function handleMap() {
    setMapType(!mapType);
  }

  if (isComparisonModeOn) {
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

      {/* <Styles.HeaderCenterSide>
        <Styles.MapControl>
          <h4>Geojson</h4>
          <Switch onChange={handleMap} />
          <h4>Tileset</h4>
        </Styles.MapControl>
      </Styles.HeaderCenterSide> */}

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
