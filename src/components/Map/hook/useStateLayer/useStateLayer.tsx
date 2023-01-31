import { useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';

import { useSelectedDistrict } from '@context/district/selectedContext';
import { useHighlightedState } from '@context/state/highlightedContext';
import { useSelectedState } from '@context/state/selectedContext';

import {
  addPopup,
  cleanStateActions,
  clickState,
  fitStateCenter,
  highlightState,
  isStateLayerVisible,
} from './stateActions';

import { getAllStates } from '@services/state';
import { fitCenter } from '../../utils/actions';
import { fillOpacity, lineOpacity, lineWidth } from '../../utils/const';
import { isDistrictLayerVisible } from '../useDistrictLayer/districtActions';
import { stateColors } from './const';

const useStateLayer = () => {
  const [stateReference, setStateReference] = useState<mapboxgl.Map>();
  const [latLng, setLatLng] = useState<mapboxgl.LngLat>();

  const { setHighlighted: setHighlightedState, highlighted: highlightedState } = useHighlightedState();
  const { setSelected: setSelectedState, selected: selectedState } = useSelectedState();
  const { selected: selectedDistrict } = useSelectedDistrict();

  function initLayers(reference: mapboxgl.Map) {
    reference.on('load', async () => {
      reference.addSource('state', {
        type: 'geojson',
        //@ts-ignore
        data: await getAllStates(),
        //@ts-ignore
        promoteId: 'CD_UF',
      });

      reference.addLayer({
        id: 'fill-state',
        type: 'fill',
        source: 'state',
        layout: {
          visibility: 'visible',
        },
        paint: {
          'fill-color': {
            property: 'POPULATION',
            stops: stateColors,
          },
          //@ts-ignore
          'fill-opacity': fillOpacity,
        },
      });

      reference.addLayer({
        id: 'state-borders',
        type: 'line',
        source: 'state',
        layout: {
          visibility: 'visible',
        },
        paint: {
          'line-color': '#ffffff',
          //@ts-ignore
          'line-width': lineWidth,
          //@ts-ignore
          'line-opacity': lineOpacity,
        },
      });
    });
  }

  function initActions(reference: mapboxgl.Map) {
    reference.on('click', 'fill-state', (e: any) => {
      if (e.features.length > 0) {
        setSelectedState(e.features[0]);
        setLatLng(e.lngLat);
      }
    });

    reference.on('mousemove', 'fill-state', (e: any) => {
      if (e.features.length > 0) {
        setHighlightedState(e.features[0]);
        setLatLng(e.lngLat);
      }
    });

    reference.on('mouseleave', 'fill-state', () => {
      setHighlightedState(null);
    });
  }

  useEffect(() => {
    if (stateReference) {
      initLayers(stateReference);
      initActions(stateReference);
    }
  }, [stateReference]);

  useEffect(() => {
    if (stateReference) {
      highlightState(highlightedState, stateReference);
      if (latLng) addPopup(highlightedState, stateReference, latLng, 'Hover');
    }
  }, [highlightedState]);

  useEffect(() => {
    if (stateReference && !selectedDistrict) {
      clickState(selectedState, stateReference);

      if (selectedState) {
        fitStateCenter(selectedState, stateReference);
        if (latLng) addPopup(selectedState, stateReference, latLng, 'Click');
      } else {
        fitCenter(stateReference);

        isDistrictLayerVisible(stateReference, false);
        isStateLayerVisible(stateReference, true);

        cleanStateActions();
      }
    }
  }, [selectedState, stateReference]);

  return {
    initLayers,
    initActions,
    setStateReference,
    stateReference,
  };
};

export default useStateLayer;
