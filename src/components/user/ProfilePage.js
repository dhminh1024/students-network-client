import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const ProfilePage = () => {
  return (
    <div className="container">
      <h1>Profile Page</h1>
    </div>
  );
};

ProfilePage.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
