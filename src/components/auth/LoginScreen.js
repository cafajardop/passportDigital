import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/**Actions Redux */
import { mostrarAlertaAction, ocultarAlertaAction,} from "../../actions/alertaActions";
import { obtenerUsuarioLoginAction} from "../../actions/estadoLoginActions";
import { getAlertMessages } from "../../selectors/getAlertMessages";
import LeftPanel from "./leftPanel";
import HeadTitle from "./HeadTitle";
import FootImageLogin from "./FootImageLogin";


export const LoginScreen = ({ history }) => {
  /**State del componente */
  const [nombreusuarioLogin, guardarnombreusuario] = useState({
    email:"",
    Password:""
  });

  const {email,Password} = nombreusuarioLogin;
  const [password, showPassword] = useState('password');

  /**Acceder al state del store */  
  const cargando = useSelector((state) => state.usuarios.state);
  const error = useSelector((state) => state.usuarios.error);
  const alerta = useSelector((state) => state.alerta.alerta);
  const usuario = useSelector((state) => state.usuario.usuario);  
  
  const onChange = (e) => {
    guardarnombreusuario({
      ...nombreusuarioLogin,
      [e.target.name]: e.target.value,
    });    
  };

     /**Hook tipo documento */  
 /* const documento = TypeDocument(); */
 
  /**Utilizar dispatch y crear funcion */
  const dispatch = useDispatch();

  /**Enviar la accion */
  const obtenerUsuarioLogin = (usuario) =>
    dispatch(obtenerUsuarioLoginAction(usuario));

  /**Enviando Datos */
  const submitLoginUsuario = (e) => {
    e.preventDefault();

    /**Validar Formulario */
    if (email.trim() === "" || Password.trim() === "") {
      const alerta = getAlertMessages("Campos Obligatorios");

      dispatch(mostrarAlertaAction(alerta));
      setTimeout(() => {
        dispatch(ocultarAlertaAction());
      }, 3000);
      return;
    }
      /**Si no hay errores */
      dispatch(ocultarAlertaAction());
      /* dispatch(mostrarEstadoLoginAction(user)); */            
      
      /**Resgistra usuario */
      obtenerUsuarioLogin({
        ...nombreusuarioLogin,
      });

      const token = localStorage.getItem('token');
      
      if(token){
        const {rol} =  usuario.usuario
        if(rol==="ADMIN"){
          history.push("/listadousuarios");
          return;
        }
        history.push("/perfilusuario");
      }      
    }

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
              onSubmit={submitLoginUsuario}
              className="form-signin"
              autoComplete="off"
            >
              <HeadTitle title="¿No tienes una cuenta?" linkText="Registrese" linkUrl="Registro"/>

              <h5 className="h3 mb-3 mt-3">Registrate en pasaporte digital</h5>
              {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}
              {cargando ? <p>Cargando..</p> : null}{" "}              
              {error ? (
                <p className="alert alert-danger p2 mt-4 text-center">
                  {" "}
                  Hubo un error{" "}
                </p>
              ) : null}

              <div className="text-left">
                <label htmlFor="txt-user">Correo electrónico</label>
                <input
                    id="txt-user"
                    type="text"
                    className="form-control"
                    placeholder="alguien@example.com"
                    name="email"
                    value={email}
                    onChange={onChange}
                />

                <label htmlFor="txt-pass">Contraseña</label>
                <div className="input-group" id="show_hide_password">
                  <input
                      id="txt-pass"
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
              </div>

              <button
                className="btn btn-lg btn-login btn-block mb-2"
                type="submit"
              >Ingresar
              </button>

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Recordar sesion
                </label>
              </div>
              <small className="mt-5 mb-3 text-muted">Al continuar usted acepta nuestras politicas de privacidad & términos de servicios</small>            
            </form>
          </div>
        </div>

        <FootImageLogin/>

      </div>
    </React.Fragment>
  );
};
