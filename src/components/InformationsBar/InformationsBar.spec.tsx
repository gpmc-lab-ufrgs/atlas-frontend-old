import React from 'react';
import { render, screen } from '@testing-library/react';
import { CloroplethLegend } from './CloroplethLegend';
import { SummaryCard } from './SummaryCard';

describe('InformationsBar', () => {
    /* ********** Cloropleth Legend Component  ********** */
    test('Test the title of Choropletic Legend', () => {
        render(<CloroplethLegend />);
        const populacao = screen.getByText('População') as HTMLElement ;
        expect(populacao.textContent).toContain('População');
    });

    test('Test the contains of Choropletic Legend', () => {
        render(<CloroplethLegend />);
        const baixa = screen.getByText('Baixa') as HTMLElement;
        expect(baixa.textContent).toContain('Baixa');
    });

    test('Test the contains of Choropletic Legend', () => {
        render(<CloroplethLegend />);
        const alta = screen.getByText('Alta') as HTMLElement;
        expect(alta.textContent).toContain('Alta');
    });

    /* ********** Summary Button Component  ********** */
    test('Test if there is a button learn more', () => {
        render(<SummaryCard />);
        const buttonElement = screen.getByRole('button') as HTMLElement;
        expect(buttonElement.textContent).toContain('Saiba mais...');
    });
});