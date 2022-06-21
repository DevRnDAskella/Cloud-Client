import { postRegister, postLogin, getAuth } from "../../../api";
import * as types from "./types";

export const setUser = (payload) => ({ type: types.SET_USER, payload });
export const logout = () => ({ type: types.LOG_OUT });

export const registration = async (email, password) => {
  try {
    const response = await postRegister({ email, password });
  } catch (err) {
    console.log(err);
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    console.log('Hello, world!');
    const response = await postLogin({ email, password });
    dispatch(setUser(response.data.user));
    localStorage.setItem("token", response.data.token);
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const auth = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await getAuth(token);
    dispatch(setUser(response.data.user));
    localStorage.setItem("token", response.data.token);
  } catch (e) {
    alert(e.response.data.message);
    localStorage.removeItem("token");
  }
};
