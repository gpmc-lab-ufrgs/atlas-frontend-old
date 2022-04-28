import * as turf from "@turf/turf";
import mapboxgl from "mapbox-gl";

import { hoveredPopup } from "../../const";

var hoveredId: number | undefined;

export function clickDistrict(feature: any, map: mapboxgl.Map) {
  console.log("leo");
}

function addPopup(feature: any, map: mapboxgl.Map) {
  var coordinates = turf.centerOfMass(feature).geometry.coordinates;
  var regionName = feature?.properties?.NM_MUN;

  hoveredPopup
    .setLngLat([coordinates[0], coordinates[1]])
    .setHTML(`<h5>${regionName}</h5>`)
    .addTo(map);
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

    addPopup(feature, map);

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
