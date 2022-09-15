import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import districtProps from '@config/district';
import { useComparison } from '@store/comparisonContext';
import { ComparisonProvider } from '@store/comparisonContext';
import geosesData from '@data/Data.json';

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

    const munName = getByText('Acrelândia');

    expect(munName).toBeTruthy;
  });

  test('Test section data',  () => {
    const { getAllByText } = render(
        <ComparisonProvider>
          <ComparisonMode />
        </ComparisonProvider>
    );

    districtProps.forEach((item) => {
      item.content.forEach((contentItem) => {
        const data = geosesData['1200013'];
        const rawValue = data[contentItem.label];
        const value = contentItem.format(rawValue);

        const renderedValue = getAllByText(value);

        expect(renderedValue).toBeTruthy;
      });
    });
  });

  // test('Test information display',  () => {
  // test('Test section data',  () => {
  //   const { getAllByText } = render(
  //       <ComparisonProvider>
  //         <ComparisonMode />
  //       </ComparisonProvider>
  //   );

  //   districtProps.forEach((item) => {
  //     expect(getByText(item.title)).toBeTruthy;
  //     item.content.forEach((contentItem) => {
  //       expect(getByText(contentItem.description)).toBeTruthy;
  //     });
  //   });
  // });
  // });
});
