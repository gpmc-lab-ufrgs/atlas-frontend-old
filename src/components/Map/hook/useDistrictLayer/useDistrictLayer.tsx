import React, { useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';

import { useHighlightedDistrict } from '@context/district/highlightedContext';
import { useSelectedDistrict } from '@context/district/selectedContext';
import { useSelectedState } from '@context/state/selectedContext';
import { useSidebar } from 'src/context/sidebarContext';

import {
  highlightDistrict,
  clickDistrict,
  cleanDistrictActions,
  fitDistrictBounds,
  addClickPopup,
  addHoverPopup,
} from './districtActions';

import { RSColors } from './const';
import { lineOpacity, lineWidth, fillOpacity } from '../../utils/const';

import geojsonGO from '@data/states/RS_Municipios_2020.json';
import { fitStateBounds } from '../useStateLayer/stateActions';
import { findState } from '@components/Map/utils/actions';

const useDistrictLayer = () => {
  const [districtReference, setDistrictReference] = useState<mapboxgl.Map>();

  const { setHighlighted: setHighlightedDistrict, highlighted: highlightedDistrict } = useHighlightedDistrict();
  const { setSelected: setSelectedDistrict, selected: selectedDistrict } = useSelectedDistrict();

  const { selected: selectedState, setSelected: setSelectedState, all: allState } = useSelectedState();

  const { setIsSidebarOpen } = useSidebar();

  function initLayers(reference: mapboxgl.Map) {
    reference.on('load', () => {
      reference.dragRotate.disable();
      reference.touchZoomRotate.disableRotation();

      reference.addSource('district', {
        type: 'geojson',
        //@ts-ignore
        data: geojsonGO,
        //@ts-ignore
        promoteId: 'CD_MUN',
      });

      reference.addLayer({
        id: 'fill-district',
        type: 'fill',
        source: 'district',
        layout: {
          visibility: 'none',
        },
        paint: {
          'fill-color': {
            property: 'POPULATION',
            stops: RSColors,
          },
          //@ts-ignore
          'fill-opacity': fillOpacity,
        },
      });

      reference.addLayer({
        id: 'district-borders',
        type: 'line',
        source: 'district',
        layout: {
          visibility: 'none',
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
    reference.on('click', 'fill-district', (e: mapboxgl.EventData) => {
      if (e.features.length > 0) {
        setSelectedDistrict(e.features[0]);
      }

      addClickPopup(e, reference);
    });

    reference.on('mousemove', 'fill-district', (e: mapboxgl.EventData) => {
      if (e.features.length > 0) {
        setHighlightedDistrict(e.features[0]);
      }

      addHoverPopup(e, reference);
    });

    reference.on('mouseleave', 'fill-district', () => {
      setHighlightedDistrict(null);
    });
  }

  useEffect(() => {
    if (districtReference) {
      initLayers(districtReference);
      initActions(districtReference);
    }
  }, [districtReference]);

  useEffect(() => {
    if (districtReference) {
      highlightDistrict(highlightedDistrict, districtReference);
    }
  }, [highlightedDistrict]);

  useEffect(() => {
    if (districtReference && selectedDistrict !== null) {
      clickDistrict(selectedDistrict, districtReference);

      fitDistrictBounds(selectedDistrict, districtReference);

      setIsSidebarOpen(true);

      if (selectedState === null) {
        const state = findState(allState, selectedDistrict.properties.SIGLA_UF);

        setSelectedState(state);
      }
    } else if (districtReference) {
      clickDistrict(null, districtReference);

      fitStateBounds(selectedState, districtReference);

      cleanDistrictActions();
    }
  }, [selectedDistrict]);

  return { districtReference, setDistrictReference };
};

export default useDistrictLayer;
