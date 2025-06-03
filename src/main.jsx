import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import DataProvider from "./Components/DataProvider/DataProvider";
import { initialState, reducer } from "./Utility/reducer";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <DataProvider reducer={reducer} initialState={initialState}>
        <App />
      </DataProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found!");
}
