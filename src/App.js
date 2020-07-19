import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/components/Navbar";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./_utils/setAuthToken";
import history from "./_utils/history";
import "./App.css";
import AdminRoutes from "./components/routes/AdminRoutes";
import AdminLayout from "./components/layout/AdminLayout";
import UserLayout from "./components/layout/UserLayout";
import PublicLayout from "./components/layout/PublicLayout";
import UserRoutes from "./components/routes/UserRoutes";

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
  }, []);

  return (
    <Provider store={store}>
      <Router history={history}>
        <Fragment>
          <Navbar />
          <Switch>
            <AdminRoutes path="/admin" component={AdminLayout} />
            <UserRoutes path="/user" component={UserLayout} />
            <Route path="/" component={PublicLayout} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
