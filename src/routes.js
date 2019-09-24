import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
export default () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/product" component={Product} />
    <Route exact path="/product/:id" component={Product} />
  </Switch>
);
