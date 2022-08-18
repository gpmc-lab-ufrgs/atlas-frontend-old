import React from 'react';
import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import InformationsBar from '.';

describe('Informations Bar', () => {
    test('Should be able to render the Informations Bar component', () => {
        render(<InformationsBar />);
        const titleText = screen.getByText('Atlas Of Opportunity') as HTMLElement;
        expect(titleText.textContent).toContain('Atlas Of Opportunity');
    });
    
    test('Should be able to render the Cloropeth Legend component', () => {
        render(<InformationsBar />);
        const titleText = screen.getByText('População') as HTMLElement;
        expect(titleText.textContent).toContain('População');
    });
});