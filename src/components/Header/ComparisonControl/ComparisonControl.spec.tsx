import React from 'react';
import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import ComparisonControl from './ComparisonControl';
import { ComparisonControlContainer, Control } from './styles';

describe('ComparisonControl', () => {
    test('Test the Container component style in Comparison Control', () => {
        const { container: comparisonControlContainer } = render(<ComparisonControlContainer />);
        expect(comparisonControlContainer.firstChild).toHaveStyleRule('width', '170px');
        expect(comparisonControlContainer.firstChild).toHaveStyleRule('display', 'flex');
        expect(comparisonControlContainer.firstChild).toHaveStyleRule('pointer-events', 'auto');
    });

    test('Test the Control component style in Comparison Control', () => {
        const { container: control } = render(<Control isControlType={true} />);

        expect(control.firstChild).toHaveStyleRule('flex', '1 0 0');
        expect(control.firstChild).toHaveStyleRule('display', 'flex');
        expect(control.firstChild).toHaveStyleRule('justify-content', 'center');
        expect(control.firstChild).toHaveStyleRule('align-items', 'center');
        expect(control.firstChild).toHaveStyleRule('border-color', '#999999');
        expect(control.firstChild).toHaveStyleRule('border-style', 'solid');
        expect(control.firstChild).toHaveStyleRule('border-width', '1px 1px 1px 0px');
        expect(control.firstChild).toHaveStyleRule('cursor', 'pointer');
        expect(control.firstChild).toHaveStyleRule('font-size', '14px');
        expect(control.firstChild).toHaveStyleRule('line-height', '34px');
        expect(control.firstChild).toHaveStyleRule('color', '#ffffff');
        expect(control.firstChild).toHaveStyleRule('background-color', '#666666');
    });

    test('Should be able to render the ComparisonControl component with not comparisonType', () => {
        render(<ComparisonControl comparisonType='' setComparison={() => { }} />)

        expect(screen.getByText('Table')).toBeTruthy();
        expect(screen.getByText('Grid')).toBeTruthy();
    });

    test('Should be able to render the ComparisonControl component with grid comparisonType', () => {
        render(<ComparisonControl comparisonType='grid' setComparison={() => { }} />);

        expect(screen.getByText('Table')).toBeTruthy();
        expect(screen.getByText('Grid')).toBeTruthy();
    });

    test('Should be able to render the ComparisonControl component with table comparisonType', () => {
        render(<ComparisonControl comparisonType='table' setComparison={() => { }} />);

        expect(screen.getByText('Table')).toBeTruthy();
        expect(screen.getByText('Grid')).toBeTruthy();
    });

    test('Should be able to render the ComparisonControl component with the comparisonType table the comparison with the string "São Paulo"', () => {
        render(<ComparisonControl comparisonType='table' setComparison={() => { 'São Paulo' }} />);

        expect(screen.getByText('Table')).toBeTruthy();
        expect(screen.findAllByAltText('São Paulo')).toBeTruthy();
    });
});