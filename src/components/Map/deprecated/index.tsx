import { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import { useFeatures } from "../../store";
import geojsonURL from "../../data/SP-districts-geojson.json";
import { clickFeature, highlightFeature, fitBounds, fitCenter, highlightComparisonFeature } from "./featureActions"
import { fillOpacity, lineOpacity, lineWidth } from "./const";
import { useMapLayer, useComparison } from "../../store"
import "./styles.css"

export const Map = ({mini}: any) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibGVvc2lsdmFnb21lcyIsImEiOiJja2MwdmxhZjAwejdsMnlsbXFsYTV5ZmVsIn0.MyyvEV2SHjCbCkIUeL_9bA";
    
  const { mapLayer } = useMapLayer();
  const mapContainer = useRef<any>();
  
  const { selectedFeature,  highlightedFeature, setSelectedFeature, setHighlightedFeature } = useFeatures();
  const { comparison } = useComparison();
  
  const [map, setMap] = useState<mapboxgl.Map>();
  const [comparisonFeatures, setComparisonFeatures] = useState({ type: "FeatureCollection", features: comparison });
  
  useEffect(() => {   
    const initializeMap = ({mapContainer}: any) => {
      let center: mapboxgl.LngLatLike = [-46.7, -23.68]

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
          data: mini ? comparisonFeatures : geojsonURL,
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
            //@ts-ignore
            "fill-opacity": mini ? fillOpacity[1] : fillOpacity[0]
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
            setSelectedFeature(e.features[0])
          }
        });

        map.on("click", (e) => {
          const bbox = [
            [e.point.x - 5, e.point.y - 5],
            [e.point.x + 5, e.point.y + 5]
          ];

          //@ts-ignore
          const selectedFeatures = map.queryRenderedFeatures(bbox, {
            layers: ['fill-sp']
          });

          if(selectedFeatures.length === 0) {
            setSelectedFeature(null)
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
      }

      setMap(map)
    };


    if (!map) initializeMap({mapContainer});
  }, [map, mapLayer, setSelectedFeature, setHighlightedFeature, mini, comparison, comparisonFeatures]);

  useEffect(() => {
    if (comparisonFeatures.features.length !== 0 && map && mini) {
      highlightComparisonFeature(comparisonFeatures, map)
    }
  }, [comparisonFeatures, map, mini])
  
  useEffect(()=> {
    if (comparison.length !== 0) {
      setComparisonFeatures({ type: "FeatureCollection", features: comparison })
    }
  }, [comparison, mini])

  useEffect(() => {
    if(selectedFeature !== null && map && !mini) {
      clickFeature(selectedFeature, map);
      fitBounds(selectedFeature, map)
    } else if (selectedFeature === null && map && !mini) {
      clickFeature(null, map);
      fitCenter(map)
    }
  }, [map, selectedFeature, mini])

  useEffect(() => {
    if(highlightedFeature !== null && map && !mini) {
      highlightFeature(highlightedFeature, map);
    } else if (highlightedFeature === null && map && !mini) {
      highlightFeature(null, map);
    }
  }, [map, highlightedFeature, mini])

  return <div id="map" ref={(el) => (mapContainer.current = el)} className="map" />;
};
