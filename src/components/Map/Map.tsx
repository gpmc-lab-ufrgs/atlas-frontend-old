import React, { useState, useRef, useEffect } from 'react';

import useMap from '@hook/useMap';
import useDistrictLayer from './hook/useDistrictLayer';
import useStateLayer from './hook/useStateLayer';

import { accessToken } from './utils/const';

import './styles.css';

const Map = () => {
  const mapContainer = useRef<any>();
  const { districtReference, setDistrictReference } = useDistrictLayer();
  const { stateReference, setStateReference } = useStateLayer(); //passar como parâmetro para a função qual estado quer ver
  const { resetMapValues, resetDistrictValues } = useMap();
  const [map, setMap] = useState<mapboxgl.Map>();

  useEffect(() => {
    const loadMapboxGl = async () => {
      const mapboxgl = await import('mapbox-gl');
      mapboxgl.accessToken = accessToken;

      const center: mapboxgl.LngLatLike = [-58, -15];
      const mapReference = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: center,
        zoom: 3.4,
      });

      mapReference.on('click', (e) => {
        const bbox = [
          [e.point.x - 5, e.point.y - 5],
          [e.point.x + 5, e.point.y + 5],
        ];

        //@ts-ignore
        const clickedDistrict = mapReference.queryRenderedFeatures(bbox, {
          layers: ['fill-district'],
        });

        const zoom = mapReference.getZoom();

        if (clickedDistrict.length === 0 && zoom > 6) {
          resetDistrictValues();
        } else if (clickedDistrict.length === 0) {
          resetMapValues();
        }
      });

      setMap(mapReference);
    };

    if (!map) {
      loadMapboxGl();
    } else {
      if (!districtReference) {
        setDistrictReference(map);
      }

      if (!stateReference) {
        setStateReference(map);
      }
    }
  }, [map]);

  return <div id="map" ref={(el) => (mapContainer.current = el)} className="map" />;
};

export default Map;
