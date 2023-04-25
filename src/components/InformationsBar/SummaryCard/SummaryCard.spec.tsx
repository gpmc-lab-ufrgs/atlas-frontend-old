import { render, screen } from '@testing-library/react';

import { SummaryCard } from '.';

describe('Summary Card', () => {
  test('should render the content of Summary Card', () => {
    render(<SummaryCard />);
    screen.getByText('Atlas de Oportunidades');
    screen.getByText(
      'O Atlas de Oportunidade é um projeto que tem o objetivo de ajudar na identificação, mensuração e classificação de necessidades humanas não satisfeitas, estimação de potencial de mercado, previsão de demanda e identificação de oportunidades de negócio em larga escala.',
    );
  });

  test('should render the button of Summary Card', () => {
    render(<SummaryCard />);
    const buttonElement = screen.getByRole('button', { name: 'more-button' });
    expect(buttonElement.textContent).toContain('Saiba mais...');
  });
});
