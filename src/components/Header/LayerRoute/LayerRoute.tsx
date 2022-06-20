import React, { useEffect, useState } from 'react';

import useMap from '@hook/useMap';
import { useSelectedState } from '@store/state/selectedContext';
import { useSelectedDistrict } from '@store/district/selectedContext';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import * as Styles from './styles';

const LayerRoute = () => {
  const [selectedLayer, setSelectedLayer] = useState('country');

  const { resetMapValues, resetDistrictValues } = useMap();
  const { selected: selectedState } = useSelectedState();
  const { selected } = useSelectedDistrict();

  useEffect(() => {
    if (selected) {
      setSelectedLayer('district');
    } else if (selectedState && !selected) {
      setSelectedLayer('state');
    } else {
      setSelectedLayer('country');
    }
  }, [selected, selectedState]);

  const returnPath = () => {
    if (selectedLayer === 'district') {
      return (
        <>
          &nbsp;-&nbsp;
          <div className="state" onClick={() => resetDistrictValues()}>
            {selectedState?.properties.NM_UF}
          </div>
          &nbsp;-&nbsp;<div className="district">{selected?.properties.NM_MUN}</div>
        </>
      );
    } else if (selectedLayer === 'state') {
      return (
        <>
          &nbsp;-&nbsp;
          <div className="state" onClick={() => resetDistrictValues()}>
            {selectedState?.properties.NM_UF}
          </div>
        </>
      );
    }
  };

  const returnToPreviousLayer = () => {
    if (selectedLayer === 'district') {
      resetDistrictValues();
    } else if (selectedLayer === 'state') {
      resetMapValues();
    }
  };

  const returnPathButton = () => {
    if (selectedLayer !== 'country') {
      return (
        <Styles.ReturnRouteButton onClick={() => returnToPreviousLayer()}>
          <ChevronLeftIcon sx={{ color: 'black' }} />
        </Styles.ReturnRouteButton>
      );
    }
  };

  return (
    <Styles.ReturnRoute selectedLayer={selectedLayer}>
      {returnPathButton()}
      <div className="country" onClick={() => resetMapValues()}>
        Brasil
      </div>
      {returnPath()}
    </Styles.ReturnRoute>
  );
};

export default LayerRoute;
