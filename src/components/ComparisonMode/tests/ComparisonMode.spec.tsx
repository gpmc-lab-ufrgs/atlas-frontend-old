import { screen } from '@testing-library/react';

import ComparisonMode from '@components/ComparisonMode';

import { render } from '@tests/helpers/render';

import { scenarios } from './mock';

describe('<ComparisonMode />', () => {
  describe('<TableMode />', () => {
    test('should render comparison data', () => {
      render(<ComparisonMode comparisonType="table" />, {
        comparisonMock: scenarios.comparisonMock,
      });

      screen.getByText('Acrelândia');
      screen.getByText('Demográfica (D)');
      screen.getByText('Dimensão de educação (%) - GeoSES');
    });
  });
});
