import React from 'react';
import ReactDOM from 'react-dom';
import Route from './route';
import './index.css';
import { MapLayerProvider } from "./store"

ReactDOM.render(
  <React.StrictMode>
    <MapLayerProvider>
      <Route />
    </MapLayerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

