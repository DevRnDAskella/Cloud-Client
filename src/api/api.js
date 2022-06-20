import { instance } from "./instance";

export const postRegister = ({ email, password }) => {
  return instance.post("auth/registration", { email, password });
};
