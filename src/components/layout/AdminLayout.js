import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NotFoundPage from "./components/NotFoundPage";
import Navbar from "./components/Navbar";
import adminRoutes from "../routes/AdminRoutes/routesConfig";

const switchRoutes = (availableRoutes) => {
  const hasAccess = (path) => {
    const available = [];
    availableRoutes.map(
      (each) =>
        each.admin_routes &&
        each.admin_routes.length &&
        each.admin_routes.map((e) => available.push(e))
    );
    return true; // Testing
    return available.includes(path);
  };

  return (
    <session className="container">
      <Switch>
        {adminRoutes
          .filter((each) => hasAccess(each.path))
          .map((prop) => (
            <Route key={prop.path} {...prop} />
          ))}
        <Route component={NotFoundPage} />
      </Switch>
    </session>
  );
};

const AdminLayout = ({ user }) => {
  return (
    <>
      <Navbar />
      {switchRoutes(user.routes)}
    </>
  );
};

AdminLayout.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.app.user,
});

export default connect(mapStateToProps)(AdminLayout);
