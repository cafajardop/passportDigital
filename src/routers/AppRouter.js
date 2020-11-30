import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login }  from "../components/auth/Login";
import { Register } from "../components/auth/Register";

import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
      <Router>        
          <Switch>
            <Route exact path="/passportDigital" component={Login} />
            <Route exact path="/Registro" component={Register} />
            <Route path="/" component={DashboardRoutes} />
          </Switch>        
      </Router>
  );
};