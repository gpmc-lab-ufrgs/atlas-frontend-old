import { render, screen } from '@testing-library/react';
import Footer from '@components/Footer';

describe('Footer', () => {
  test('should render footer images', () => {
    render(<Footer />);
    screen.getAllByRole('img', { name: 'institution-logo' });
  });

  test('Test whether Footer contains "Apoio:"', () => {
    const { getByText } = render(<Footer />);
    getByText('Apoio:');
  });
});
