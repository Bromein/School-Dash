import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Store from "./context/Store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Store>
      <App />
    </Store>
  </Router>,
  document.getElementById("root")
);
serviceWorker.register();
