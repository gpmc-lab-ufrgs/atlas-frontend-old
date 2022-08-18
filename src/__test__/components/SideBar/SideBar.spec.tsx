import React from 'react';
import { render } from '@testing-library/react';
import { sidebarContext } from '@store/sidebarContext';
import { comparisonContext } from '@store/comparisonContext';
import { selectedDistrictsContext } from '@store/district/selectedContext';
import { BrowserRouter } from 'react-router-dom';
import {
    districtMock,
    districtMockFalse,
    comparisonMock,
    comparisonMockFalse,
    sidebarOpenMock
} from './mockData';

import Sidebar from '@components/Sidebar';


describe('Sidebar', () => {
    test('Teste main Title without district selected and comparison', async () => {
        const { findByText } = render(
            <BrowserRouter>
                <selectedDistrictsContext.Provider value={districtMockFalse}>
                    <comparisonContext.Provider value={comparisonMockFalse}>
                        <sidebarContext.Provider value={sidebarOpenMock}>
                            <Sidebar isComparisonMode={false} title="Atlas" />
                        </sidebarContext.Provider>
                    </comparisonContext.Provider>
                </selectedDistrictsContext.Provider>
            </BrowserRouter>
        );

        expect(await findByText('Atlas de Oportunidades')).toBeTruthy();
    });

    test('Teste Sidebar with district selected without comparison', async () => {
        const { findByText } = render(
            <BrowserRouter>
                <selectedDistrictsContext.Provider value={districtMock}>
                    <comparisonContext.Provider value={comparisonMockFalse}>
                        <sidebarContext.Provider value={sidebarOpenMock}>
                            <Sidebar isComparisonMode={false} title="Atlas" />
                        </sidebarContext.Provider>
                    </comparisonContext.Provider>
                </selectedDistrictsContext.Provider>
            </BrowserRouter>
        );

        expect(await findByText('Atlas')).toBeTruthy();
        expect(await findByText('Adicionar a comparação')).toBeTruthy();
        expect(await findByText('Demográfica (D)')).toBeTruthy();
        expect(await findByText('Número de mortes observadas por causas evitáveis')).toBeTruthy();
        expect(await findByText('Número de mortes esperadas')).toBeTruthy();
    });

    test('Teste Sidebar with comparison and district selected', async () => {
        const { findByText } = render(
            <BrowserRouter>
                <selectedDistrictsContext.Provider value={districtMock}>
                    <comparisonContext.Provider value={comparisonMock}>
                        <sidebarContext.Provider value={sidebarOpenMock}>
                            <Sidebar isComparisonMode={false} title="Atlas" />
                        </sidebarContext.Provider>
                    </comparisonContext.Provider>
                </selectedDistrictsContext.Provider>
            </BrowserRouter>
        );

        expect(await findByText('Atlas')).toBeTruthy();
        expect(await findByText('Remover da comparação')).toBeTruthy();
        expect(await findByText('Comparação')).toBeTruthy();
        expect(await findByText('Mostrar comparação')).toBeTruthy();
    });
});
