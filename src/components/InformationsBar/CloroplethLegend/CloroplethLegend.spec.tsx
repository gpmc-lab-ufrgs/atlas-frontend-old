import React from 'react';
import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import { CloroplethLegend } from '.';
import { Container, Title, Legend, GradientBar } from './styles';

describe('CloroplethLegend', () => {

    test('Test the Container component style in Choropleth Legend', () => {
        const { container: container } = render(<Container />);
        expect(container.firstChild).toHaveStyleRule('bottom', '100px');
        expect(container.firstChild).toHaveStyleRule('position', 'fixed');
        expect(container.firstChild).toHaveStyleRule('font-size', '14px');
        expect(container.firstChild).toHaveStyleRule('width', '305px');
        expect(container.firstChild).toHaveStyleRule('display', 'flex');
        expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
        expect(container.firstChild).toHaveStyleRule('border-radius', '5px !important');
    });

    test('Test the title of Choropletic Legend', () => {
        render(<CloroplethLegend />);
        const titleText = screen.getByText('População') as HTMLElement;
        expect(titleText.textContent).toContain('População');
    });

    test('Test the contains of Choropletic Legend', () => {
        render(<CloroplethLegend />);
        const legendText = screen.getByText('Baixa') as HTMLElement;
        expect(legendText.textContent).toContain('Baixa');
    });

    test('Test the Legend component style in Choropleth Legend', () => {
        const { container: legend } = render(<Legend />);
        expect(legend.firstChild).toHaveStyleRule('margin', '0px');
        expect(legend.firstChild).toHaveStyleRule('margin-top', '10px');
        expect(legend.firstChild).toHaveStyleRule('font-size', '11px');
        expect(legend.firstChild).toHaveStyleRule('font-weight', '500');
    });

    test('Test the contains of Choropletic Legend', () => {
        render(<CloroplethLegend />);
        const legendText = screen.getByText('Alta') as HTMLElement;
        expect(legendText.textContent).toContain('Alta');
    });

    test('Test the Title component style in Choropleth Legend', () => {
        const { container: title } = render(<Title />);
        expect(title.firstChild).toHaveStyleRule('margin', '0px');
    });

    test('Test the gradient bar render', () => {
        const { container: gradientBar } = render(<GradientBar />);
        expect(gradientBar.firstChild).toHaveStyleRule('width', '100%');
        expect(gradientBar.firstChild).toHaveStyleRule('height', '25px');
        expect(gradientBar.firstChild).toHaveStyleRule('margin-top', '20px');
        expect(gradientBar.firstChild).toHaveStyleRule('border-radius', '5px');
    });

});