import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../resources/images/logo-head-ecopetrol.png";
import {useDispatch, useSelector} from "react-redux";
import {getUserLogin} from "../../actions/estadoLoginActions";

const Header = () => {
 
  const redireccionarNuevo = () => {
    localStorage.removeItem("userLocal");
  };

  const dispatch = useDispatch();
  const loadUserLogin = () => dispatch(getUserLogin());
  loadUserLogin();
  const user = useSelector(state => state.form.login);
  console.log("Usuario logueado .----");
  console.log(user);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand"    
        to="/">
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
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/passportDigital"
            onClick={() => redireccionarNuevo()}
          >
          Bienvenido {user === null || user.login === null ? "" : user.nombreusuario?.toLocaleUpperCase()}  -  Cerrar Sesión
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
