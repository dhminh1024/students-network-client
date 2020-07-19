import React, { Fragment, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { alertActions, authActions } from "../../_actions";
import PropTypes from "prop-types";

const Register = ({ token, loading, errors }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const dispatch = useDispatch();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      dispatch(alertActions.setAlert("Passwords do not match", "danger"));
    } else {
      dispatch(authActions.register({ name, email, password }));
    }
  };

  if (token) {
    return <Redirect to="/" />;
  }

  const fillFakeData = () => {
    setFormData({
      name: "Minh",
      email: "minh@cs.vn",
      password: "123",
      password2: "123",
    });
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
          {errors.name && (
            <small className="form-text text-danger">{errors.name}</small>
          )}
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
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
          />
          {errors.password && (
            <small className="form-text text-danger">{errors.password}</small>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
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
          <input type="submit" className="btn btn-primary" value="Register" />
        )}

        <button type="button" className="btn btn-light" onClick={fillFakeData}>
          Example
        </button>
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  token: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.app.token,
  loading: state.auth.loading,
  errors: state.auth.errors,
});

export default connect(mapStateToProps)(Register);
