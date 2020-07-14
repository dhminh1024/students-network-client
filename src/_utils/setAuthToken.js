import store from "../store";
import jwtDecode from "jwt-decode";
import { appActions } from "../_actions";

const setAuthToken = (tokenWithBearer) => {
  if (tokenWithBearer) {
    const token = tokenWithBearer.split(" ")[1];
    try {
      const decoded = jwtDecode(token);
      if (
        !(
          typeof decoded === "object" &&
          typeof decoded.exp === "number" &&
          decoded.exp > Date.now() / 1000
        )
      ) {
        localStorage.removeItem("token");
      } else {
        const routes = JSON.parse(localStorage.getItem("routes"));
        const user = {
          id: decoded.id,
          name: decoded.name,
          avatar: decoded.avatar,
          email: decoded.email,
          roles: decoded.roles,
          email_verified: decoded.email_verified,
          routes: routes,
        };
        store.dispatch(appActions.setToken(tokenWithBearer));
        store.dispatch(appActions.setUser(user));
      }
    } catch (error) {
      localStorage.removeItem("token");
    }
  }
};

export default setAuthToken;
