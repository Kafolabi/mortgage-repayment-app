/**
 * @fileoverview Entry point for the mortgage repayment app.
 * This file sets up the React application by rendering the root component.
 *
 * @module main
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
