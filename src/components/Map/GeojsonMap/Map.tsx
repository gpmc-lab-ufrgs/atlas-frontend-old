import { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import useDistrictLayer from "./useDistrictLayer";
import useStateLayer from "./useStateLayer";

import { accessToken } from "../const";

import "../styles.css";

const Map = () => {
  mapboxgl.accessToken = accessToken;

  const mapContainer = useRef<any>();

  const { districtReference, setDistrictReference } = useDistrictLayer();
  const { stateReference, setStateReference } = useStateLayer();

  const [map, setMap] = useState<mapboxgl.Map>();

  useEffect(() => {
    const initializeMap = ({ mapContainer }: any) => {
      let center: mapboxgl.LngLatLike = [-58, -15];

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v10",
        center: center,
        zoom: 3.4,
      });

      setMap(map);
    };

    if (!map) {
      initializeMap({ mapContainer });
    } else {
      if (!districtReference) {
        setDistrictReference(map);
      }

      if (!stateReference) {
        setStateReference(map);
      }
    }
  }, [map]);

  return (
    <div id="map" ref={(el) => (mapContainer.current = el)} className="map" />
  );
};

export default Map;
