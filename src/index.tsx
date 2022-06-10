import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PurchaseProvider } from "./contexts/PurchaseContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PurchaseProvider>
      <App />
    </PurchaseProvider>
  </React.StrictMode>
);
