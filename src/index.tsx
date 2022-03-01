import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Main } from "./pages"
import { StatesProvider, MapLayerProvider, FeaturesProvider, CollapsibleProvider, SidebarProvider, ComparisonProvider, HamburgerMenuProvider } from "./store"
import './index.css';
import { Footer } from './components';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FeaturesProvider>
        <StatesProvider>
          <ComparisonProvider>
            <HamburgerMenuProvider>
              <SidebarProvider>
                <CollapsibleProvider>
                  <MapLayerProvider>
                    <Main />
                    <Footer />
                  </MapLayerProvider>
                </CollapsibleProvider>
              </SidebarProvider>
            </HamburgerMenuProvider>
          </ComparisonProvider>
        </StatesProvider>
      </FeaturesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

