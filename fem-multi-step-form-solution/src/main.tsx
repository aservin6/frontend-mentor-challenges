import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PlanContextProvider } from "./store/plan-context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PlanContextProvider>
        <App />
      </PlanContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
