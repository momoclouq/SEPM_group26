import React from "react";
import ReactDOM from "react-dom";

//pages
import App from "./app";
//react router
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
