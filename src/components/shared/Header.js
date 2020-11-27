import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger justify-content-between">
        <div className="container">
          <h1>
              <Link to={'/'} 
                    className="text-light">Pasaporte Digital
              </Link>
          </h1>
        </div>
        <Link 
          to={"/login"}
          className="btn btn-outline-dark nuevo-post d-block d-md-inline-block"
          ico
          >
            Cerrar Sesión
        </Link>
    </nav>
  );
}
 
export default Header;