import { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import geojsonURL from "../../data/BR_UF_2020.json";
import { useFeatures, useMapLayer, useStates } from "../../store";

import "./styles.css"
import { fitBounds, fitCenter } from "./actions"
import { lineOpacity, lineWidth, fillOpacity } from "./const"
import { highlightState, clickState } from "./stateActions"
import { highlightMun, clickMun } from "./munActions"

export const Map = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibGVvc2lsdmFnb21lcyIsImEiOiJja2MwdmxhZjAwejdsMnlsbXFsYTV5ZmVsIn0.MyyvEV2SHjCbCkIUeL_9bA";
    
  const { mapLayer } = useMapLayer();
  const mapContainer = useRef<any>();
  
  
  const [map, setMap] = useState<mapboxgl.Map>();
  const {highlightedState, selectedState, setHighlightedState, setSelectedState} = useStates();
  const {selectedFeature,  highlightedFeature, setSelectedFeature, setHighlightedFeature} = useFeatures();
  
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

      // State level

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

      // City level

      map.on("click", "fill-mun", (e: any) => {
        if (e.features.length > 0) {
          setSelectedFeature(e.features[0])
        }
      });

      map.on("click", (e) => {
        const bbox = [
          [e.point.x - 5, e.point.y - 5],
          [e.point.x + 5, e.point.y + 5]
        ];

        if (map.getLayer("fill-mun")) {
          //@ts-ignore
          const clickedMun = map.queryRenderedFeatures(bbox, {
            layers: ['fill-mun']
          });

          if(clickedMun.length === 0) {
            setSelectedFeature(null)
            setSelectedState(null)
          }
        }
      });

      map.on("mousemove", "fill-mun", (e: any) => {
        if (e.features.length > 0) {
          setHighlightedFeature(e.features[0])
        }
      });
    
      map.on("mouseleave", "fill-mun", () => {
        setHighlightedFeature(null)
      })

      setMap(map)
    };


    if (!map) initializeMap({mapContainer});
  }, [map, mapLayer, setHighlightedFeature, setSelectedFeature, setHighlightedState, setSelectedState, selectedFeature, selectedState]);

  // State level

  useEffect(() => {
    if(map) {
      highlightState(highlightedState, map)
    }
  }, [highlightedState, map])
  
  useEffect(() => {
    if (map) {
      if(selectedState !== null) {
        clickState(selectedState, map)
        fitBounds(selectedState, map);
      } else if (selectedState === null) {
        clickState(selectedState, map)  
        fitCenter(map)
      }
    }
  }, [selectedState, map])
  
  // City level
  
  useEffect(() => {
    if (map && map.getSource('mun')) {
      if(highlightedFeature !== null) {
        highlightMun(highlightedFeature, map);
      } else if (highlightedFeature === null) {
        highlightMun(null, map);
      }
    }
  }, [highlightedFeature, map])

  useEffect(() => {
    if (map) {
      if(selectedFeature !== null) {
        if(selectedState === null) {
          setSelectedState({properties: {SIGLA_UF: selectedFeature.properties.SIGLA_UF}}) 
        }
        clickMun(selectedFeature, map);
        fitBounds(selectedFeature, map);
      } else if (selectedFeature === null && map.getSource('mun')) {
        clickMun(null, map);
        fitBounds(selectedState, map);
      }
    }
  }, [map, selectedFeature, selectedState, setSelectedState])

  return <div id="map" ref={(el) => (mapContainer.current = el)} className="map" />;
};
