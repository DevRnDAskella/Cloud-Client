import { NavLink } from "react-router-dom";
import { StyledNavbar, Containers } from "../../styled/";
import Logo from "../../../assets/media/navbar-logo.svg";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Containers.main>
        <img src={Logo} alt="Logo" />
        <div className="header">MERN CLOUD</div>
        <div className="login">
          <NavLink to="/login">Войти</NavLink>
        </div>
        <div className="registration">
          <NavLink to="/registration">Регистрация</NavLink>
        </div>
      </Containers.main>
    </StyledNavbar>
  );
};
