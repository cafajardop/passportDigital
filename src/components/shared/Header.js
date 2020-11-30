import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

        <Link 
            className="navbar-brand" 
            to="/">
            Pasaporte Digital
        </Link>

        <a className="navbar-brand " href="#" >
          <img src="https://w7.pngwing.com/pngs/413/324/png-transparent-barrancabermeja-logo-ecopetrol-business-product-eco-energy-text-logo-business.png" className="rounded" width="125" height="35" alt=""/>
        </a>

        <div className="navbar-collapse">
            <div className="navbar-nav">

                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/Usuarios"
                >
                    Reportes
                </NavLink>

                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/Usuarios"
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
                >
                    Cerrar Sesión
                </NavLink>
            </ul>
        </div>
    </nav>
)
}
 
export default Header;