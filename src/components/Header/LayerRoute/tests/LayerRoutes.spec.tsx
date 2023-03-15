import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render } from '@tests/helpers/render';

import LayerRoute from '../LayerRoute';
import { scenarios } from './mock';

describe('Layer Route', () => {
  test('should render district layer', () => {
    render(<LayerRoute />, {
      stateSelectedMock: scenarios.state,
      districtSelectedMock: scenarios.district,
    });

    screen.getByText('Goiânia');
    screen.getByText('Goiás');
  });

  test('should render country layer', () => {
    render(<LayerRoute />);

    screen.getByText('Brasil');
  });

  test('should reset when clicking routes', async () => {
    render(<LayerRoute />, {
      stateSelectedMock: scenarios.state,
    });

    screen.getByText('Goiás');
    const country = screen.getByText('Brasil');

    await userEvent.click(country);
  });
});
