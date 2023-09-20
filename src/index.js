import React from "react";
// eslint-disable-next-line no-unused-vars
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import "./index.css";

import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);