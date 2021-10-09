import * as turf from "@turf/turf";
import mapboxgl from "mapbox-gl";

import { formatPopulationNumber } from "../../utils/population";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGVvc2lsdmFnb21lcyIsImEiOiJja2MwdmxhZjAwejdsMnlsbXFsYTV5ZmVsIn0.MyyvEV2SHjCbCkIUeL_9bA";

var hoveredId: number;
var clickedId: number;

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

export function clickFeature(feature: any, map: mapboxgl.Map) {
  if (feature && feature.geometry) {
    if (feature.properties.FEATID === clickedId) {
      return;
    }

    var coordinates = turf.centerOfMass(feature).geometry.coordinates;
    var regionName = feature.properties.NAME_DIST;
    var regionPersonsNum = formatPopulationNumber(
      feature.properties.PERSONS_NUM
    );
    clickedPopup
      .setLngLat([coordinates[0], coordinates[1]])
      .setHTML(`<h5>${regionName} - ${regionPersonsNum}</h5>`)
      .addTo(map);

    map.setFeatureState(
      { source: "sp", id: feature.properties.FEATID },
      { click: true }
    );

    map.setFeatureState({ source: "sp", id: clickedId }, { click: false });

    clickedId = feature.properties.FEATID;
  } else if (clickedId !== undefined && map) {
    clickedPopup.remove();
    map.setFeatureState({ source: "sp", id: clickedId }, { click: false });
    clickedId = 0;
  }
}

export function highlightFeature(feature: any, map: mapboxgl.Map) {
  if (feature && feature.geometry) {
    if (feature.properties.FEATID === hoveredId) {
      return;
    }

    var coordinates = turf.centerOfMass(feature).geometry.coordinates;
    var regionName = feature.properties.NAME_DIST;
    var regionPersonsNum = formatPopulationNumber(
      feature.properties.PERSONS_NUM
    );
    hoveredPopup
      .setLngLat([coordinates[0], coordinates[1]])
      .setHTML(`<h5>${regionName} - ${regionPersonsNum}</h5>`)
      .addTo(map);

    map.setFeatureState(
      { source: "sp", id: feature.properties.FEATID },
      { hover: true }
    );

    map.setFeatureState({ source: "sp", id: hoveredId }, { hover: false });

    hoveredId = feature.properties.FEATID;
  } else if (hoveredId) {
    hoveredPopup.remove();
    map.setFeatureState({ source: "sp", id: hoveredId }, { hover: false });
    hoveredId = 0;
  }
}

export function fitBounds(feature: any, map: mapboxgl.Map) {
  if (feature && (feature.geometry || feature._geometry)) {
    const [minX, minY, maxX, maxY] = turf.bbox(feature);
    map.fitBounds(
      [
        [minX, minY],
        [maxX, maxY],
      ],
      {
        maxZoom: 12,
        padding: 100,
        bearing: map.getBearing(),
        pitch: map.getPitch(),
      }
    );
  }
}

export function fitCenter(map: mapboxgl.Map) {
  map.flyTo({
    center: [-46.7, -23.68],
    zoom: 9.2,
  });
}
