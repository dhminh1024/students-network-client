import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const DashboardPage = () => {
  return (
    <div className="container">
      <h1>Dashboard Page</h1>
    </div>
  );
};

DashboardPage.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
