import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { authActions } from "../../_actions/auth.actions";

const Login = ({ token, loading, errors }) => {
  const [formData, setFormData] = useState({
    email: "tom@gmail.com",
    password: "123",
  });

  const { email, password } = formData;
  const dispatch = useDispatch();
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.loginRequest(email, password));
  };

  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
          {errors.email && (
            <small className="form-text text-danger">{errors.email}</small>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="3"
          />
          {errors.password && (
            <small className="form-text text-danger">{errors.password}</small>
          )}
        </div>

        {loading ? (
          <button className="btn btn-lg btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        ) : (
          <input
            type="submit"
            className="btn btn-lg btn-primary"
            value="Login"
          />
        )}
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

Login.propTypes = {
  token: PropTypes.string,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  token: state.app.token,
  loading: state.auth.loading,
  errors: state.auth.errors,
});

export default connect(mapStateToProps)(Login);
