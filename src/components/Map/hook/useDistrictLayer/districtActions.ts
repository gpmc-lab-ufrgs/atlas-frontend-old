import * as turf from '@turf/turf';
import mapboxgl from 'mapbox-gl';

import { District } from '@customTypes/feature';

import { hoveredPopup, clickedPopup } from '../../const';

import geosesData from '@data/Data.json';

let clickedId: number | undefined;
let hoveredId: number | undefined;

type Feature = District | null;

function setFeatureClick(featureID: number, map: mapboxgl.Map, state: boolean) {
  map.setFeatureState({ source: 'district', id: featureID }, { click: state });
}

function setFeatureHover(featureID: number, map: mapboxgl.Map, state: boolean) {
  map.setFeatureState({ source: 'district', id: featureID }, { hover: state });
}

function addPopup(feature: Feature, map: mapboxgl.Map) {
  const regionName = feature?.properties?.NM_MUN;

  const population =
    //@ts-ignore
    feature?.properties?.CD_MUN != undefined ? geosesData[feature?.properties?.CD_MUN]['Populacao_Estimada'] : '';

  map.on('mousemove', function (e) {
    const coordinates = e.lngLat;

    if (hoveredId) {
      hoveredPopup
        .setLngLat(coordinates)
        .setHTML(`<div style="display: flex;flex-direction: column;"><h5>${regionName}</h5></div>`);

      hoveredPopup.addTo(map);
    } else {
      hoveredPopup.remove();
    }
  });

  map.on('click', function (e) {
    const coordinates = e.lngLat;

    if (clickedId !== 0) {
      clickedPopup
        .setLngLat(coordinates)
        .setHTML(
          `<div style="display: flex; flex-direction: column;"><h5>${regionName}</h5><h5>População: ${population}</h5></div>`,
        );
      clickedPopup.addTo(map);
    } else {
      clickedPopup.remove();
    }
  });
}

export function clickDistrict(feature: Feature, map: mapboxgl.Map) {
  const districtID = feature?.properties.CD_MUN;

  if (feature && feature.geometry && districtID) {
    if (districtID === clickedId) {
      return;
    }

    addPopup(feature, map);

    setFeatureClick(districtID, map, true);

    if (clickedId) {
      setFeatureClick(clickedId, map, false);
    }

    clickedId = districtID;
  } else {
    clickedPopup.remove();

    if (clickedId !== undefined) {
      if (map.getSource('district')) {
        setFeatureClick(clickedId, map, false);
      }
      clickedId = 0;
    }
  }
}

export function highlightDistrict(feature: Feature, map: mapboxgl.Map) {
  const districtID = feature?.properties.CD_MUN;

  if (feature && feature.geometry && districtID) {
    if (districtID === hoveredId) {
      return;
    }

    addPopup(feature, map);

    if (hoveredId) {
      setFeatureHover(hoveredId, map, false);
    }

    setFeatureHover(districtID, map, true);
    hoveredId = districtID;
  } else if (hoveredId) {
    hoveredPopup.remove();

    if (map.getSource('district')) {
      setFeatureHover(hoveredId, map, false);
    }
    hoveredId = undefined;
  }
}

export function isDistrictLayerVisible(map: mapboxgl.Map, visible: boolean) {
  const visibility = visible ? 'visible' : 'none';

  if (map.getLayer('fill-district')) {
    map.setLayoutProperty('fill-district', 'visibility', visibility);
  }

  if (map.getLayer('district-borders')) {
    map.setLayoutProperty('district-borders', 'visibility', visibility);
  }
}

export function cleanDistrictActions() {
  hoveredPopup.remove();
  clickedPopup.remove();
  clickedId = 0;
  hoveredId = undefined;
}

export function fitDistrictBounds(feature: Feature, map: mapboxgl.Map) {
  if (feature && (feature.geometry || feature._geometry)) {
    const [minX, minY, maxX, maxY] = turf.bbox(feature);

    map.fitBounds(
      [
        [minX, minY],
        [maxX, maxY],
      ],
      {
        padding: { top: 200, bottom: 200, left: 550, right: 200 },
      },
    );
  }
}
