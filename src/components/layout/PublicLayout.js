import React from "react";
import { Switch, Route } from "react-router-dom";
import publicRoutes from "../routes/PublicRoutes/routesConfig";
import NotFoundPage from "./components/NotFoundPage";

const switchRoutes = (
  <section className="container">
    <Switch>
      {publicRoutes.map((prop) => (
        <Route key={prop.map} {...prop} />
      ))}
      <Route component={NotFoundPage} />
    </Switch>
  </section>
);

const PublicLayout = () => {
  return <>{switchRoutes}</>;
};

export default PublicLayout;
