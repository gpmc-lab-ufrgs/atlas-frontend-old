import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { useComparison } from '@store/comparisonContext';
import { ComparisonProvider } from '@store/comparisonContext';

import ComparisonModeComponent from '@components/ComparisonMode';

const ComparisonMode = () => {
  const { addComparisonDistrict } = useComparison();

  React.useEffect(() => {
    addComparisonDistrict([
     {
        type: '',
        _geometry: {
          type: '',
          coordinates: [[[]]],
        },
        geometry: {
          type: '',
          coordinates: [[[]]],
        },
        properties: {
          CD_MUN: 1200013,
          NM_MUN: 'Acrelândia',
          SIGLA_UF: 'RS',
          AREA_KM2: 1811.613,
        },
      }
    ]);
  }, []);

  return (
    <ComparisonModeComponent comparisonType='table' />
  );
};

describe('Table Mode', () => {
  test('Test comparison data',  () => {
    const { getByText } = render(
        <ComparisonProvider>
          <ComparisonMode />
        </ComparisonProvider>
    );

    const district = getByText('Acrelândia');

    expect(district).toBeTruthy;
  });

  // test('Test comparison data',  () => {
  // });

  // test('Test information display',  () => {
  // });
});
