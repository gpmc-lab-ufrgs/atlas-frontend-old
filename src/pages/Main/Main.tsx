import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";

import { useTheme } from "@mui/material/styles";

import { useComparison } from "@store/comparisonContext";
import { useSelectedDistrict } from "@store/district/selectedContext";
import { useSidebar } from "@store/sidebarContext";

import Footer from "@components/Footer";
import Header from "@components/Header";
import Modal from "@components/Modal";
import Sidebar from "@components/Sidebar";
import CompatisonMode from "@components/ComparisonMode";

import { TilesetMap, GeojsonMap } from "@components/Map";

import * as Styles from "./styles";

const Main = () => {
  const { comparison, addComparisonDistrict } = useComparison();
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  const { all, selected } = useSelectedDistrict();

  const location = useLocation();
  const history = useHistory();

  const theme = useTheme();

  const [isComparisonModeOn, setIsComparisonModeOn] = useState<boolean>(false);
  const [comparisonType, setComparisonType] = useState("table");
  const [useTilesetMap, setUseTilesetMap] = useState(false);

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
        const featuresFromUrl = all.filter((ft: any) =>
          ids.includes(ft.properties["CD_MUN"].toString())
        );
        setIsSidebarOpen(true);
        addComparisonDistrict(featuresFromUrl);
      } else {
        history.replace("/");
      }
    }
  }, [location, history, comparison, addComparisonDistrict]);

  useEffect(() => {
    if (location.pathname.startsWith("/comparison/") && all.length !== 0) {
      const ids = comparison.map((feature: any) => feature.properties.CD_MUN);
      const newPath = "/comparison/" + ids.join("+");
      if (location.pathname !== newPath) {
        history.replace(newPath);
      }
    }
  }, [comparison, location, history]);

  const hasSelectedDistrict = !!selected;

  return (
    <Styles.MainContainer>
      <Modal />

      {(hasSelectedDistrict || isComparisonModeOn) && (
        <Sidebar
          isComparisonMode={isComparisonModeOn}
          title={selected?.properties.NM_MUN}
        />
      )}

      <Styles.ComparisonWrapper isSidebarOpen={isSidebarOpen} theme={theme}>
        <Header
          isComparisonModeOn={isComparisonModeOn}
          comparisonType={comparisonType}
          setComparisonType={setComparisonType}
          mapType={useTilesetMap}
          setMapType={setUseTilesetMap}
        />

        {isComparisonModeOn && (
          <CompatisonMode comparisonType={comparisonType} />
        )}
      </Styles.ComparisonWrapper>

      {useTilesetMap ? <TilesetMap /> : <GeojsonMap />}

      <Footer />
    </Styles.MainContainer>
  );
};

export default Main;
