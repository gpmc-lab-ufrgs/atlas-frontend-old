import {
  lineOpacity,
  lineWidth,
  fillOpacity,
  hoveredPopup,
  clickedPopup,
} from "../const";
import * as turf from "@turf/turf";
import mapboxgl from "mapbox-gl";

import { renderLayer } from "./actions";
import { munColorsRS } from "../mapColors";

var hoveredId: number;
var clickedId: number;

export function createMunLayer(layer: any, map: mapboxgl.Map) {
  if (layer !== null) {
    map.addSource("mun", {
      type: "geojson",
      //@ts-ignore
      data: layer,
      //@ts-ignore
      promoteId: "CD_MUN",
    });

    map.addLayer({
      id: "fill-mun",
      type: "fill",
      source: "mun",
      paint: {
        "fill-color": {
          property: "POPULATION",
          stops: munColorsRS,
        },
        //@ts-ignore
        "fill-opacity": fillOpacity,
      },
    });

    map.addLayer({
      id: "mun-borders",
      type: "line",
      source: "mun",
      paint: {
        "line-color": "#ffffff",
        //@ts-ignore
        "line-width": lineWidth,
        //@ts-ignore
        "line-opacity": lineOpacity,
      },
    });
  }
}

export function highlightMun(feature: any, map: mapboxgl.Map) {
  if (feature && feature.geometry) {
    if (feature.properties.CD_MUN === hoveredId) {
      return;
    }

    var coordinates = turf.centerOfMass(feature).geometry.coordinates;
    var regionName = feature.properties.NM_MUN;
    hoveredPopup
      .setLngLat([coordinates[0], coordinates[1]])
      .setHTML(`<h5>${regionName}</h5>`)
      .addTo(map);

    map.setFeatureState(
      { source: "mun", id: feature.properties.CD_MUN },
      { hover: true }
    );

    if (hoveredId) {
      map.setFeatureState({ source: "mun", id: hoveredId }, { hover: false });
    }

    hoveredId = feature.properties.CD_MUN;
  } else if (hoveredId) {
    hoveredPopup.remove();
    if (map.getSource("mun")) {
      map.setFeatureState({ source: "mun", id: hoveredId }, { hover: false });
    }
    hoveredId = 0;
  }
}

export function clickMun(feature: any, map: mapboxgl.Map) {
  if (feature && feature.geometry) {
    renderLayer(feature, map);

    if (feature.properties.CD_MUN === clickedId) {
      return;
    }

    var coordinates = turf.centerOfMass(feature).geometry.coordinates;
    var regionName = feature.properties.NM_MUN;
    clickedPopup
      .setLngLat([coordinates[0], coordinates[1]])
      .setHTML(`<h5>${regionName}</h5>`)
      .addTo(map);

    map.setFeatureState(
      { source: "mun", id: feature.properties.CD_MUN },
      { click: true }
    );

    if (clickedId) {
      map.setFeatureState({ source: "mun", id: clickedId }, { click: false });
    }

    clickedId = feature.properties.CD_MUN;
  } else {
    clickedPopup.remove();

    if (clickedId !== undefined) {
      if (map.getSource("mun")) {
        map.setFeatureState({ source: "mun", id: clickedId }, { click: false });
      }
      clickedId = 0;
    }
  }
}
