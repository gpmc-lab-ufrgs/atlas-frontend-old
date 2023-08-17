import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import Main from '@pages/Main';

import AtlasTheme from '@components/Theme';

import { SidebarProvider } from '@context/sidebarContext';
import { ComparisonProvider } from '@context/comparisonContext';
import { ComparisonProviderState } from '@context/comparisonContextState';
import { SelectedStatesProvider } from '@context/state/selectedContext';
import { SelectedDistrictProvider } from '@context/district/selectedContext';
import { HighlightedStatesProvider } from '@context/state/highlightedContext';
import { HighlightedDistrictProvider } from '@context/district/highlightedContext';

import './index.css';

const container = document.getElementById('root') as Element;
const root = createRoot(container);

const mount = root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AtlasTheme>
        <HighlightedDistrictProvider>
          <SelectedDistrictProvider>
            <SelectedStatesProvider>
              <HighlightedStatesProvider>
                <ComparisonProvider>
                <ComparisonProviderState>
                  <SidebarProvider>
                    <Main />
                  </SidebarProvider>
                </ComparisonProviderState>
                </ComparisonProvider>
              </HighlightedStatesProvider>
            </SelectedStatesProvider>
          </SelectedDistrictProvider>
        </HighlightedDistrictProvider>
      </AtlasTheme>
    </BrowserRouter>
  </React.StrictMode>,
);

export { mount };
