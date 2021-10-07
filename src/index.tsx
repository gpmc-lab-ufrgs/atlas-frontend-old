import React from 'react';
import ReactDOM from 'react-dom';
import Route from './route';
import './index.css';
import { MapLayerProvider, FeaturesProvider } from "./store"

ReactDOM.render(
  <React.StrictMode>
    <FeaturesProvider>
      <MapLayerProvider>
        <Route />
      </MapLayerProvider>
    </FeaturesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

