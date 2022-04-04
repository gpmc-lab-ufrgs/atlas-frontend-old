import * as turf from "@turf/turf";
import mapboxgl from "mapbox-gl";
import { createMunLayer } from "./munActions";
import { accessToken, clickedPopup } from "../const";
import geojsonGO from "../../../data/states/GO_Municipios_2020.json";

mapboxgl.accessToken = accessToken;

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

export function fitCenter(map: mapboxgl.Map) {
  map.flyTo({
    center: [-58, -15],
    zoom: 3.4,
  });
}

export function renderLayer(feature: any, map: mapboxgl.Map) {
  if (map.getLayer("fill-state") && map.getLayer("state-borders")) {
    const visibilityFill = map.getLayoutProperty("fill-state", "visibility");
    const visibilityState = map.getLayoutProperty(
      "state-borders",
      "visibility"
    );

    if (
      visibilityFill === "visible" &&
      visibilityState === "visible" &&
      feature !== null
    ) {
      map.setLayoutProperty("fill-state", "visibility", "none");
      map.setLayoutProperty("state-borders", "visibility", "none");

      if (feature.source === "state") {
        createMunLayer(geojsonGO, map);
      } else {
        createMunLayer(feature, map);
      }
    } else if (
      map.getSource("mun") &&
      map.getLayer("fill-mun") &&
      map.getLayer("mun-borders") &&
      feature === null
    ) {
      map.removeLayer("mun-borders");
      map.removeLayer("fill-mun");
      map.removeSource("mun");

      clickedPopup.remove();
      map.setLayoutProperty("fill-state", "visibility", "visible");
      map.setLayoutProperty("state-borders", "visibility", "visible");
    }
  }
}
