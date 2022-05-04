import React from "react";

import Drawer from "@components/Drawer";

import { Box } from "@mui/material";
import { AutoStories } from "@mui/icons-material";

import { useSidebar } from "@store/sidebarContext";
import { useComparison } from "@store/comparisonContext";
import { useSelectedDistrict } from "@store/district/selectedContext";

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
  const { comparison } = useComparison();
  const { selected } = useSelectedDistrict();
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  const hasSelectedDistrict = Boolean(selected);

  const hasComparisonRegions = comparison.length !== 0;

  const SidebarContent = () => {
    if (isComparisonMode) {
      return <ComparisonDetails />;
    } else if (hasComparisonRegions || hasSelectedDistrict) {
      return (
        <>
          <Styles.Title>
            {hasSelectedDistrict ? title : "Atlas de Oportunidades"}
          </Styles.Title>
          <ComparisonButton />
          <RegionDetails />
        </>
      );
    } else {
      return (
        <>
          <Styles.Title>
            {hasComparisonRegions ? title : "Atlas de Oportunidades"}
          </Styles.Title>
          <Styles.EmptyContent>
            <h4>Selecione uma região no mapa para ver seus detalhes</h4>
            <Box paddingLeft={2}>
              <AutoStories />
            </Box>
          </Styles.EmptyContent>
        </>
      );
    }
  };

  return (
    <Box>
      <Minimizer />
      <Drawer
        open={isSidebarOpen}
        setOpen={setIsSidebarOpen}
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
