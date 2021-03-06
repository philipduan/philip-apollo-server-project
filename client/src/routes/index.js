import React from "react";
import { Route, Switch } from "react-router";

import Home from "../pages/Home";
import Index from "../pages/Index";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import ProfileSettings from "../pages/Settings/Profile";

import PrivateRoute from "../components/PrivateRoute";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <PrivateRoute exact path="/home" component={Home} />
    <PrivateRoute exact path="/profile/:username" component={Profile} />
    <PrivateRoute
      exact
      path="/settings/profile"
      render={(props) => [
        <Profile key="profile" {...props} />,
        <ProfileSettings key="profile-settings" {...props} />,
      ]}
    />
    <Route exact path="/login" component={Login} />
    <PrivateRoute component={NotFound} />
  </Switch>
);

export default Routes;
