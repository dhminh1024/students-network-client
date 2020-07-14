import * as types from "../_constants/auth.constants";
import api from "../_utils/api";
import history from "../_utils/history";
import { appActions } from "./app.actions";
import { alertActions } from "./alert.actions";

const setStoreValue = (payload) => ({
  type: types.SET_STORE_VALUE,
  payload,
});

const clearStore = (payload) => ({
  type: types.CLEAR_STORE,
  payload,
});

const loginRequest = (email, password) => async (dispatch) => {
  const body = { email, password };
  try {
    const res = await api.post("/user/login", body);
    dispatch(appActions.setToken(res.data.token));
    dispatch(appActions.setUser(res.data.data));
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: res.data,
    });
    history.push("/");
  } catch (err) {
    const error = err.response.data;
    if (error.errors && error.errors.name === "JsonWebTokenError") {
      // dispatch SESSION_EXPIRED
    }
    dispatch(alertActions.setAlert(error.msg, "danger"));
    dispatch({
      type: types.LOGIN_FAILURE,
      payload: error,
    });
  }
};

const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/user/register", formData);
    dispatch(appActions.setToken(res.data.token));
    dispatch(appActions.setUser(res.data.data));
    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: res.data,
    });
    history.push("/");
  } catch (err) {
    const error = err.response.data;
    if (error.errors && error.errors.name === "JsonWebTokenError") {
      // dispatch SESSION_EXPIRED
    }
    dispatch(alertActions.setAlert(error.msg, "danger"));
    dispatch({
      type: types.REGISTER_FAILURE,
      payload: error,
    });
  }
};

export const authActions = {
  setStoreValue,
  clearStore,
  loginRequest,
  register,
};
