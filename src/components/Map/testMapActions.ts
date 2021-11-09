import * as turf from "@turf/turf";
import mapboxgl from "mapbox-gl";
import geojsonSP from "../../data/states/SP_Municipios_2020.json";
import { createLayer } from "./testMapMunActions";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGVvc2lsdmFnb21lcyIsImEiOiJja2MwdmxhZjAwejdsMnlsbXFsYTV5ZmVsIn0.MyyvEV2SHjCbCkIUeL_9bA";

var hoveredId: number;

const hoveredPopup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false,
  className: "floating-popup",
});

export function clickState(feature: any, map: mapboxgl.Map) {
  const visibilityFill = map.getLayoutProperty("fill-state", "visibility");
  const visibilityState = map.getLayoutProperty("state-borders", "visibility");

  if (visibilityFill && visibilityState) {
    map.setLayoutProperty("fill-state", "visibility", "none");
    map.setLayoutProperty("state-borders", "visibility", "none");
  }

  if (feature !== null) {
    fitBounds(feature, map);

    createLayer(geojsonSP, map);
  }
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

export function fitBounds(feature: any, map: mapboxgl.Map) {
  if (feature && (feature.geometry || feature._geometry)) {
    const [minX, minY, maxX, maxY] = turf.bbox(feature);

    map.fitBounds(
      [
        [minX, minY],
        [maxX, maxY],
      ],
      {
        padding: { top: 0, bottom: 0, left: 320, right: 120 },
      }
    );
  }
}
