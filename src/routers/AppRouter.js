import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen }  from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
      <Router>
          <Switch>
            <Route exact path="/passportDigital" component={LoginScreen} />
            <Route exact path="/Registro" component={RegisterScreen} />
            <Route path="/" render={(props) => <DashboardRoutes info={props} />} />
          </Switch>
      </Router>
  );
};
