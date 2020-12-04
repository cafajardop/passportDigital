import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../resources/images/logo-head-ecopetrol.png";
import { getFullYear } from "../../selectors/getFullYear";
import axios from "axios";
import {  
  MobileView
} from "react-device-detect";

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
    ingreso: false,
    nombreusuario: "",
    constraseña: "",
    rol: "USER",
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
    observacion: "",
  });

  const { nombreusuario, constraseña } = registerusuario;

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
    if (
      nombreusuario.trim() === "" ||
      constraseña.trim() === "" ||
      repetirconstraseña.trim() === ""
    ) {
      const alerta = {
        msg: "Campos Obligatorios",
        classes: "alert alert-danger text-center text-uppercase p3",
      };

      dispatch(mostrarAlertaAction(alerta));
      return;
    }

    if (constraseña.trim() !== repetirconstraseña.trim()) {
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
    const filter = filtrarusuarios.filter((user) =>
      user.nombreusuario
        ?.toLocaleLowerCase()
        .includes(nombreusuario.toLocaleLowerCase())
    );
    if (filter.length !== 0) {
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
    <React.Fragment>
    <div className="head-login">
      <div className="row w-100 mt-3">
        <div className="col-12 mt-5"><h3>Pasaporte Digital</h3></div>
        <div className="col-12"><span>Por un acceso mas seguro para todos</span></div>
      </div>
    </div>

    
    <div className="container-fluid container-full-height">      
      <div className="row row-full-height">
        
      <div className="hidden-xs col-sm-8 col-md-8 col-lg-8 col-xl-9 col-full-height login-main-content"
              style={{backgroundImage:"url('../passportDigital/assets/logo-login.png')", 
                      backgroundSize:"100% 100%", 
                      backgroundRepeat:"no-repeat"}}>
        </div>

        <div className="contenedor-form-signin col-sm-4 col-md-4 col-lg-4 col-xl-3 col-full-height">
          <form
            onSubmit={submitRegistroUsuario}
            className="form-signin"
            autoComplete="off"
          >

            <div style={{marginBottom: "20%"}}>
            <span style={{textAlign:"center", marginInlineStart:"center"}}>¿Tienes una cuenta?</span><br/>
              <Link to={"/passportDigital"} type="text">
                Iniciar Sesión
              </Link>
            </div>

            <h5 className="h3 mb-3 mt-3" style={{fontSize:"12"}}>Registrate en pasaporte digital</h5>
            {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}
            {cargando ? <p>Cargando..</p> : null}{" "}
            {error ? (
              <p className="alert alert-danger p2 mt-4 text-center">                
                Hubo un error
              </p>
            ) : null}
            
            <div className="text-left">
              <label htmlFor="txt-user">Correo electrónico</label>
              <input
                type="text"
                className="form-control"
                placeholder="alguien@example.com"
                name="nombreusuario"
                value={nombreusuario}
                onChange={onChange}
              />
              <label htmlFor="txt-pass">Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="constraseña"
                value={constraseña}
                onChange={onChange}
              />
              <label htmlFor="txt-pass">Repetir Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Repetir Contraseña"
                name="repetirconstraseña"
                value={repetirconstraseña}
                onChange={(e) => guardarrepetircontraseña(e.target.value)}
              />
            </div>


            <button
              className="btn btn-lg btn-login btn-block mb-2"
              type="submit"
            >
              Ingresar
            </button>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Recordar sesion
            </label>
          </div>
          <small className="mt-5 mb-3 text-muted">Al aceptar usted acepta nuestras politicas de privacidad & términos de servicios</small>
          
          </form>
        </div>

      </div>
    </div>
    </React.Fragment>
  );
};
