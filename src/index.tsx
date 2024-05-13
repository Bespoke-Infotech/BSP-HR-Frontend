import React from "react";
import ReactDOM from "react-dom/client";
import Approuter from "./Routes/Approuter";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/line-awesome.min.css";
import "./assets/scss/main.scss";
import "./assets/css/material.css";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
  
root.render(<Approuter />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(consoleLog))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();