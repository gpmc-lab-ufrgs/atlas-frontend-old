import React from "react";

import { MinimizerSidebarButton } from "@components/Sidebar/components/index";

import Drawer from "@components/Drawer";

import { useSidebar } from "@store/index";

interface Props {
  isComparisonMode: boolean;
}

const Sidebar: React.FC<Props> = ({ isComparisonMode }) => {
  const { sidebarIsOpen, setSidebarIsOpen } = useSidebar();

  if (isComparisonMode) {
    return <div></div>;
  }

  return (
    <>
      <MinimizerSidebarButton />
      <Drawer
        open={sidebarIsOpen}
        setOpen={setSidebarIsOpen}
        anchor="left"
        hideBackdrop
      ></Drawer>
    </>
  );
};

export default Sidebar;
