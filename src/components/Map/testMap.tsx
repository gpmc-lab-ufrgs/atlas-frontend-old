import { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import geojsonURL from "../../data/BR_UF_2020.json";
import { lineOpacity, lineWidth, fillOpacity } from "./const";
import { useMapLayer } from "../../store"
import { highlightState, clickState } from "./testMapActions"
import { highlightMun } from "./testMapMunActions"
import "./styles.css"

export const TestMap = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibGVvc2lsdmFnb21lcyIsImEiOiJja2MwdmxhZjAwejdsMnlsbXFsYTV5ZmVsIn0.MyyvEV2SHjCbCkIUeL_9bA";
    
  const { mapLayer } = useMapLayer();
  const mapContainer = useRef<any>();
  
  // const { comparison } = useComparison();
  
  const [map, setMap] = useState<mapboxgl.Map>();
  const [highlightedState, setHighlightedState] = useState(null);
  const [highlightedMun, setHighlightedMun] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  // const [comparisonFeatures] = useState({ type: "FeatureCollection", features: comparison });
  
  useEffect(() => {   
    const initializeMap = ({mapContainer}: any) => {
      let center: mapboxgl.LngLatLike = [-58, -15]

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
            'visibility': 'visible',
          },
          paint: {
            "fill-color": "#6CC24A",
            //@ts-ignore
            "fill-opacity": fillOpacity[0]
          },
        });

        map.addLayer({
          id: "state-borders",
          type: "line",
          source: "state",
          layout: {
            'visibility': 'visible',
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

      map.on("click", "fill-state", (e: any) => {
        if (e.features.length > 0) {
          setSelectedState(e.features[0])
        }
      });

      map.on("mousemove", "fill-state", (e: any) => {
        if (e.features.length > 0) {
          setHighlightedState(e.features[0])
        }
      });
    
      map.on("mouseleave", "fill-state", () => {
        setHighlightedState(null)
      });

      map.on("mousemove", "fill-mun", (e: any) => {
        if (e.features.length > 0) {
          setHighlightedMun(e.features[0])
        }
      });

      map.on("mouseleave", "fill-mun", () => {
        setHighlightedMun(null)
      });

      setMap(map)
    };


    if (!map) initializeMap({mapContainer});
  }, [map, mapLayer]);

  useEffect(() => {
    if(map) {
      highlightMun(highlightedMun, map)
    }
  }, [highlightedMun, map])

  useEffect(() => {
    if(map) {
      highlightState(highlightedState, map)
    }
  }, [highlightedState, map])

  useEffect(() => {
    if(map) {
      clickState(selectedState, map)
    }
  }, [selectedState, map])

  return <div id="map" ref={(el) => (mapContainer.current = el)} className="map" />;
};
