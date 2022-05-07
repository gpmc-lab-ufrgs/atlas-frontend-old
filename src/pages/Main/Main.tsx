import { useState } from "react";

import { useTheme } from "@mui/material/styles";

import { useSelectedDistrict } from "@store/district/selectedContext";
import { useSidebar } from "@store/sidebarContext";

import Map from "@components/Map";
import Modal from "@components/Modal";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import CompatisonMode from "@components/ComparisonMode";

import { useMain } from "./hook";

import * as Styles from "./styles";

const Main = () => {
  const { isSidebarOpen } = useSidebar();
  const { selected } = useSelectedDistrict();

  const theme = useTheme();

  const [comparisonType, setComparisonType] = useState("table");
  const { isComparisonModeOn } = useMain();

  return (
    <Styles.MainContainer>
      <Modal />

      <Sidebar
        isComparisonMode={isComparisonModeOn}
        title={selected?.properties.NM_MUN}
      />

      <Styles.ComparisonWrapper isSidebarOpen={isSidebarOpen} theme={theme}>
        <Header
          isComparisonModeOn={isComparisonModeOn}
          comparisonType={comparisonType}
          setComparisonType={setComparisonType}
        />

        {isComparisonModeOn && (
          <CompatisonMode comparisonType={comparisonType} />
        )}
      </Styles.ComparisonWrapper>

      <Map />

      <Footer />
    </Styles.MainContainer>
  );
};

export default Main;
