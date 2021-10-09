import { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import { useFeatures } from "../../store";
import geojsonURL from "../../data/SP-districts-geojson.json";
import { clickFeature, highlightFeature, fitBounds, fitCenter } from "./featureActions"
import { useMapLayer } from "../../store"
import "./styles.css"

export const Map = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibGVvc2lsdmFnb21lcyIsImEiOiJja2MwdmxhZjAwejdsMnlsbXFsYTV5ZmVsIn0.MyyvEV2SHjCbCkIUeL_9bA";
  
  const [map, setMap] = useState<mapboxgl.Map>();
  const { mapLayer } = useMapLayer();
  const mapContainer = useRef<any>();
  const { selectedFeature,  highlightedFeature, setSelectedFeature, setHighlightedFeature } = useFeatures();

  useEffect(() => {   
    const initializeMap = ({mapContainer}: any) => {
      
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v10",
        // style: "mapbox://styles/leosilvagomes/cku2qu4ks2mgz17r100gt7rq6/draft",
        center: [-46.7,-23.68],
        zoom: 9.2,
      });

      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
      
      map.on("load", () => {
        map.dragRotate.disable();
        map.touchZoomRotate.disableRotation();

        map.addSource("sp", {
          type: "geojson",
          //@ts-ignore
          data: geojsonURL,
          promoteId: "FEATID",
        });


        map.addLayer({
          id: "fill-sp",
          type: "fill",
          source: "sp",
          paint: {
            "fill-color":
            {
              property: "PERSONS_NUM",
              stops: mapLayer.stops
            },
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "click"], false],
              1,
              ["boolean", ["feature-state", "highlight"], false],
              1,
              ["boolean", ["feature-state", "hover"], false],
              1,
              0.8,
            ],
          },
        });

        map.addLayer({
          id: "sp-borders",
          type: "line",
          source: "sp",
          paint: {
            "line-color": "#ffffff",
            "line-width": [
              "case",
              ["boolean", ["feature-state", "click"], false],
              1.8,
              ["boolean", ["feature-state", "highlight"], false],
              1.8,
              ["boolean", ["feature-state", "hover"], false],
              1.8,
              0.75,
            ],
            "line-opacity": [
              "case",
              ["boolean", ["feature-state", "click"], false],
              1.5,
              ["boolean", ["feature-state", "highlight"], false],
              1.5,
              ["boolean", ["feature-state", "hover"], false],
              1.5,
              0.5,
            ],
          },
        });
      });

      map.on("click", "fill-sp", (e: any) => {
        if (e.features.length > 0) {
          setSelectedFeature(e.features[0])
        }
      });

      map.on("mousemove", "fill-sp", (e: any) => {
        if (e.features.length > 0) {
          setHighlightedFeature(e.features[0])
        }
      });
    
      map.on("mouseleave", "fill-sp", () => {
        setHighlightedFeature(null)
      })

      setMap(map)
    };

    if (!map) initializeMap({mapContainer});
  }, [map, mapLayer, setSelectedFeature, setHighlightedFeature]);

  useEffect(() => {
    if(selectedFeature !== null && map) {
      clickFeature(selectedFeature, map);
      fitBounds(selectedFeature, map)
    } else if (selectedFeature === null && map) {
      clickFeature(null, map);
      fitCenter(map)
    }
  }, [map, selectedFeature])

  useEffect(() => {
    if(highlightedFeature !== null && map) {
      highlightFeature(highlightedFeature, map);
    } else if (highlightedFeature === null && map) {
      highlightFeature(null, map);
    }
  }, [map, highlightedFeature])

  return <div id="map" ref={(el) => (mapContainer.current = el)} className="map" />;
};
