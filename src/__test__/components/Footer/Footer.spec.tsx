import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@components/Footer';

describe('Footer', () => {
  // test('Test footer srcs', () => {
  //   render(<Footer/>);
  //   const logo = screen.getByRole('img');
  //   expect(logo).toHaveAttribute('src', '/logo.svg');
  //   expect(logo).toHaveAttribute('alt', 'Logo');
  // });

  test('Test whether Footer contains "Apoio:"', () => {
    const { getByText } = render(<Footer />);
    const apoio = getByText('Apoio:');
    expect(apoio).toBeTruthy;
  });
});
