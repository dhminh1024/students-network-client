import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { appActions } from "../../../_actions";
import logo from "../../../assets/img/logo.svg";

const Navbar = ({ token, loading }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(appActions.logoutRequest());
  };
  const authLinks = (
    <ul>
      {/* <li>
        <Link to="/profiles">
          Developers
        </Link>
      </li> */}
      <li>
        <Link to="/user/profile">Profile</Link>
      </li>
      <li>
        <Link to="/admin/dashboard">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={handleLogout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      {/* <li>
        <Link to="/profiles">Developers</Link>
      </li> */}
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <img src={logo} alt="CoderSchool" />
        </Link>
      </h1>
      {!loading && <Fragment>{token ? authLinks : guestLinks}</Fragment>}
    </nav>
  );
};

Navbar.propTypes = {
  token: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.app.token,
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(Navbar);
