import { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
//@ts-ignore
import geojsonURL from "../../data/SP-districts-geojson.json";
import { formatPopulationNumber } from "../../utils/population"
import "./styles.css"
import * as turf from "@turf/turf";

export const Map = () => {
  const [map, setMap] = useState<mapboxgl.Map>();
  const mapContainer = useRef<any>();
  
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibGVvc2lsdmFnb21lcyIsImEiOiJja2MwdmxhZjAwejdsMnlsbXFsYTV5ZmVsIn0.MyyvEV2SHjCbCkIUeL_9bA";
    
    const hoveredPopup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
      className: "floating-popup",
    });
    const clickedPopup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
      className: "floating-popup",
    });
    
    const initializeMap = ({mapContainer}: any) => {
      var hoveredId : number
      var clickedId : number
      
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v10",
        // style: "mapbox://styles/leosilvagomes/cku2qu4ks2mgz17r100gt7rq6/draft",
        center: [-46.7,-23.68],
        zoom: 9.2,
      });

      const clickFeature = (feature : any) => { 
        
        if (feature && feature.geometry) {
          if(feature.properties.FEATID === clickedId) {
            return;
          }

          var coordinates = turf.centerOfMass(feature).geometry.coordinates;
          var regionName = feature.properties.NAME_DIST;
          var regionPersonsNum = formatPopulationNumber(feature.properties.PERSONS_NUM);
          clickedPopup
            .setLngLat([coordinates[0], coordinates[1]])
            .setHTML(`<h5>${regionName} - ${regionPersonsNum}</h5>`)
            .addTo(map);

          map.setFeatureState(
            { source: "sp", id: feature.properties.FEATID },
            { click: true }
          );

          map.setFeatureState(
            { source: "sp", id: clickedId },
            { click: false }
          );

          clickedId = feature.properties.FEATID
        }
      }

      const highlightFeature = (feature : any) => { 
        
        if (feature && feature.geometry) {
          
          if(feature.properties.FEATID === hoveredId) {
            return;
          }

          var coordinates = turf.centerOfMass(feature).geometry.coordinates;
          var regionName = feature.properties.NAME_DIST;
          var regionPersonsNum = formatPopulationNumber(feature.properties.PERSONS_NUM);
          hoveredPopup
            .setLngLat([coordinates[0], coordinates[1]])
            .setHTML(`<h5>${regionName} - ${regionPersonsNum}</h5>`)
            .addTo(map);

          map.setFeatureState(
            { source: "sp", id: feature.properties.FEATID },
            { hover: true }
          );

          map.setFeatureState(
            { source: "sp", id: hoveredId },
            { hover: false }
          );

          hoveredId = feature.properties.FEATID
        } else {
          hoveredPopup.remove();
          map.setFeatureState(
            { source: "sp", id: hoveredId },
            { hover: false }
          );
          hoveredId = 0
        }
      }

      const clearFeatureHighlight = () => {
        highlightFeature(null);
      }

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
              stops: [
                [0, "#ADDC91"],
                [55000, "#6CC24A"],
                [110000, "#509E2F"],
                [215000, "#4A7729"],
              ],
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


      map.on("mousemove", "fill-sp", (e: any) => {
        if (e.features.length > 0) {
          highlightFeature(e.features[0]);
        }
      });

      map.on("mouseleave", "fill-sp", clearFeatureHighlight);

      map.on("click", "fill-sp", (e: any) => {
        if (e.features.length > 0) {
          clickFeature(e.features[0]);
        }
      });

      setMap(map)
    };

    if (!map) initializeMap({mapContainer});
  }, [map]);

  return <div id="map" ref={(el) => (mapContainer.current = el)} className="map" />;
};
