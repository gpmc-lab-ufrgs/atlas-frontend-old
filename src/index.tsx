import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Main from "@pages/Main";

import { FeaturesProvider, SidebarProvider, ComparisonProvider } from "./store";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FeaturesProvider>
        <ComparisonProvider>
          <SidebarProvider>
            <Main />
          </SidebarProvider>
        </ComparisonProvider>
      </FeaturesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
