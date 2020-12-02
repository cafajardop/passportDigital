import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../../resources/images/logo-head-ecopetrol.png';
import { getFullYear } from "../../selectors/getFullYear";
import axios from 'axios'

/**Actions Redux */
import {
  mostrarAlertaAction,
  ocultarAlertaAction,
} from "../../actions/alertaActions";
import { registroUsuarioAction } from "../../actions/usuarioActions";

export const RegisterScreen = ({ history }) => {

  /**State del componente */
  const [repetirconstraseña, guardarrepetircontraseña] = useState("");
  const [registerusuario, guardarregisterusuario] = useState({
    nombreusuario:"",
    constraseña:"",    
    rol:"USER",
    primerapellido: "",
    segundoapellido: "",
    primernombre: "",
    segundonombre: "",
    cedula: "",
    tipodocumento: "",
    telefono: "",
    correo: "",
    direccion: "",
    direccion2: "",
  });

  const {
    nombreusuario,
    constraseña    
  } = registerusuario;

  const [filtrarusuarios, filtrarguardarusuarios] = useState([]);
  useEffect(() => {
    const obtenerUsuarioName = async () => {
      const url = "http://localhost:4000/usuarios";
      const user = await axios.get(url);
      filtrarguardarusuarios(user.data);
    };
    obtenerUsuarioName();
  }, []);

  /**Obtener el año */
  const year = getFullYear();

  /**Acceder al state del store */
  const cargando = useSelector((state) => state.usuarios.state);
  const error = useSelector((state) => state.usuarios.error);
  const alerta = useSelector((state) => state.alerta.alerta);

  const onChange = (e) => {    
    guardarregisterusuario({      
      ...registerusuario,
      [e.target.name]: e.target.value,
    });
  };

  /**Utilizar dispatch y crear funcion */
  const dispatch = useDispatch();

  /**Enviar la accion */
  const registrarUsuario = (usuario) =>
    dispatch(registroUsuarioAction(usuario));

  /**Enviando Datos */
  const submitRegistroUsuario = (e) => {
    e.preventDefault();

    /**Validar Formulario */
    if (nombreusuario.trim() === "" || constraseña.trim() === "" || repetirconstraseña.trim()==="") {
      const alerta = {
        msg: "Campos Obligatorios",
        classes: "alert alert-danger text-center text-uppercase p3",
      };

      dispatch(mostrarAlertaAction(alerta));
      return;
    }

    if(constraseña.trim() !== repetirconstraseña.trim()){
      const alerta = {
        msg: "Las contraseñas no coinciden",
        classes: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(mostrarAlertaAction(alerta));      
      setTimeout(() => {
        dispatch(ocultarAlertaAction());        
      }, 3000);
      return;
    }
    
    /**Validar que no exista el usuario en la BD */
    const filter =  filtrarusuarios.filter(user => user.nombreusuario?.toLocaleLowerCase().includes(nombreusuario.toLocaleLowerCase()));
      if(filter.length !== 0){
        const alerta = {
          msg: "El usuario ya existe inicie sesión",
          classes: "alert alert-danger text-center text-uppercase p3",
        };
        dispatch(mostrarAlertaAction(alerta));
        setTimeout(() => {
          dispatch(ocultarAlertaAction());
          history.push("/passportDigital");
        }, 3000);
        return;
    }

    /**Si no hay errores */
    dispatch(ocultarAlertaAction());
    
    /**Resgistra usuario */
    registrarUsuario({
      ...registerusuario,
    });

    history.push("/passportDigital");
  };

  return (    
      <div className="contenedor-form-signin">
        <form onSubmit={submitRegistroUsuario} className="form-signin">
          <img
            className="rounded mb-4"
            src={logo}
            alt=""
            width="200"
            height="80"
          />
          <h1 className="h3 mb-3 font-weight-normal">Pasaporte Digital</h1>
          {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}
          {cargando ? <p>Cargando..</p> : null} {error ? (<p className="alert alert-danger p2 mt-4 text-center"> Hubo un error </p>) : null}

          <input
            type="text"
            className="form-control"
            placeholder="alguien@example.com"
            name="nombreusuario"
            value={nombreusuario}
            onChange={onChange}
          />

          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            name="constraseña"
            value={constraseña}
            onChange={onChange}
          />

          <input
            type="password"
            className="form-control"
            placeholder="Repetir Contraseña"
            name="repetirconstraseña"
            value={repetirconstraseña}
            onChange={(e)=> guardarrepetircontraseña(e.target.value)}
          />

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Recordarme
            </label>
          </div>

          <button
            className="btn btn-lg btn-primary btn-block mb-2"
            type="submit"
          >
            Ingresar
          </button>

          <Link to={"/passportDigital"} type="text">{" "}Iniciar Sesión{" "}</Link>

          <p className="mt-5 mb-3 text-muted">&copy; {year}</p>
        </form>
      </div>
  );
};
