import { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import { useDistricts } from "../../store";
import geojsonURL from "../../data/SP-districts-geojson.json";
import {
  clickDistrict,
  highlightDistrict,
  fitBounds,
  fitCenter,
  highlightComparisonDistrict,
} from "./featureActions";
import { fillOpacity, lineOpacity, lineWidth } from "./const";
import { useMapLayer, useComparison } from "../../store";
import "./styles.css";

export const Map = ({ mini }: any) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibGVvc2lsdmFnb21lcyIsImEiOiJja2MwdmxhZjAwejdsMnlsbXFsYTV5ZmVsIn0.MyyvEV2SHjCbCkIUeL_9bA";

  const { mapLayer } = useMapLayer();
  const mapContainer = useRef<any>();

  const {
    selectedDistrict,
    highlightedDistrict,
    setSelectedDistrict,
    setHighlightedDistrict,
  } = useDistricts();
  const { comparison } = useComparison();

  const [map, setMap] = useState<mapboxgl.Map>();
  const [comparisonDistricts, setComparisonDistricts] = useState({
    type: "DistrictCollection",
    features: comparison,
  });

  useEffect(() => {
    const initializeMap = ({ mapContainer }: any) => {
      let center: mapboxgl.LngLatLike = [-46.7, -23.68];

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v10",
        center: center,
        zoom: 9.2,
      });

      map.on("load", () => {
        map.dragRotate.disable();
        map.touchZoomRotate.disableRotation();

        map.addSource("sp", {
          type: "geojson",
          //@ts-ignore
          data: mini ? comparisonDistricts : geojsonURL,
          promoteId: "FEATID",
        });

        map.addLayer({
          id: "fill-sp",
          type: "fill",
          source: "sp",
          paint: {
            "fill-color": {
              property: "PERSONS_NUM",
              stops: mapLayer.stops,
            },
            //@ts-ignore
            "fill-opacity": mini ? fillOpacity[1] : fillOpacity[0],
          },
        });

        map.addLayer({
          id: "sp-borders",
          type: "line",
          source: "sp",
          paint: {
            "line-color": "#ffffff",
            //@ts-ignore
            "line-width": mini ? lineWidth[1] : lineWidth[0],
            //@ts-ignore
            "line-opacity": mini ? lineOpacity[1] : lineOpacity[0],
          },
        });
      });

      if (!mini) {
        // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

        map.on("click", "fill-sp", (e: any) => {
          if (e.features.length > 0) {
            setSelectedDistrict(e.features[0]);
          }
        });

        map.on("click", (e) => {
          const bbox = [
            [e.point.x - 5, e.point.y - 5],
            [e.point.x + 5, e.point.y + 5],
          ];

          //@ts-ignore
          const selectedDistricts = map.queryRenderedDistricts(bbox, {
            layers: ["fill-sp"],
          });

          if (selectedDistricts.length === 0) {
            setSelectedDistrict(null);
          }
        });

        map.on("mousemove", "fill-sp", (e: any) => {
          if (e.features.length > 0) {
            setHighlightedDistrict(e.features[0]);
          }
        });

        map.on("mouseleave", "fill-sp", () => {
          setHighlightedDistrict(null);
        });
      }

      setMap(map);
    };

    if (!map) initializeMap({ mapContainer });
  }, [
    map,
    mapLayer,
    setSelectedDistrict,
    setHighlightedDistrict,
    mini,
    comparison,
    comparisonDistricts,
  ]);

  useEffect(() => {
    if (comparisonDistricts.features.length !== 0 && map && mini) {
      highlightComparisonDistrict(comparisonDistricts, map);
    }
  }, [comparisonDistricts, map, mini]);

  useEffect(() => {
    if (comparison.length !== 0) {
      setComparisonDistricts({
        type: "DistrictCollection",
        features: comparison,
      });
    }
  }, [comparison, mini]);

  useEffect(() => {
    if (selectedDistrict !== null && map && !mini) {
      clickDistrict(selectedDistrict, map);
      fitBounds(selectedDistrict, map);
    } else if (selectedDistrict === null && map && !mini) {
      clickDistrict(null, map);
      fitCenter(map);
    }
  }, [map, selectedDistrict, mini]);

  useEffect(() => {
    if (highlightedDistrict !== null && map && !mini) {
      highlightDistrict(highlightedDistrict, map);
    } else if (highlightedDistrict === null && map && !mini) {
      highlightDistrict(null, map);
    }
  }, [map, highlightedDistrict, mini]);

  return (
    <div id="map" ref={(el) => (mapContainer.current = el)} className="map" />
  );
};
