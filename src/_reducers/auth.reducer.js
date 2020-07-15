import * as types from "../_constants/auth.constants";
import produce from "immer";

const initialState = {
  errors: {},
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const authReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.LOGIN_REQUEST:
        draft.loading = true;
        break;
      case types.LOGIN_SUCCESS:
        draft.loading = false;
        break;
      case types.LOGIN_FAILURE:
        draft.loading = false;
        draft.errors = { ...action.payload.errors };
        break;
      case types.REGISTER_REQUEST:
        draft.loading = true;
        break;
      case types.REGISTER_SUCCESS:
        draft.loading = false;
        break;
      case types.REGISTER_FAILURE:
        draft.loading = false;
        draft.errors = { ...action.payload.errors };
        break;
    }
  });

export default authReducer;
