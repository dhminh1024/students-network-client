import produce from "immer";
import * as types from "../_constants/app.constants";

export const initialState = {
  user: { isAdmin: false },
  token: "",
  access: {},
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action = { type: "" }) =>
  produce(state, (draft) => {
    const access = {};
    let isAdmin = true;
    switch (action.type) {
      case types.SET_USER:
        localStorage.setItem(
          "routes",
          action.payload.routes
            ? JSON.stringify(action.payload.routes)
            : localStorage.routes
        );
        // eslint-disable-next-line
        (action.payload.routes || []).map((each) => {
          if (each.admin_routes.includes("/admin/dashboard")) {
            isAdmin = true;
          }
          // eslint-disable-next-line
          each.admin_routes.map((route) => {
            access[route] = [...(access[route] || []), each.access_s];
          });
        });
        draft.user = { ...action.payload, isAdmin };
        draft.access = access;
        break;
      case types.SET_TOKEN:
        localStorage.setItem("token", action.payload);
        draft.token = action.payload;
        break;
      case types.LOGOUT_REQUEST:
      case types.LOGOUT_SUCCESS:
        localStorage.setItem("token", "");
        localStorage.setItem("routes", "");
        draft.user = {};
        draft.token = "";
        break;
    }
  });

export default appReducer;
