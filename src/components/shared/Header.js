import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark justify-content-between">
        <div className="container">
          <h1>
              <Link to={'/'} 
                    className="text-black">Pasaporte Digital
              </Link>
          </h1>
        </div>

        <Link 
          to={"/usuarios/nuevo"}
          className="btn btn-danger nuevo-post d-block d-md-inline-block">
            Nuevo Usuario &#43;
        </Link>
    </nav>
  );
}
 
export default Header;