import { useState } from "react";
import { connect } from "react-redux";
import { Input } from "../";
import { authOperations } from "../../../state/ducks/auth";
import { StyledLogin } from "../../styled";

export const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledLogin>
      <h2>Авторизация</h2>
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Введите email..."
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Введите пароль..."
      />
      <button onClick={() => login(email, password)}>Войти</button>
    </StyledLogin>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  login: authOperations.login,
})(Login);
