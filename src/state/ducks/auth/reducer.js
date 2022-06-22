import * as types from "./types";

const initialState = {
  currentUser: {},
  isAuth: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return { ...state, currentUser: action.payload, isAuth: true };

    case types.LOG_OUT: {
      return { ...state, currentUser: {}, isAuth: false };
    }
    default:
      return state;
  }
};
