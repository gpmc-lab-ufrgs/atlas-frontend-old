import React from "react";

import Drawer from "@components/Drawer";

import { Box } from "@mui/material";

import { useSidebar } from "@store/index";

import Minimizer from "./Minimizer";
import RegionDetails from "./RegionDetails";
import ComparisonButton from "./ComparisonButton";
import ComparisonDetails from "./ComparisonDetails";

import * as Styles from "./styles";

interface Props {
  isComparisonMode: boolean;
  title?: string;
}

const Sidebar: React.FC<Props> = ({ isComparisonMode, title }) => {
  const { sidebarIsOpen, setSidebarIsOpen } = useSidebar();

  const SidebarContent = () => {
    if (isComparisonMode) {
      return <ComparisonDetails />;
    } else {
      return (
        <>
          <Styles.Title>{title}</Styles.Title>
          <ComparisonButton />
          <RegionDetails />
        </>
      );
    }
  };

  return (
    <Box>
      <Minimizer />
      <Drawer
        open={sidebarIsOpen}
        setOpen={setSidebarIsOpen}
        anchor="left"
        hideBackdrop
      >
        <Styles.SidebarContent>
          <SidebarContent />
        </Styles.SidebarContent>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
