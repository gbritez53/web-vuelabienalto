import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes";
import ScrollToTop from "./components/ScrollToTop";

import "./styles/app.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        {routes.map((route, index) => (
          <RoutesWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

function RoutesWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => (
        <route.component subroutes={route.subroutes} {...props} />
      )}
    />
  );
}

export default App;
