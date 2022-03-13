import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Main from "@pages/Main";

import {
  StatesProvider,
  FeaturesProvider,
  SidebarProvider,
  ComparisonProvider,
} from "./store";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FeaturesProvider>
        <StatesProvider>
          <ComparisonProvider>
            <SidebarProvider>
              <Main />
            </SidebarProvider>
          </ComparisonProvider>
        </StatesProvider>
      </FeaturesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
