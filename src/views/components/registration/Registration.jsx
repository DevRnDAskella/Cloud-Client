import { useState } from "react";
import { connect } from "react-redux";
import { Input } from "../";
import { authOperations } from "../../../state/ducks/auth";
import { StyledRegistration } from "../../styled/";

export const Registration = ({ registration }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledRegistration>
      <div className="registration__header">Регистрация</div>
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
      <button
        className="registration__btn"
        onClick={() => registration(email, password)}
      >
        Войти
      </button>
    </StyledRegistration>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  registration: authOperations.registration,
})(Registration);
