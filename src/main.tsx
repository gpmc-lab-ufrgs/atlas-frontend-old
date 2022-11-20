import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Main from '@pages/Main';

import AtlasTheme from '@components/Theme';

import { SidebarProvider } from '@context/sidebarContext';
import { ComparisonProvider } from '@context/comparisonContext';
import { SelectedStatesProvider } from '@context/state/selectedContext';
import { SelectedDistrictProvider } from '@context/district/selectedContext';
import { HighlightedStatesProvider } from '@context/state/highlightedContext';
import { HighlightedDistrictProvider } from '@context/district/highlightedContext';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AtlasTheme>
        <HighlightedDistrictProvider>
          <SelectedDistrictProvider>
            <SelectedStatesProvider>
              <HighlightedStatesProvider>
                <ComparisonProvider>
                  <SidebarProvider>
                    <Main />
                  </SidebarProvider>
                </ComparisonProvider>
              </HighlightedStatesProvider>
            </SelectedStatesProvider>
          </SelectedDistrictProvider>
        </HighlightedDistrictProvider>
      </AtlasTheme>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
