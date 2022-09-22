import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { useComparison } from '@store/comparisonContext';
import { ComparisonProvider } from '@store/comparisonContext';
import geosesData from '@data/Data.json';
import districtProps from '@config/district';

import ComparisonModeComponent from '@components/ComparisonMode';
// import GridMode from '@components/ComparisonMode/GridMode';

type GeosesDataObjectKey = keyof typeof geosesData;

const comparisonDistrictMock = [
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
  },
];

const ComparisonMode = () => {
  const { addComparisonDistrict } = useComparison();

  React.useEffect(() => {
    addComparisonDistrict(comparisonDistrictMock);
  }, []);

  return <ComparisonModeComponent comparisonType="grid" />;
};

describe('Grid Mode', () => {
  test('Test comparison data', () => {
    const { getAllByText } = render(
      <ComparisonProvider>
        <ComparisonMode />
      </ComparisonProvider>,
    );

    const munName = getAllByText('Acrelândia');

    expect(munName).toBeTruthy;
  });


  test('Test section data', () => {
    const { getAllByText } = render(
      <ComparisonProvider>
        <ComparisonMode />
      </ComparisonProvider>,
    );

    districtProps.forEach((item) => {
      item.content.forEach((contentItem) => {
        const key = '1200013' as GeosesDataObjectKey;

        const data = geosesData[key];
        const rawValue = data[contentItem.label];
        const value = contentItem.format(rawValue);

        const renderedValue = getAllByText(value);

        expect(renderedValue).toBeTruthy;
      });
    });
  });
});
