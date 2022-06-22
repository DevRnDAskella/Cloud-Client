import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { StyledNavbar, Containers } from "../../styled/";
import Logo from "../../../assets/media/navbar-logo.svg";

export const Navbar = () => {
  const isAuth = useSelector((state) => state.reducer.isAuth);

  return (
    <StyledNavbar>
      <Containers.main>
        <img src={Logo} alt="Logo" />
        <div className="header">MERN CLOUD</div>
        {!isAuth && (
          <div className="login">
            <NavLink to="/login">Войти</NavLink>
          </div>
        )}
        {!isAuth && (
          <div className="registration">
            <NavLink to="/registration">Регистрация</NavLink>
          </div>
        )}
        {isAuth && (
          <div className="logout">
            <NavLink to="/">Выйти</NavLink>
          </div>
        )}
      </Containers.main>
    </StyledNavbar>
  );
};
