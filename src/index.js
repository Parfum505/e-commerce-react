import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/e-commerce-react">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
