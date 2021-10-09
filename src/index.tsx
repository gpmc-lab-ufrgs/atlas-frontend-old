import React from 'react';
import ReactDOM from 'react-dom';
import Route from './route';
import './index.css';
import { MapLayerProvider, FeaturesProvider, CollapsibleProvider, SidebarProvider } from "./store"

ReactDOM.render(
  <React.StrictMode>
    <FeaturesProvider>
      <SidebarProvider>
        <CollapsibleProvider>
          <MapLayerProvider>
            <Route />
          </MapLayerProvider>
        </CollapsibleProvider>
      </SidebarProvider>
    </FeaturesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

