import { useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import { useComparison, useFeatures } from "../../store";

import Footer from "@components/Footer";
import Header from "@components/Header";

import { Sidebar } from "../../components";
import { Map } from "@components/Map";
import { ComparisonView } from "@components/ComparisonView";
import { Modal } from "@components/Modal";

import "./styles.css";

export const Main = () => {
  const {
    comparison,
    addComparisonFeature,
    comparisonMode,
    setComparisonMode,
  } = useComparison();
  const { features } = useFeatures();
  const location = useLocation();
  const history = useHistory();

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

  return (
    <div className="main">
      <Modal />
      <Header />
      {comparisonMode ? <Sidebar comparison /> : <Sidebar />}
      {comparisonMode && <ComparisonView />}
      <Map />
      <Footer />
    </div>
  );
};
