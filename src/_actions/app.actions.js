import * as types from "../_constants/app.constants";

const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

const setToken = (token) => ({
  type: types.SET_TOKEN,
  payload: token,
});

const sessionExpired = (token) => ({
  type: types.SESSION_EXPIRED,
  payload: token,
});

const networkError = (token) => ({
  type: types.NETWORK_ERROR,
  payload: token,
});

const logoutRequest = (payload) => ({
  type: types.LOGOUT_REQUEST,
  payload,
});
const logoutSuccess = (payload) => ({
  type: types.LOGOUT_SUCCESS,
  payload,
});
const logoutFailure = (payload) => ({
  type: types.LOGOUT_FAILURE,
  payload,
});

export const appActions = {
  setUser,
  setToken,
  sessionExpired,
  networkError,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
};
