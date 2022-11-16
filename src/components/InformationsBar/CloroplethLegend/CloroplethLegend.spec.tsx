import { render, screen } from '@testing-library/react';

import { CloroplethLegend } from '.';

describe('CloroplethLegend', () => {
  test('should render the of Choropletic Legend texts', () => {
    render(<CloroplethLegend />);

    screen.getByText('População');
    screen.getByText('Baixa');
    screen.getByText('Alta');
  });
});
