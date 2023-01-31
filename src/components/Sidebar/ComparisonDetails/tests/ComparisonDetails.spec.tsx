import { fireEvent, screen } from '@testing-library/react';

import ComparisonDetails from '@components/Sidebar/ComparisonDetails';

import { render } from '@tests/helpers/render';

import { scenarios } from './mock';

describe('ComparisonDetails', () => {
  test('should render comparison details', () => {
    const { container } = render(<ComparisonDetails />, {
      comparisonMock: scenarios.comparisonMock,
    });

    const backButton: any = container.querySelector('[data-id="btn_back_button"]');
    const heading = screen.getByRole('heading', { name: 'Comparando Regiões' });
    const buttonText = screen.getByText('Comparação');
    const removeButton: any = container.querySelector('[data-id="btn_remove_button"]');
    const details = screen.getByText('Acrelândia');

    fireEvent.click(removeButton);

    expect(backButton).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
    expect(details).toBeInTheDocument();

    fireEvent.click(backButton);
  });
});
