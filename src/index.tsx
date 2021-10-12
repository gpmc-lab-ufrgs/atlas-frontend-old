import React from 'react';
import ReactDOM from 'react-dom';
import Route from './route';
import './index.css';
import { MapLayerProvider, FeaturesProvider, CollapsibleProvider, SidebarProvider, ComparisonProvider } from "./store"

ReactDOM.render(
  <React.StrictMode>
    <FeaturesProvider>
      <ComparisonProvider>
        <SidebarProvider>
          <CollapsibleProvider>
            <MapLayerProvider>
              <Route />
            </MapLayerProvider>
          </CollapsibleProvider>
        </SidebarProvider>
      </ComparisonProvider> 
    </FeaturesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

