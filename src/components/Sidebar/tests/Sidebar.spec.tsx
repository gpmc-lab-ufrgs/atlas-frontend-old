import { screen } from '@testing-library/react';

import { render } from '@tests/helpers/render';

import Sidebar from '@components/Sidebar';

import { scenarios } from './mock';

describe('Sidebar', () => {
  test('should render title without district selected and comparison', async () => {
    render(<Sidebar isComparisonMode={false} title="Atlas" />);

    await screen.findByText('Atlas de Oportunidades');
  });

  test('should render with district selected without comparison', async () => {
    render(<Sidebar isComparisonMode={false} title="Atlas" />, {
      districtSelectedMock: scenarios.districtMock,
    });

    await screen.findByText('Atlas');

    screen.getByText('Adicionar a comparação');
    screen.getByText('Demográfica (D)');
    screen.getByText('Número de mortes observadas por causas evitáveis');
    screen.getByText('Número de mortes esperadas');
  });

  test('should render with comparison and district selected', async () => {
    render(<Sidebar isComparisonMode={false} title="Atlas" />, {
      districtSelectedMock: scenarios.districtMock,
      comparisonMock: scenarios.comparisonMock,
    });

    screen.getByText('Atlas');
    screen.getByText('Remover da comparação');
    screen.getByText('Comparação');
    screen.getByText('Mostrar comparação');
  });
});
