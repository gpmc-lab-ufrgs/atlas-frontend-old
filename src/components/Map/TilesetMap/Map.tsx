import { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import useStates from "./useStateLayer";
import useDistrict from "./useDistrictLayer";

import { accessToken } from "../const";

import "../styles.css";

const Map = () => {
  mapboxgl.accessToken = accessToken;

  const mapContainer = useRef(null);

  const [map, setMap] = useState<mapboxgl.Map>();
  const { setStateReference, stateReference } = useStates();
  const { setDistrictReference, districtReference } = useDistrict();

  function initMap() {
    let center: mapboxgl.LngLatLike = [-48, -15];

    if (mapContainer.current) {
      const mapBuilder = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v10",
        center: center,
        zoom: 5,
      });

      setMap(mapBuilder);
    }
  }

  useEffect(() => {
    if (!map) {
      initMap();
    } else if (!stateReference && !districtReference) {
      setStateReference(map);
      setDistrictReference(map);
    }
  }, [map]);

  return <div id="map" ref={mapContainer} className="map" />;
};

export default Map;
