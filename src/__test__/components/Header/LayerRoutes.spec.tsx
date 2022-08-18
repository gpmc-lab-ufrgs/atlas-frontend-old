import React, { useEffect, useRef, useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import useMap from '@hook/useMap';
import * as Styles from '@components/Header/LayerRoute/styles';
import { Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const DistrictLayerRoute = () => {
  const [selectedLayer, setSelectedLayer] = useState('country');

  const selectedState = 'Goiás';
  const selected = 'Goiânia';
  const { resetMapValues, resetDistrictValues } = useMap();

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
          <Styles.NextLayer>-</Styles.NextLayer>
          <Button className="place state" onClick={() => resetDistrictValues()}>
            {selectedState}
          </Button>
          <Styles.NextLayer>-</Styles.NextLayer>
          <Button className="place district">{selected}</Button>
        </>
      );
    } else if (selectedLayer === 'state') {
      return (
        <>
          <Styles.NextLayer>-</Styles.NextLayer>
          <Button className="place state" onClick={() => resetDistrictValues()}>
            {selectedState}
          </Button>
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
      <Button className="place country" onClick={() => resetMapValues()}>
        Brasil
      </Button>
      {returnPath()}
    </Styles.ReturnRoute>
  );
};

const StateLayerRoute = () => {
  const [selectedLayer, setSelectedLayer] = useState('country');

  const selectedState = 'Goiás';
  const selected = '';
  const { resetMapValues, resetDistrictValues } = useMap();

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
          <Styles.NextLayer>-</Styles.NextLayer>
          <Button className="place state" onClick={() => resetDistrictValues()}>
            {selectedState}
          </Button>
          <Styles.NextLayer>-</Styles.NextLayer>
          <Button className="place district">{selected}</Button>
        </>
      );
    } else if (selectedLayer === 'state') {
      return (
        <>
          <Styles.NextLayer>-</Styles.NextLayer>
          <Button className="place state" onClick={() => resetDistrictValues()}>
            {selectedState}
          </Button>
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
      <Button className="place country" onClick={() => resetMapValues()}>
        Brasil
      </Button>
      {returnPath()}
    </Styles.ReturnRoute>
  );
};

const CountryLayerRoute = () => {
  const [selectedLayer, setSelectedLayer] = useState('country');

  const selectedState = '';
  const selected = '';
  const { resetMapValues, resetDistrictValues } = useMap();

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
          <Styles.NextLayer>-</Styles.NextLayer>
          <Button className="place state" onClick={() => resetDistrictValues()}>
            {selectedState}
          </Button>
          <Styles.NextLayer>-</Styles.NextLayer>
          <Button className="place district">{selected}</Button>
        </>
      );
    } else if (selectedLayer === 'state') {
      return (
        <>
          <Styles.NextLayer>-</Styles.NextLayer>
          <Button className="place state" onClick={() => resetDistrictValues()}>
            {selectedState}
          </Button>
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
      <Button className="place country" onClick={() => resetMapValues()}>
        Brasil
      </Button>
      {returnPath()}
    </Styles.ReturnRoute>
  );
};

describe('Layer Route', () => {
  test('Test district layer',  () => {
    const { getByText } = render(
      <BrowserRouter>
        <DistrictLayerRoute />
      </BrowserRouter>
    );
    const district = getByText('Goiânia');
    expect(district).toBeTruthy;
  });

  test('Test state layer',  () => {
    const { getByText } = render(
      <BrowserRouter>
        <StateLayerRoute />
      </BrowserRouter>
    );
    const state = getByText('Goiás');
    expect(state).toBeTruthy;
  });

  test('Test country layer',  () => {
    const { getByText } = render(
      <BrowserRouter>
        <CountryLayerRoute />
      </BrowserRouter>
    );
    const country = getByText('Brasil');
    expect(country).toBeTruthy;
  });

  test('Test reset when clicking routes', async () => {
    const { getByText, getAllByRole } = render(
      <BrowserRouter>
        <DistrictLayerRoute />
      </BrowserRouter>
    );
    const state = getByText('Goiás');
    const country = getByText('Brasil');


    fireEvent(
      await country,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    const district = getAllByRole('button');

    console.log(district);
    expect(district).toBeTruthy();    
  });
});
