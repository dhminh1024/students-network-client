import * as types from "../_constants/alert.constants";
import produce from "immer";
const initialState = [];

/* eslint-disable default-case, no-param-reassign */
// const alertReducer = (state = initialState, action) =>
//   produce(state, (draft) => {
//     switch (action.type) {
//       case types.SET_ALERT:
//         draft = [...draft, action.payload];
//         break;
//       case types.REMOVE_ALERT:
//         draft.filter((alert) => alert.id !== action.payload);
//         break;
//     }
//   });

const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_ALERT:
      return [...state, payload];
    case types.REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
};

export default alertReducer;
