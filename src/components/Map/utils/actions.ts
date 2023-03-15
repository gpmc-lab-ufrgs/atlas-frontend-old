import { State } from '@customTypes/state';
import mapboxgl from 'mapbox-gl';

import { accessToken } from './const';

mapboxgl.accessToken = accessToken;

export function findState(allState: State[], stateName: string) {
  const result = allState.find((state) => state.properties.SIGLA_UF === stateName);

  return result;
}

export function fitCenter(map: mapboxgl.Map) {
  map.flyTo({
    center: [-58, -15],
    zoom: 3.4,
  });
}
