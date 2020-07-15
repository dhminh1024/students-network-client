import { combineReducers } from "redux";
import alertReducer from "./alert.reducer";
import authReducer from "./auth.reducer";
import appReducer from "./app.reducer";

export default combineReducers({
  app: appReducer,
  alert: alertReducer,
  auth: authReducer,
});
