import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/fonts/fonts.css";
import "./index.css";
import "./animations/Loading.css";
import "./animations/Fader.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
