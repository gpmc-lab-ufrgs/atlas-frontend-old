import * as turf from "@turf/turf";
import mapboxgl from "mapbox-gl";

import { accessToken } from "../const";

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
        padding: { top: 0, bottom: 0, left: 420, right: 200 },
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
