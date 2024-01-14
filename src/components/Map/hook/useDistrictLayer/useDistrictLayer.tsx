/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';

import { useHighlightedDistrict } from '@context/district/highlightedContext';
import { useSelectedDistrict } from '@context/district/selectedContext';
import { useSelectedState } from '@context/state/selectedContext';
import { useSidebar } from '@context/sidebarContext';

import { isStateLayerVisible } from '../useStateLayer/stateActions';

import { useLocation, useNavigate } from 'react-router-dom';

import districtsSHAPE from '@data/states/mergedfile.json'; //arquivo com todos os shapes https://findthatpostcode.uk/tools/merge-geojson
import { findState } from '@components/Map/utils/actions';
import { highlightDistrict, clickDistrict, cleanDistrictActions, fitDistrictBounds, addPopup } from './districtActions';

import { RSColors } from './const';
import { lineOpacity, lineWidth, fillOpacity } from '../../utils/const';
import { fitStateBounds, handleCleanStateLayer } from '../useStateLayer/stateActions';
import { Cidades } from 'src/interfaces/Cidades.type';
import { getCidade } from 'src/services/atlasControl';

import { useAppDispatch, useAppSelector } from '@hook/hooks';
import { cidadeSelected, changeCidade } from 'src/features/cidadeSlice';

const useDistrictLayer = () => {
  const dispatch = useAppDispatch();
  const [districtReference, setDistrictReference] = useState<mapboxgl.Map>();
  const [latLng, setLatLng] = useState<mapboxgl.LngLat>();

  const { setHighlighted: setHighlightedDistrict, highlighted: highlightedDistrict } = useHighlightedDistrict();
  const { setSelected: setSelectedDistrict, selected: selectedDistrict } = useSelectedDistrict();

  const { selected: selectedState, setSelected: setSelectedState, all: allState } = useSelectedState();

  const { setIsSidebarOpen } = useSidebar();

  const location = useLocation();
  const navigate = useNavigate();

  const allDistricts = {
    type: 'FeatureCollection',
    features: [...districtsSHAPE.features],
  };

  function initLayers(reference: mapboxgl.Map) {
    reference.on('load', () => {
      reference.dragRotate.disable();
      reference.touchZoomRotate.disableRotation();

      reference.addSource('district', {
        type: 'geojson',
        //@ts-ignore
        data: allDistricts,
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
        setLatLng(e.lngLat);
      }
      if (window.location.href.includes('/en')) {
        navigate('/en/district');
      } else {
        navigate('/district');
      }
    });

    reference.on('mousemove', 'fill-district', (e: mapboxgl.EventData) => {
      if (e.features.length > 0) {
        setHighlightedDistrict(e.features[0]);
        setLatLng(e.lngLat);
      }
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
      if (highlightedDistrict) {
        if (latLng) {
          addPopup(highlightedDistrict, districtReference, latLng, 'Hover');
        } else {
          const coordinates = turf.centerOfMass(highlightedDistrict).geometry.coordinates;
          addPopup(highlightedDistrict, districtReference, [coordinates[0], coordinates[1]], 'Hover');
        }
        setLatLng(undefined);
      }
    }
  }, [highlightedDistrict]);

  const gtCidade = (idCidade: number | undefined) => {
    if (idCidade){
      getCidade(idCidade)
      .then((dataRec) => {
        const dtCt: Cidades[] = dataRec.data;
        dispatch(changeCidade(dtCt));
      });
    }    
  };

  useEffect(() => {
    if (districtReference) {
      console.log(selectedDistrict?.properties.CD_MUN);
      gtCidade(selectedDistrict?.properties.CD_MUN);
      clickDistrict(selectedDistrict, districtReference);

      if (selectedDistrict) {
        handleCleanStateLayer(districtReference);
        fitDistrictBounds(selectedDistrict, districtReference);
        setIsSidebarOpen(true);

        if (latLng) {
          addPopup(selectedDistrict, districtReference, latLng, 'Click');
        } else {
          const coordinates = turf.centerOfMass(selectedDistrict).geometry.coordinates;
          addPopup(selectedDistrict, districtReference, [coordinates[0], coordinates[1]], 'Click');
        }
        setLatLng(undefined);

        const state = findState(allState, selectedDistrict.properties.SIGLA_UF);

        if (!selectedState || selectedState !== state) {
          console.log(state);
          setSelectedState(state);
        }
      } else {
        cleanDistrictActions();
        fitStateBounds(selectedState, districtReference);
      }
    }
  }, [selectedDistrict]);

  return { districtReference, setDistrictReference };
};

export default useDistrictLayer;
