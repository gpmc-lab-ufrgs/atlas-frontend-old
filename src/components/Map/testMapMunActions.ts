import { lineOpacity, lineWidth, fillOpacity } from "./const";
import * as turf from "@turf/turf";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGVvc2lsdmFnb21lcyIsImEiOiJja2MwdmxhZjAwejdsMnlsbXFsYTV5ZmVsIn0.MyyvEV2SHjCbCkIUeL_9bA";

var hoveredId: number;

const hoveredPopup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false,
  className: "floating-popup",
});

export function createLayer(layer: any, map: mapboxgl.Map) {
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
        "fill-color": "#6CC24A",
        //@ts-ignore
        "fill-opacity": fillOpacity[0],
      },
    });

    map.addLayer({
      id: "mun-borders",
      type: "line",
      source: "mun",
      paint: {
        "line-color": "#ffffff",
        //@ts-ignore
        "line-width": lineWidth[0],
        //@ts-ignore
        "line-opacity": lineOpacity[0],
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
