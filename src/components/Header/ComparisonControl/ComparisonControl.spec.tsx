import React from 'react';
import { render, screen } from '@testing-library/react';
import ComparisonControl from './ComparisonControl';

describe('ComparisonControl', () => {
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

});