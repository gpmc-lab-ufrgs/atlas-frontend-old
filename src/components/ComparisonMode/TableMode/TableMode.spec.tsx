import React from 'react';
import { render } from '@testing-library/react';
import TableMode from '@components/ComparisonMode/TableMode';
import { BrowserRouter } from 'react-router-dom';

describe('Table Mode', () => {
  test('Test title',  () => {
    const { getByText } = render(
      <BrowserRouter>
        <TableMode comparison = {[]} />
      </BrowserRouter>
    );
    const title = getByText('Demográfica (D)');
    expect(title).toBeTruthy;
  });
});