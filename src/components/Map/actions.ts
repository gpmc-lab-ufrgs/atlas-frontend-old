import { State } from "@customTypes/feature";
import mapboxgl from "mapbox-gl";

import { accessToken } from "./const";

mapboxgl.accessToken = accessToken;

export function findState(allState: State[], stateName: string) {
  const state = allState.find(
    (state) => state.properties.SIGLA_UF === stateName
  );

  return state;
}

export function fitCenter(map: mapboxgl.Map) {
  map.flyTo({
    center: [-58, -15],
    zoom: 3.4,
  });
}
