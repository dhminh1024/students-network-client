import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import NotFoundPage from "../../layout/components/NotFoundPage";

const AdminRoute = ({ token, isAdmin, ...rest }) => {
  if (token && isAdmin) return <Route {...rest} />;
  delete rest.component; // eslint-disable-line no-param-reassign
  if (token && isAdmin === false) return <Route component={NotFoundPage} />;
  return (
    <Route
      {...rest}
      render={(props) => (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )}
    />
  );
};

AdminRoute.propTypes = {
  token: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

AdminRoute.defaultProps = {
  isAdmin: false,
};

const mapStateToProps = (state) => ({
  token: state.app.token,
  isAdmin: state.app.user.isAdmin,
});

export default connect(mapStateToProps)(AdminRoute);

// LAYOUT
// import React from 'react';
// import { Switch, Route } from 'react-router-dom';
// import routes from './routesConfig';

// const switchRoutes = (
//   <Switch>
//     {routes.map(prop => (
//       <Route key={prop.path} {...prop} />
//     ))}
//     <Route component={NotFoundPage} />
//   </Switch>
// );

// const AdminLayout = () => {
//   return (
//     <>
//       <Header />
//       {switchRoutes}
//       <Footer />
//     </>
//   );
// };
