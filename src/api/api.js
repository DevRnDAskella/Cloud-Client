import { instance } from "./instance";

export const postRegister = ({ email, password }) => {
  return instance.post("auth/registration", { email, password });
};

export const postLogin = ({ email, password }) => {
  return instance.post("auth/login", { email, password });
};

export const getAuth = (token) => {
  return instance.get("auth/auth", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
