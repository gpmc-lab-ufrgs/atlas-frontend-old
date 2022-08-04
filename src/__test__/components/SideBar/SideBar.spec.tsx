import React from 'react';
import { render, screen } from '@testing-library/react';

import { SidebarProvider, useSidebar } from '@store/sidebarContext';
import { ComparisonProvider } from '@store/comparisonContext';
import { SelectedDistrictProvider } from '@store/district/selectedContext';

import Sidebar from '@components/Sidebar';


describe('Sidebar', () => {
    jest.mock('@store/sidebarContext', () => ({
        useSidebar: jest.fn().mockImplementation(() => (
            { isSidebarOpen: true, setIsSidebarOpen: jest.fn().mockReturnValue(true) }
        ))
    }))
    // jest.spyOn(SidebarProvider, 'useSidebar').mockImplementation(() => (
    //     { isSidebarOpen: true, setIsSidebarOpen: jest.fn() }
    // ))
    // const mockUseSideBar = useSidebar as jest.MockedFunction<typeof useSidebar>
    // mockUseSideBar.mockImplementation(() => (
    //     { isSidebarOpen: true, setIsSidebarOpen: jest.fn() }
    // ))

    test ('Teste main Title', async () => {



        render(
            <SelectedDistrictProvider>
                <ComparisonProvider>
                    <SidebarProvider>
                        <Sidebar isComparisonMode={false} title="Atlas" />
                    </SidebarProvider>
                </ComparisonProvider>
            </SelectedDistrictProvider>
        );

        await screen.findByText('Atlas de Oportunidades');


    });
});