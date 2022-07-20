import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@components/Footer';

test('renders the landing page', () => {
  render(<Footer />);
});
