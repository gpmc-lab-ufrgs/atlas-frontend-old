import { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import useMap from "@hook/useMap";

import geojsonURL from "@data/BR_UF_2020.json";
import { useFeatures } from "@store/featuresContext";
import { useSidebar } from "@store/sidebarContext";

import "./styles.css";
import { fitBounds, fitCenter } from "./actions";
import { highlightMun, clickMun } from "./munActions";
import { highlightState, clickState } from "./stateActions";
import { lineOpacity, lineWidth, fillOpacity, accessToken } from "./const";

const mapColorStops = [
  [0, "#ADDC91"],
  [2570160, "#6CC24A"],
  [3766528, "#509E2F"],
  [10444526, "#4A7729"],
];

const Map = () => {
  mapboxgl.accessToken = accessToken;

  const { resetMapValues } = useMap();
  const mapContainer = useRef<any>();

  const [map, setMap] = useState<mapboxgl.Map>();
  const { setIsSidebarOpen } = useSidebar();

  const { district, state } = useFeatures();

  useEffect(() => {
    const initializeMap = ({ mapContainer }: any) => {
      let center: mapboxgl.LngLatLike = [-58, -15];

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v10",
        center: center,
        zoom: 3.4,
      });

      map.on("load", () => {
        map.dragRotate.disable();
        map.touchZoomRotate.disableRotation();

        map.addSource("state", {
          type: "geojson",
          //@ts-ignore
          data: geojsonURL,
          //@ts-ignore
          promoteId: "CD_UF",
        });

        map.addLayer({
          id: "fill-state",
          type: "fill",
          source: "state",
          layout: {
            visibility: "visible",
          },
          paint: {
            "fill-color": {
              property: "POPULATION",
              stops: mapColorStops,
            },
            //@ts-ignore
            "fill-opacity": fillOpacity[0],
          },
        });

        map.addLayer({
          id: "state-borders",
          type: "line",
          source: "state",
          layout: {
            visibility: "visible",
          },
          paint: {
            "line-color": "#ffffff",
            //@ts-ignore
            "line-width": lineWidth[0],
            //@ts-ignore
            "line-opacity": lineOpacity[0],
          },
        });
      });

      // State level

      map.on("click", "fill-state", (e: any) => {
        if (e.features.length > 0) {
          state.setSelected(e.features[0]);
        }
      });

      map.on("mousemove", "fill-state", (e: any) => {
        if (e.features.length > 0) {
          state.setHighlighted(e.features[0]);
        }
      });

      map.on("mouseleave", "fill-state", () => {
        state.setHighlighted(null);
      });

      // City level

      map.on("click", "fill-mun", (e: any) => {
        if (e.features.length > 0) {
          district.setSelected(e.features[0]);
          setIsSidebarOpen(true);
        }
      });

      map.on("click", (e) => {
        const bbox = [
          [e.point.x - 5, e.point.y - 5],
          [e.point.x + 5, e.point.y + 5],
        ];

        if (map.getLayer("fill-mun")) {
          //@ts-ignore
          const clickedMun = map.queryRenderedFeatures(bbox, {
            layers: ["fill-mun"],
          });

          if (clickedMun.length === 0) {
            resetMapValues();
          }
        }
      });

      map.on("mousemove", "fill-mun", (e: any) => {
        if (e.features.length > 0) {
          district.setHighlighted(e.features[0]);
        }
      });

      map.on("mouseleave", "fill-mun", () => {
        district.setHighlighted(null);
      });

      setMap(map);
    };

    if (!map) initializeMap({ mapContainer });
  }, [map, district, state]);

  // State level

  useEffect(() => {
    if (map) {
      highlightState(state.highlighted, map);
    }
  }, [state, map]);

  useEffect(() => {
    if (map) {
      if (state.selected !== null) {
        clickState(state.selected, map);
        fitBounds(state.selected, map);
      } else if (state.selected === null) {
        clickState(state.selected, map);
        fitCenter(map);
      }
    }
  }, [state.selected, map]);

  // City level

  useEffect(() => {
    if (map && map.getSource("mun")) {
      if (district.highlighted !== null) {
        highlightMun(district.highlighted, map);
      } else if (district.highlighted === null) {
        highlightMun(null, map);
      }
    }
  }, [district.highlighted, map]);

  useEffect(() => {
    if (map) {
      if (district.selected !== null) {
        if (state.selected === null) {
          state.setSelected({
            properties: { SIGLA_UF: district.selected.properties.SIGLA_UF },
          });
        }
        clickMun(district.selected, map);
        fitBounds(district.selected, map);
      } else if (district.selected === null && map.getSource("mun")) {
        clickMun(null, map);
        fitBounds(state.selected, map);
      }
    }
  }, [map, state.selected, district.selected]);

  return (
    <div id="map" ref={(el) => (mapContainer.current = el)} className="map" />
  );
};

export default Map;
