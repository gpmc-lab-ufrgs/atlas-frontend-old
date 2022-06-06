import React from 'react';

import { isDistrictLayerVisible } from './hook/useDistrictLayer/districtActions';
import { isStateLayerVisible, cleanStateActions, fitStateBounds } from './hook/useStateLayer/stateActions';

import * as Styles from './styles';

export default function ClickablePopup({ regionName, reference, feature }: any) {
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
