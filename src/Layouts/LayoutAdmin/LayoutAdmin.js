import React from "react";
import { Route, Switch } from "react-router-dom";

const LayoutAdmin = ({ subroutes }) => {
  return (
    <div>
      <h1>LAYOUTADMIN...</h1>
      <main className="bg-gray-200">
        <LoadRoutes routes={subroutes} />
      </main>
    </div>
  );
};

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}

export default LayoutAdmin;
