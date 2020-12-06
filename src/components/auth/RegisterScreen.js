import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import clientAxios from '../../config/axios';

/**Actions Redux */
import {
  mostrarAlertaAction,
  ocultarAlertaAction,
} from "../../actions/alertaActions";

import { registroUsuarioAction } from "../../actions/usuarioActions";
import LeftPanel from "./leftPanel";
import HeadTitle from "./HeadTitle";
import FootImageLogin from "./FootImageLogin";

export const RegisterScreen = ({ history }) => {
  const URL = clientAxios.baseURL;
  /**State del componente */
  const [repetirconstraseña, guardarrepetircontraseña] = useState("");
  const [registerusuario, guardarregisterusuario] = useState({
    nombreusuario: "",
    primernombre: "",
    segundonombre: "",
    primerapellido: "",
    segundoapellido: "",
    telefono: "",
    Password: "",
    rol: "USER",
    cedula: "",
    tipodocumento: "",
    email: "",
    direccion: "",
    direccion2: "",
    observacion: "",
    ingreso: false,
  });

  const [password, showPassword] = useState('password');
  const [password2, showPassword2] = useState('password');

  const { email, Password } = registerusuario;

  const [filtrarusuarios, filtrarguardarusuarios] = useState([]);
  
  useEffect(() => {
    const obtenerUsuarioName = async () => {
      const url = `${URL}usuariopasaporte`;      
      const user = await axios.get(url);
      filtrarguardarusuarios(user.data.usuarios);
    };
    obtenerUsuarioName();
  }, []);
  
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
    
    /*  *Validar Formulario */
    if (
      email.trim() === "" ||
      Password.trim() === "" ||
      repetirconstraseña.trim() === ""
    ) {
      const alerta = {
        msg: "Campos Obligatorios",
        classes: "alert alert-danger text-center text-uppercase p3",
      };

      dispatch(mostrarAlertaAction(alerta));
      return;
    }

    if (Password.trim() !== repetirconstraseña.trim()) {
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
      user.email?.toLocaleLowerCase().includes(email.toLocaleLowerCase())
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

        <LeftPanel />

        <div className="contenedor-form-signin col-sm-4 col-md-4 col-lg-4 col-xl-3 col-full-height">
          <form
            onSubmit={submitRegistroUsuario}
            className="form-signin"
            autoComplete="off"
          >

            <HeadTitle title="¿Tienes una cuenta?" linkText="Iniciar Sesión" linkUrl="passportDigital"/>

            <h5 className="h3 mb-3 mt-3" style={{fontSize:"12"}}>Registrate en pasaporte digital</h5>
            {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}
            {cargando ? <p>Cargando..</p> : null}{" "}
            {error ? (
              <p className="alert alert-danger p2 mt-4 text-center">                
                Hubo un error
              </p>
            ) : null}
            
            <div className="text-left">
              <label htmlFor="txt-pass">Correo electrónico</label>
              <input
                  id="txt-pass"
                  type={'text'}
                  className="form-control"
                  placeholder="alguien@example.com"
                  name="email"
                  value={email}
                  onChange={onChange}
              />

              <label htmlFor="txt-pass2">Contraseña</label>
              <div className="input-group">
                <input
                    id="txt-pass2"
                    type={password}
                    className="form-control"
                    placeholder="Contraseña"
                    name="Password"
                    value={Password}
                    onChange={onChange}
                />
                <div className="input-group-addon">
                  <a onClick={(e) => showPassword(password === 'password' ? 'text' : 'password')}>
                    <i className={ password === 'password' ? 'fa fa-eye-slash' : 'fa fa-eye' } aria-hidden="true"></i>
                  </a>
                </div>
              </div>

              <label htmlFor="txt-pass">Repetir Contraseña</label>
              <div className="input-group">
                <input
                    type={password2}
                    className="form-control"
                    placeholder="Repetir Contraseña"
                    name="repetirconstraseña"
                    value={repetirconstraseña}
                    onChange={(e) => guardarrepetircontraseña(e.target.value)}
                />
                <div className="input-group-addon">
                  <a onClick={(e) => showPassword2(password2 === 'password' ? 'text' : 'password')}>
                    <i className={ password2 === 'password' ? 'fa fa-eye-slash' : 'fa fa-eye' } aria-hidden="true"></i>
                  </a>
                </div>
              </div>
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
          <small className="mt-5 mb-3 text-muted">Al continuar usted acepta nuestras politicas de privacidad & términos de servicios</small>
          
          </form>
        </div>

        <FootImageLogin/>

      </div>
    </div>
    </React.Fragment>
  );
};
