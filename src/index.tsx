import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MovieProvider } from "./contexts/MovieContext";
import { PurchaseProvider } from "./contexts/PurchaseContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MovieProvider>
      <PurchaseProvider>
        <App />
      </PurchaseProvider>
    </MovieProvider>
  </React.StrictMode>
);
