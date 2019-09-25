import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <PrivateRoute exact path="/home" component={Home} />
    <PrivateRoute exact path="/product" component={Product} />
    <PrivateRoute exact path="/product/:id" component={Product} />
    <PrivateRoute exact path="/cart" component={Cart} />
  </Switch>
);
