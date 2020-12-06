import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../resources/images/logo-head-ecopetrol.png";
import { useDispatch, useSelector } from "react-redux";
import { getUserLogin } from "../../actions/estadoLoginActions";

const Header = () => {
  const redireccionarNuevo = () => {
    localStorage.removeItem("menu");
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
  };

  const dispatch = useDispatch();
  const loadUserLogin = () => dispatch(getUserLogin());
  loadUserLogin();
  
  const user = useSelector((state) => state.usuario.usuario);
  const userlocal = JSON.parse(localStorage.getItem('usuario'));

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Pasaporte Digital
      </Link>

      <a className="navbar-brand " href="#">
        <img src={logo} className="rounded" width="125" height="35" alt="" />
      </a>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/UsersScreen"
          >
            Reportes
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/UsersScreen"
          >
            Documentación
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-light">
            {user === null
            ? userlocal.email
            : `${userlocal.email}`}
          </span>
          
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/passportDigital"
            onClick={() => redireccionarNuevo()}
          > Cerrar Sesión
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
