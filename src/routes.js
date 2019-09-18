import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
export default () => (
  <Switch>
    <Route exact="/" component={Login} />
  </Switch>
);
