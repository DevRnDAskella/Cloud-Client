import * as types from "./types";

const initialState = {
  currentUser: {},
  isAuth: false,
};

export const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTRATION:
      return state;

    case types.LOG_IN:
      return state;

    default:
      return state;
  }
};
