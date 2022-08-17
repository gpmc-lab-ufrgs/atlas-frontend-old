import React from 'react';
import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import { SummaryCard } from '.';

describe('InformationsBar', () => {
    /* ********** Summary Button Component  ********** */
    test('Test the contains of Summary Card', () => {
        render(<SummaryCard />);
        const titleText = screen.getByText('Atlas Of Opportunity') as HTMLElement;
        expect(titleText.textContent).toContain('Atlas Of Opportunity');
    });

    test('Test the contains of Summary Card', () => {
        render(<SummaryCard />);
        const summaryText = screen.getByText('O Atlas de Oportunidade é um projeto que tem o objetivo de ajudar na identificação, mensuração e classificação de necessidades humanas não satisfeitas, estimação de potencial de mercado, previsão de demanda e identificação de oportunidades de negócio em larga escala.') as HTMLElement;
        expect(summaryText.textContent).toContain('O Atlas de Oportunidade é um projeto que tem o objetivo de ajudar na identificação, mensuração e classificação de necessidades humanas não satisfeitas, estimação de potencial de mercado, previsão de demanda e identificação de oportunidades de negócio em larga escala.');
    });

    test('Test the contains of Summary Card', () => {
        render(<SummaryCard />);
        const buttonElement = screen.getByRole('button') as HTMLElement;
        expect(buttonElement.textContent).toContain('Saiba mais...');
    });
});