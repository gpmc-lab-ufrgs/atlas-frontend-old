import * as turf from "@turf/turf";
import mapboxgl from "mapbox-gl";
import { renderLayer } from "./actions";
import { hoveredPopup } from "../const";

var hoveredId: number;

export function clickState(feature: any, map: mapboxgl.Map) {
  renderLayer(feature, map);
}

export function highlightState(feature: any, map: mapboxgl.Map) {
  if (feature && feature.geometry) {
    if (feature.properties.CD_UF === hoveredId) {
      return;
    }

    var coordinates = turf.centerOfMass(feature).geometry.coordinates;
    var regionName = feature.properties.NM_UF;
    hoveredPopup
      .setLngLat([coordinates[0], coordinates[1]])
      .setHTML(`<h5>${regionName}</h5>`)
      .addTo(map);

    map.setFeatureState(
      { source: "state", id: feature.properties.CD_UF },
      { hover: true }
    );

    if (hoveredId) {
      map.setFeatureState({ source: "state", id: hoveredId }, { hover: false });
    }

    hoveredId = feature.properties.CD_UF;
  } else if (hoveredId) {
    hoveredPopup.remove();
    if (map.getSource("state")) {
      map.setFeatureState({ source: "state", id: hoveredId }, { hover: false });
    }
    hoveredId = 0;
  }
}
