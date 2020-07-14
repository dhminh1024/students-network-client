import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ token }) => {
  if (token) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Students Network</h1>
          <p className="lead">
            Learning by doing, Learning by helping, Learning by asking
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  token: PropTypes.string,
};

const mapStateToProps = (state) => ({
  token: state.appReducer.token,
});

export default connect(mapStateToProps)(Landing);
