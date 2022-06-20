import { NavLink } from "react-router-dom";
import { StyledNavbar, Containers } from "../../styled/";
import Logo from "../../../assets/media/navbar-logo.svg";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Containers.main>
        <img src={Logo} alt="Logo" />
        <div className="navbar__header">MERN CLOUD</div>
        <div className="navbar__login">
          <NavLink to="/login">Войти</NavLink>
        </div>
        <div className="navbar__registration">
          <NavLink to="/registration"></NavLink>
        </div>
      </Containers.main>
    </StyledNavbar>
  );
};
