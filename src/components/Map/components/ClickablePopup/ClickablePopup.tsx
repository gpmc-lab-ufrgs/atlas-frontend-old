import React from 'react';
import mapboxgl from 'mapbox-gl';

import { State } from '@customTypes/state';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { formatPopulationNumber } from '@utils/formatValue';

import { isDistrictLayerVisible } from '../../hook/useDistrictLayer/districtActions';
import { isStateLayerVisible, cleanStateActions, fitStateBounds } from '../../hook/useStateLayer/stateActions';

import * as Styles from './styles';
import { StickyNote2Sharp } from '@mui/icons-material';
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
        <Styles.PopupText>{regionName}</Styles.PopupText>
        <Styles.IconWrapper className="iconAction">
          <ChevronRightIcon fontSize="small" />
        </Styles.IconWrapper>
      </Styles.ClickableSection>

      <Styles.PopupContent>
        <Styles.PopupText>População: {formatPopulationNumber(feature.properties?.POPULATION)}</Styles.PopupText>
      </Styles.PopupContent>
    </Styles.Popup>
  );
}
