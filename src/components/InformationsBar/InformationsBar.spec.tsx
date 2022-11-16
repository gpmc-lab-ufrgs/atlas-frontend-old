import { render, screen } from '@testing-library/react';

import InformationsBar from '.';

describe('Informations Bar', () => {
  test('should render the Informations Bar component', () => {
    render(<InformationsBar />);
    screen.getByText('Atlas Of Opportunity');
    screen.getByText('População');
  });
});
