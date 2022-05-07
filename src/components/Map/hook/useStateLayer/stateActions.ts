import * as turf from "@turf/turf";
import mapboxgl from "mapbox-gl";

import { hoveredPopup } from "../../const";
import { fitBounds, fitCenter } from "../../actions";

var hoveredId: number | undefined;
var clickedId: number | undefined;

function addPopup(feature: any, map: mapboxgl.Map) {
  var coordinates = turf.centerOfMass(feature).geometry.coordinates;
  var regionName = feature?.properties?.NM_UF;

  hoveredPopup
    .setLngLat([coordinates[0], coordinates[1]])
    .setHTML(`<h5>${regionName}</h5>`)
    .addTo(map);
}

function setFeatureHover(featureID: number, map: mapboxgl.Map, state: boolean) {
  map.setFeatureState({ source: "state", id: featureID }, { hover: state });
}

function setFeatureClick(featureID: number, map: mapboxgl.Map, state: boolean) {
  map.setFeatureState({ source: "state", id: featureID }, { hover: state });
}

export function clickState(feature: any, map: mapboxgl.Map) {
  const stateID = feature?.properties?.CD_UF;

  if (feature && feature.geometry) {
    if (stateID === clickedId) {
      return;
    }

    fitBounds(feature, map);

    if (clickedId) {
      setFeatureClick(clickedId, map, false);
    }

    if (stateID) {
      setFeatureClick(stateID, map, true);
      clickedId = stateID;
    }
  } else if (clickedId) {
    fitCenter(map);

    if (map.getSource("state")) {
      setFeatureClick(clickedId, map, false);
    }
    clickedId = undefined;
  }
}

export function highlightState(feature: any, map: mapboxgl.Map) {
  const stateID = feature?.properties?.CD_UF;

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

export function isStateLayerVisible(map: mapboxgl.Map, visible: boolean) {
  const visibility = visible ? "visible" : "none";

  if (map.getLayer("fill-state")) {
    map.setLayoutProperty("fill-state", "visibility", visibility);
  }

  if (map.getLayer("state-borders")) {
    map.setLayoutProperty("state-borders", "visibility", visibility);
  }
}

export function cleanStateActions() {
  hoveredPopup.remove();
  clickedId = 0;
  hoveredId = undefined;
}
