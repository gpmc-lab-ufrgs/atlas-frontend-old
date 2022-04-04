import * as turf from "@turf/turf";
import mapboxgl from "mapbox-gl";

import { stateSourceLayer, hoveredPopup } from "../../const";

var hoveredId: number | undefined;

export function clickState(feature: any, map: mapboxgl.Map) {
  console.log("leo");
}

function addPopup(feature: any, map: mapboxgl.Map) {
  var coordinates = turf.centerOfMass(feature).geometry.coordinates;
  var regionName = feature?.properties?.NM_UF;

  hoveredPopup
    .setLngLat([coordinates[0], coordinates[1]])
    .setHTML(`<h5>${regionName}</h5>`)
    .addTo(map);
}

function setFeatureHover(featureID: number, map: mapboxgl.Map, state: boolean) {
  map.setFeatureState(
    { source: "state", sourceLayer: stateSourceLayer, id: featureID },
    { hover: state }
  );
}

export function highlightState(feature: any, map: mapboxgl.Map) {
  const stateID = feature?.properties.CD_UF;

  if (feature && feature.geometry) {
    if (stateID === hoveredId) {
      return;
    }

    addPopup(feature, map);

    if (hoveredId) {
      setFeatureHover(hoveredId, map, false);
    }

    if (stateID) {
      setFeatureHover(stateID, map, true);
      hoveredId = stateID;
    }
  } else if (hoveredId) {
    hoveredPopup.remove();

    if (map.getSource("state")) {
      setFeatureHover(hoveredId, map, false);
    }
    hoveredId = undefined;
  }
}
