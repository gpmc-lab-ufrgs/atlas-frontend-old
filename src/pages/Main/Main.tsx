import { useEffect } from "react";
import { useLocation, useHistory } from "react-router";

import { useTheme } from "@mui/material/styles";

import { useComparison, useFeatures, useSidebar } from "@store/index";

import Footer from "@components/Footer";
import Header from "@components/Header";
import Modal from "@components/Modal";
import Sidebar from "@components/SidebarTest";

import { Map } from "@components/Map";
import { ComparisonView } from "@components/ComparisonView";

import "./styles.css";

import * as Styles from "./styles";

const Main = () => {
  const {
    comparison,
    addComparisonFeature,
    comparisonMode,
    setComparisonMode,
  } = useComparison();
  const { features, selectedFeature } = useFeatures();
  const location = useLocation();
  const history = useHistory();
  const { sidebarIsOpen } = useSidebar();
  const theme = useTheme();

  useEffect(() => {
    setComparisonMode(location.pathname.startsWith("/comparison"));
  }, [location, setComparisonMode]);

  useEffect(() => {
    if (
      comparison.length === 0 &&
      location.pathname.startsWith("/comparison/")
    ) {
      const pathIds = location.pathname.replace("/comparison/", "");
      if (pathIds) {
        const ids = pathIds.split("+");
        const featuresFromUrl = features.filter((ft: any) =>
          ids.includes(ft.properties["CD_MUN"].toString())
        );
        addComparisonFeature(featuresFromUrl);
      } else {
        history.replace("/");
      }
    }
  }, [features, location, history, comparison, addComparisonFeature]);

  useEffect(() => {
    if (location.pathname.startsWith("/comparison/") && features.length !== 0) {
      const ids = comparison.map((feature: any) => feature.properties.CD_MUN);
      const newPath = "/comparison/" + ids.join("+");
      if (location.pathname !== newPath) {
        history.replace(newPath);
      }
    }
  }, [comparison, features, location, history]);

  const hasSelectedFeature = !!selectedFeature;

  return (
    <Styles.MainContainer>
      <Modal />
      {hasSelectedFeature && <Sidebar isComparisonMode={comparisonMode} />}
      <Styles.ComparisonWrapper isSidebarOpen={sidebarIsOpen} theme={theme}>
        <Header />
        {/* {comparisonMode && <ComparisonView />} */}
      </Styles.ComparisonWrapper>
      <Map />
      <Footer />
    </Styles.MainContainer>
  );
};

export default Main;
