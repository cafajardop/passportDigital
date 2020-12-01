import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../../resources/images/logo-head-ecopetrol.png';
import { getFullYear } from "../../selectors/getFullYear";

/**Actions Redux */
import {
  mostrarAlertaAction,
  ocultarAlertaAction,
} from "../../actions/alertaActions";
import { mostrarEstadoLoginAction } from "../../actions/estadoLoginActions";

export const LoginScreen = ({ history }) => {
  /**State del componente */
  const [nombre, guardarnombre] = useState("");
  const [cedula, guardarCedula] = useState("");

  /**Acceder al state del store */
  const cargando = useSelector((state) => state.usuarios.state);
  const error = useSelector((state) => state.usuarios.error);
  const alerta = useSelector((state) => state.alerta.alerta);

  /**Utilizar dispatch y crear funcion */
  const dispatch = useDispatch();

  /**Obtener el año */
  const year = getFullYear();

  /**Enviando Datos */
  const submitNuevoUsuario = (e) => {
    e.preventDefault();

    /**Validar Formulario */
    if (nombre.trim() === "" || cedula.trim() === "") {
      const alerta = {
        msg: "Campos Obligatorios",
        classes: "alert alert-danger text-center text-uppercase p3",
      };

      dispatch(mostrarAlertaAction(alerta));
      dispatch(mostrarEstadoLoginAction(true));
      return;
    }

    /**Buscar el usuario en la lista*/


    /**Si no hay errores */
    dispatch(ocultarAlertaAction());
    dispatch(mostrarEstadoLoginAction(false));

    history.push("/");
  };

  return (    
      <div className="contenedor-form-signin">
        <form onSubmit={submitNuevoUsuario} className="form-signin">
          <img
            className="rounded mb-4"
            src={logo}
            alt=""
            width="125"
            height="35"
          />
          <h1 className="h3 mb-3 font-weight-normal">Pasaporte Digital</h1>
          {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}
          {cargando ? <p>Cargando..</p> : null} {error ? (<p className="alert alert-danger p2 mt-4 text-center"> Hubo un error </p>) : null}
          
          <input
            type="text"            
            className="form-control"
            placeholder="alguien@example.com"            
            name="nombre"
            value={nombre}
            onChange={(e) => guardarnombre(e.target.value)}
          />
          
          <input
            type="password"            
            className="form-control"
            placeholder="Contraseña"
            name="cedula"
            value={cedula}
            onChange={(e) => guardarCedula(e.target.value)}   
          />

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Recordarme
            </label>
          </div>

          <button 
            className="btn btn-lg btn-primary btn-block mb-2" 
            type="submit">
            Ingresar
          </button>

          <Link to={"/Registro"} type="text">Registrese</Link>

        <p className="mt-5 mb-3 text-muted">&copy; {year}</p>
        </form>
      </div>    
  );
};