import React from "react";

import Drawer from "@components/Drawer";

import { Box } from "@mui/material";

import { useSidebar } from "@store/index";

import { MinimizerSidebarButton } from "@components/Sidebar/components/index";
import RegionDetails from "./RegionDetails";
import ComparisonButton from "./ComparisonButton";

import * as Styles from "./styles";

interface Props {
  isComparisonMode: boolean;
}

const Sidebar: React.FC<Props> = ({ isComparisonMode }) => {
  const { sidebarIsOpen, setSidebarIsOpen } = useSidebar();

  if (isComparisonMode) {
    return <div></div>;
  }

  return (
    <Box>
      <MinimizerSidebarButton />
      <Drawer
        open={sidebarIsOpen}
        setOpen={setSidebarIsOpen}
        anchor="left"
        hideBackdrop
      >
        <Styles.SidebarContent>
          <ComparisonButton />
          <RegionDetails />
        </Styles.SidebarContent>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
