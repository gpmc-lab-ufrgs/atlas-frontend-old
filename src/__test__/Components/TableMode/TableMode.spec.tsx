import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TableMode from '@components/ComparisonMode/TableMode';

describe('Table Mode', () => {
  test('Test title',  () => {
    const { getByText } = render(
      <TableMode comparison = {[]} />
    );
    const title = getByText('Demográfica (D)');
    expect(title).toBeTruthy;
  });

  test('Test subtitle ',  () => {
    const { getByText } = render(
      <TableMode comparison = {[]} />
    );
    const subtitle = getByText('Número de mortes observadas por causas evitáveis de 5 a 74 anos (2013 a 2017) - GeoSES');
    expect(subtitle).toBeTruthy;
  });

  test('Test subtitle ',  () => {
    const { getByText } = render(
      <TableMode comparison = {[]} />
    );
    const subtitle = getByText('Número de mortes esperadas para a distribuição da população de acordo com sexo e grupos de labelade - GeoSES');
    expect(subtitle).toBeTruthy;
  });

  test('Test button click ',  () => {
    const { getByText } = render(
      <TableMode comparison = {[]} />
    );
    const button = getByText('Demográfica (D)');
    fireEvent.click(button);
    const subtitle = getByText('Número de mortes observadas por causas evitáveis de 5 a 74 anos (2013 a 2017) - GeoSES');
    expect(subtitle).toBeFalsy;
  });
});