import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "./MainLayout.css";

const MainLayout = ({ subroutes }) => {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-200">
        <LoadRoutes routes={subroutes} />
      </main>
      <Footer />
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

export default MainLayout;
