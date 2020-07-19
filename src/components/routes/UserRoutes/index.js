import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const UserRoutes = ({ token, ...rest }) => {
  if (token) return <Route {...rest} />;
  delete rest.component;
  return (
    <Route
      {...rest}
      render={(props) => (
        <Redirect
          to={{
            pathname: "login/",
            state: { from: props.location },
          }}
        />
      )}
    />
  );
};

UserRoutes.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.app.token,
});

export default connect(mapStateToProps)(UserRoutes);
