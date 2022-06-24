import React from 'react';
import * as turf from '@turf/turf';
import mapboxgl from 'mapbox-gl';
import ReactDOM from 'react-dom';

import { State } from '@customTypes/feature';

import { clickedPopup, hoveredPopup } from '../../const';
import { ClickablePopup } from '@components/Map/components';

let hoveredId: number | undefined;
let clickedId: number | undefined;

type Feature = State | null;

function addPopup(feature: Feature, map: mapboxgl.Map, type: string) {
  const regionName = feature?.properties?.NM_UF;
  const coordinates = turf.centerOfMass(feature).geometry.coordinates;
  const placeholder = document.createElement('div');

  switch (type) {
    case 'hover':
      hoveredPopup.trackPointer().setHTML(`<h5>${regionName}</h5>`).addTo(map);

      break;
    case 'click':
      if (regionName) {
        ReactDOM.render(<ClickablePopup regionName={regionName} reference={map} feature={feature} />, placeholder);

        clickedPopup.setLngLat([coordinates[0], coordinates[1]]).setDOMContent(placeholder).addTo(map);
      }

      break;
  }
}

function setFeatureHover(featureID: number, map: mapboxgl.Map, state: boolean) {
  map.setFeatureState({ source: 'state', id: featureID }, { hover: state });
}

function setFeatureClick(featureID: number, map: mapboxgl.Map, state: boolean) {
  map.setFeatureState({ source: 'state', id: featureID }, { hover: state });
}

export function clickState(feature: Feature, map: mapboxgl.Map) {
  const stateID = feature?.properties?.CD_UF;

  if (feature && feature.geometry) {
    if (stateID === clickedId) {
      return;
    }
    addPopup(feature, map, 'click');

    if (clickedId) {
      setFeatureClick(clickedId, map, false);
    }

    if (stateID) {
      setFeatureClick(stateID, map, true);
      clickedId = stateID;
    }
  } else if (clickedId) {
    if (map.getSource('state')) {
      setFeatureClick(clickedId, map, false);
    }
    clickedId = undefined;
  }
}

export function highlightState(feature: Feature, map: mapboxgl.Map) {
  const stateID = feature?.properties?.CD_UF;

  if (feature && feature.geometry) {
    if (stateID === hoveredId) {
      return;
    }

    addPopup(feature, map, 'hover');

    if (hoveredId) {
      setFeatureHover(hoveredId, map, false);
    }

    if (stateID) {
      setFeatureHover(stateID, map, true);
      hoveredId = stateID;
    }
  } else if (hoveredId) {
    hoveredPopup.remove();

    if (map.getSource('state')) {
      setFeatureHover(hoveredId, map, false);
    }
    hoveredId = undefined;
  }
}

export function isStateLayerVisible(map: mapboxgl.Map, visible: boolean) {
  const visibility = visible ? 'visible' : 'none';

  if (map.getLayer('fill-state')) {
    map.setLayoutProperty('fill-state', 'visibility', visibility);
  }

  if (map.getLayer('state-borders')) {
    map.setLayoutProperty('state-borders', 'visibility', visibility);
  }
}

export function cleanStateActions() {
  hoveredPopup.remove();
  clickedPopup.remove();
  clickedId = 0;
  hoveredId = undefined;
}

export function fitStateBounds(feature: Feature, map: mapboxgl.Map) {
  if (feature && (feature.geometry || feature._geometry)) {
    const [minX, minY, maxX, maxY] = turf.bbox(feature);

    map.fitBounds(
      [
        [minX, minY],
        [maxX, maxY],
      ],
      {
        padding: { top: 100, bottom: 100, left: 200, right: 200 },
      },
    );
  }
}
