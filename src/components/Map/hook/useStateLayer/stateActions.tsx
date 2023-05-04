import * as turf from '@turf/turf';
import mapboxgl from 'mapbox-gl';
import { createRoot } from 'react-dom/client';

import { State } from '@customTypes/state';

import ClickablePopup from '@components/Map/ClickablePopup';
import { MapActionType } from '@customTypes/map';

import { clickedPopup, hoveredPopup } from '../../utils/const';
import { isDistrictLayerVisible } from '../useDistrictLayer/districtActions';


let hoveredId: number | undefined;
let clickedId: number | undefined;

type Feature = State | null;

export function addPopup(feature: Feature, map: mapboxgl.Map, lngLat: mapboxgl.LngLat, type: MapActionType) {
  const regionName = feature?.properties?.NM_UF;
  const placeholder = document.createElement('div') as Element;
  const root = createRoot(placeholder);

  if (regionName) {
    if (type === 'Click') {
      root.render(<ClickablePopup regionName={regionName} reference={map} feature={feature} />);
      clickedPopup.setLngLat(lngLat).setDOMContent(placeholder).addTo(map);
    } else if (type === 'Hover') {
      hoveredPopup.setLngLat(lngLat).setHTML(`<h5>${regionName}</h5>`).addTo(map);
    }
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

export function isStateLayerVisible2(map: mapboxgl.Map, visible: boolean) {
  const visibility = visible ? 'visible' : 'none';
  const fillColor = visible ? 'transparent' : 'rgba(0, 0, 0, 0)'; // set the fill color to transparent or transparent black
  const borderColor = visible ? 'black' : 'rgba(0, 0, 0, 0)'; // set the border color to the desired color or transparent black

  if (map.getLayer('fill-state')) {
    map.setPaintProperty('fill-state', 'fill-color', fillColor);
  }

  if (map.getLayer('state-borders')) {
    map.setPaintProperty('state-borders', 'line-color', borderColor);
    map.setLayoutProperty('state-borders', 'visibility', visibility);
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

export const handleCleanStateLayer = (map: mapboxgl.Map) => {
  isDistrictLayerVisible(map, true);
  isStateLayerVisible(map, false);
  cleanStateActions();
};

let selectedStates: { id: number, name: string }[] = [];

export const onAddStateToComparison = (feature: Feature, map: mapboxgl.Map) => {
  const stateID = feature?.properties?.CD_UF;
  const stateName = feature?.properties?.NM_UF

  if (!stateID) {
    return;
  }

  // Check if stateID already exists in selectedStates
  if (selectedStates.some(state => state.id === stateID)) {
    return;
  }

  // Hide state layer and show district layer
  isStateLayerVisible(map, true);
  //setIsSidebarOpen(true);
  //isDistrictLayerVisible(map, true);


  // Clean state actions
  //cleanStateActions();

  // Add stateID and stateName to selectedStates
  selectedStates.push({ id: stateID, name: stateName });

  // Create alert and print stateID
  //alert(`Selected state ID: ${selectedStates}`);
  //console.log(`Selected state ID: ${stateID}`);
};

export { selectedStates };


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

export function fitStateCenter(feature: Feature, map: mapboxgl.Map) {
  if (feature && (feature.geometry || feature._geometry)) {
    const coordinates = turf.centerOfMass(feature).geometry.coordinates;

    map.flyTo({
      center: [coordinates[0], coordinates[1]],
    });
  }
}
