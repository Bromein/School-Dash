import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../App";
import LogIn from "./LogIn";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";

import { GlobalStyle } from "../styles/GlobalStyle";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <PrivateRoute exact path="/" component={App} />
        <Route exact path="/login" component={LogIn} />
        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
