import React from 'react';
import mapboxgl from 'mapbox-gl';

import { State } from '@customTypes/feature';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { isDistrictLayerVisible } from './hook/useDistrictLayer/districtActions';
import { isStateLayerVisible, cleanStateActions, fitStateBounds } from './hook/useStateLayer/stateActions';

import * as Styles from './styles';
interface Props {
  regionName: string;
  reference: mapboxgl.Map;
  feature: State;
}

export default function ClickablePopup({ regionName, reference, feature }: Props) {
  const handlePopupCkick = () => {
    isStateLayerVisible(reference, false);
    isDistrictLayerVisible(reference, true);
    fitStateBounds(feature, reference);
    cleanStateActions();
  };

  return (
    <Styles.Popup>
      <Styles.ClickableSection
        onClick={() => {
          handlePopupCkick();
        }}
      >
        {regionName}
        <ChevronRightIcon viewBox="-5 -3 30 30 " />
      </Styles.ClickableSection>
      <h5>População: {feature.properties?.POPULATION}</h5>
    </Styles.Popup>
  );
}
