import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import Navbar from "./components/Navbar";
import userRoutes from "../routes/UserRoutes/routesConfig";

const switchRoutes = (
  <section className="container">
    <Switch>
      {userRoutes.map((prop) => (
        <Route key={prop.path} {...prop} />
      ))}
      <Route component={NotFoundPage} />
    </Switch>
  </section>
);

const UserLayout = () => {
  return (
    <>
      <Navbar />
      {switchRoutes}
    </>
  );
};

export default UserLayout;
