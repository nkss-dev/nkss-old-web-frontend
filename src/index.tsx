import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.scss";
import App from "./App";

axios.defaults.baseURL = `https://api.nksss.live`;
axios.defaults.headers.post["Content-Type"] = "application/vnd.api+json";
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
