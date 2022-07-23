import React, { useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';

import geojsonURL from '@data/BR_UF_2020.json';

import { useSelectedState } from '@store/state/selectedContext';
import { useHighlightedState } from '@store/state/highlightedContext';

import { highlightState, clickState, isStateLayerVisible, cleanStateActions, fitStateCenter } from './stateActions';

import { fitCenter } from '../../actions';
import { stateColors } from './const';
import { lineOpacity, lineWidth, fillOpacity } from '../../const';
import { isDistrictLayerVisible } from '../useDistrictLayer/districtActions';

const useStateLayer = () => {
  const [stateReference, setStateReference] = useState<mapboxgl.Map>();

  const { setHighlighted: setHighlightedState, highlighted: highlightedState } = useHighlightedState();
  const { setSelected: setSelectedState, selected: selectedState } = useSelectedState();

  function initLayers(reference: mapboxgl.Map) {
    reference.on('load', () => {
      reference.addSource('state', {
        type: 'geojson',
        //@ts-ignore
        data: geojsonURL,
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
      }
    });

    reference.on('mousemove', 'fill-state', (e: any) => {
      if (e.features.length > 0) {
        setHighlightedState(e.features[0]);
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
    }
  }, [highlightedState]);

  useEffect(() => {
    if (stateReference && selectedState !== null) {
      clickState(selectedState, stateReference);
      fitStateCenter(selectedState, stateReference);
    } else if (stateReference) {
      clickState(null, stateReference);

      fitCenter(stateReference);

      isDistrictLayerVisible(stateReference, false);
      isStateLayerVisible(stateReference, true);

      cleanStateActions();
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
