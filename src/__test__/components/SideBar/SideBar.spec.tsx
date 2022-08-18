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
});
