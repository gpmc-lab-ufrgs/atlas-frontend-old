import React from 'react';
import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import { SummaryCard } from '.';
import { Container, Title, Text } from './styles'

describe('Summary Card', () => {
    test('Test the Container component style in Summary Card', () => {
        const { container: container } = render(<Container />);
        expect(container.firstChild).toHaveStyleRule('top', '150px');
        expect(container.firstChild).toHaveStyleRule('position', 'fixed');
        expect(container.firstChild).toHaveStyleRule('font-size', '14px');
        expect(container.firstChild).toHaveStyleRule('width', '305px');
        expect(container.firstChild).toHaveStyleRule('display', 'flex');
        expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
        expect(container.firstChild).toHaveStyleRule('border-radius', '5px !important');
    });

    test('Test the contains of Summary Card', () => {
        render(<SummaryCard />);
        const titleText = screen.getByText('Atlas Of Opportunity') as HTMLElement;
        expect(titleText.textContent).toContain('Atlas Of Opportunity');
    });

    test('Test the Title component style in Choropleth Legend', () => {
        const { container: title } = render(<Title />);
        expect(title.firstChild).toHaveStyleRule('margin', '0px');
    });

    test('Test the Text component style in Choropleth Legend', () => {
        const { container: text } = render(<Text />);
        expect(text.firstChild).toHaveStyleRule('line-height', '150%');
        expect(text.firstChild).toHaveStyleRule('color', '#1f3349');
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