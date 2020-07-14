import { combineReducers } from "redux";
import alertReducer from "./alert.reducer";
import authReducer from "./auth.reducer";
import appReducer from "./app.reducer";

export default combineReducers({
  appReducer,
  alertReducer,
  authReducer,
});
