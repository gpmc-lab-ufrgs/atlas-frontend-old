import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Main from '@pages/Main';

import AtlasTheme from '@components/Theme';

import { SidebarProvider } from '@store/sidebarContext';
import { ComparisonProvider } from '@store/comparisonContext';
import { SelectedStatesProvider } from '@store/state/selectedContext';
import { SelectedDistrictProvider } from '@store/district/selectedContext';
import { HighlightedStatesProvider } from '@store/state/highlightedContext';
import { HighlightedDistrictProvider } from '@store/district/highlightedContext';

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
