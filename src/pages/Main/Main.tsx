import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";

import { useTheme } from "@mui/material/styles";

import { useComparison } from "@store/comparisonContext";
import { useFeatures } from "@store/featuresContext";
import { useSidebar } from "@store/sidebarContext";

import Footer from "@components/Footer";
import Header from "@components/Header";
import Modal from "@components/Modal";
import Sidebar from "@components/Sidebar";
import CompatisonMode from "@components/ComparisonMode";

import { Map } from "@components/Map";

import * as Styles from "./styles";

const Main = () => {
  const { comparison, addComparisonDistrict } = useComparison();
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  const { district } = useFeatures();

  const location = useLocation();
  const history = useHistory();

  const theme = useTheme();

  const [isComparisonModeOn, setIsComparisonModeOn] = useState<boolean>(false);
  const [comparisonType, setComparisonType] = useState("table");

  useEffect(() => {
    setIsComparisonModeOn(location.pathname.startsWith("/comparison"));
  }, [location, setIsComparisonModeOn]);

  useEffect(() => {
    if (
      comparison.length === 0 &&
      location.pathname.startsWith("/comparison/")
    ) {
      const pathIds = location.pathname.replace("/comparison/", "");
      if (pathIds) {
        const ids = pathIds.split("+");
        const featuresFromUrl = district.all.filter((ft: any) =>
          ids.includes(ft.properties["CD_MUN"].toString())
        );
        setIsSidebarOpen(true);
        addComparisonDistrict(featuresFromUrl);
      } else {
        history.replace("/");
      }
    }
  }, [district, location, history, comparison, addComparisonDistrict]);

  useEffect(() => {
    if (
      location.pathname.startsWith("/comparison/") &&
      district.all.length !== 0
    ) {
      const ids = comparison.map((feature: any) => feature.properties.CD_MUN);
      const newPath = "/comparison/" + ids.join("+");
      if (location.pathname !== newPath) {
        history.replace(newPath);
      }
    }
  }, [comparison, district, location, history]);

  const hasSelectedDistrict = !!district.selected;

  return (
    <Styles.MainContainer>
      <Modal />
      {(hasSelectedDistrict || isComparisonModeOn) && (
        <Sidebar
          isComparisonMode={isComparisonModeOn}
          title={district.selected?.properties.NM_MUN}
        />
      )}
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
