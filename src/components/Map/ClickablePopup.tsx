import React from 'react';
import mapboxgl from 'mapbox-gl';

import { Feature } from '@customTypes/feature';

import { isDistrictLayerVisible } from './hook/useDistrictLayer/districtActions';
import { isStateLayerVisible, cleanStateActions, fitStateBounds } from './hook/useStateLayer/stateActions';

import * as Styles from './styles';

interface Props {
  regionName: string;
  reference: mapboxgl.Map;
  feature: Feature;
}

export default function ClickablePopup({ regionName, reference, feature }: Props) {
  const handlePopupCkick = () => {
    isStateLayerVisible(reference, false);
    isDistrictLayerVisible(reference, true);
    fitStateBounds(feature, reference);
    cleanStateActions();
  };

  return (
    <Styles.teste
      onClick={() => {
        handlePopupCkick();
      }}
    >
      {regionName}
    </Styles.teste>
  );
}
