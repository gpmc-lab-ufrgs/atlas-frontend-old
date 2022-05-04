import * as turf from "@turf/turf";
import mapboxgl from "mapbox-gl";

import { hoveredPopup, clickedPopup } from "../../const";

var clickedId: number | undefined;
var hoveredId: number | undefined;

function addPopup(feature: any, map: mapboxgl.Map, type: string) {
  var coordinates = turf.centerOfMass(feature).geometry.coordinates;
  var regionName = feature?.properties?.NM_MUN;

  switch (type) {
    case "hover":
      hoveredPopup
        .setLngLat([coordinates[0], coordinates[1]])
        .setHTML(`<h5>${regionName}</h5>`)
        .addTo(map);
      break;
    case "click":
      clickedPopup
        .setLngLat([coordinates[0], coordinates[1]])
        .setHTML(`<h5>${regionName}</h5>`)
        .addTo(map);
      break;
  }
}

function setFeatureClick(featureID: number, map: mapboxgl.Map, state: boolean) {
  map.setFeatureState({ source: "district", id: featureID }, { click: state });
}

export function clickDistrict(feature: any, map: mapboxgl.Map) {
  const districtID = feature?.properties.CD_MUN;

  if (feature && feature.geometry) {
    if (districtID === clickedId) {
      return;
    }

    addPopup(feature, map, "click");

    setFeatureClick(districtID, map, true);

    if (clickedId) {
      setFeatureClick(clickedId, map, false);
    }

    clickedId = districtID;
  } else {
    clickedPopup.remove();

    if (clickedId !== undefined) {
      if (map.getSource("mun")) {
        setFeatureClick(clickedId, map, false);
      }
      clickedId = 0;
    }
  }
}

function setFeatureHover(featureID: number, map: mapboxgl.Map, state: boolean) {
  map.setFeatureState({ source: "district", id: featureID }, { hover: state });
}

export function highlightDistrict(feature: any, map: mapboxgl.Map) {
  const districtID = feature?.properties.CD_MUN;

  if (feature && feature.geometry) {
    if (districtID === hoveredId) {
      return;
    }

    addPopup(feature, map, "hover");

    if (hoveredId) {
      setFeatureHover(hoveredId, map, false);
    }

    setFeatureHover(districtID, map, true);
    hoveredId = districtID;
  } else if (hoveredId) {
    hoveredPopup.remove();

    if (map.getSource("district")) {
      setFeatureHover(hoveredId, map, false);
    }
    hoveredId = undefined;
  }
}
