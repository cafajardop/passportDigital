import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../resources/images/logo-head-ecopetrol.png";
import { getFullYear } from "../../selectors/getFullYear";
import { obtenerUsuariosAction } from "../../actions/usuarioActions";

/**Actions Redux */
import {
  mostrarAlertaAction,
  ocultarAlertaAction,
} from "../../actions/alertaActions";
import {
  mostrarEstadoLoginAction,
  logOutAction,
} from "../../actions/estadoLoginActions";
import { getAlertMessages } from "../../selectors/getAlertMessages";

export const LoginScreen = ({ history }) => {
  /**State del componente */
  const [nombreusuarioLogin, guardarnombreusuario] = useState("");
  const [constraseñaLogin, guardarconstraseña] = useState("");

  /**Utilizar dispatch y crear funcion */
  const dispatch = useDispatch();

  /** */
  useEffect(() => {
    /*Limpiar sesion*/
    dispatch(logOutAction());
    /**Consultar api */
    const cargarUsuarios = () => dispatch(obtenerUsuariosAction());
    cargarUsuarios();
  }, []);

  /**Acceder al state del store */
  const usuarios = useSelector((state) => state.usuarios.usuarios);
  const cargando = useSelector((state) => state.usuarios.state);
  const error = useSelector((state) => state.usuarios.error);
  const alerta = useSelector((state) => state.alerta.alerta);

  /**Obtener el año */
  const year = getFullYear();

  /**Enviando Datos */
  const submitNuevoUsuario = (e) => {
    e.preventDefault();

    /**Validar Formulario */
    if (nombreusuarioLogin.trim() === "" || constraseñaLogin.trim() === "") {
      const alerta = getAlertMessages("Campos Obligatorios");

      dispatch(mostrarAlertaAction(alerta));
      setTimeout(() => {
        dispatch(ocultarAlertaAction());
      }, 3000);
      return;
    }

    /**Buscar el usuario en la lista*/
    const filter = usuarios.filter(
      (user) => user.nombreusuario === nombreusuarioLogin
    );
    if (filter.length !== 0) {
      const [user] = filter;
      const { constraseña } = user;

      if (constraseña !== constraseñaLogin) {
        const alerta = getAlertMessages("Contraseña Inválida");

        dispatch(mostrarAlertaAction(alerta));
        setTimeout(() => {
          dispatch(ocultarAlertaAction());
        }, 3000);
        return;
      }

      /**Si no hay errores */
      dispatch(ocultarAlertaAction());
      dispatch(mostrarEstadoLoginAction(user));

      localStorage.setItem("userLocal", nombreusuarioLogin);

      history.push("/");
    } else {
      const alerta = getAlertMessages("Usuario no existe");

      dispatch(mostrarAlertaAction(alerta));
      setTimeout(() => {
        dispatch(ocultarAlertaAction());
      }, 3000);
      return;
    }
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
              style={{backgroundImage:"url('../assets/logo-login.png')", 
                      backgroundSize:"100% 100%", 
                      backgroundRepeat:"no-repeat"}}>
        </div>

        <div className="contenedor-form-signin col-sm-4 col-md-4 col-lg-4 col-xl-3 col-full-height">
            <form
              onSubmit={submitNuevoUsuario}
              className="form-signin"
              autoComplete="off"
            >
              <div style={{marginBottom: "20%"}}>
                <span style={{textAlign:"center", marginInlineStart:"center"}}>¿No tienes una cuenta?</span><br/>
                <Link to={"/Registro"} type="text" style={{textAlign:"center"}}>
                  Registrese
                </Link>
              </div>

              <h5 className="h3 mb-3 mt-3" style={{fontSize:"12"}}>Registrate en pasaporte digital</h5>
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
                    name="nombreusuarioLogin"
                    value={nombreusuarioLogin}
                    onChange={(e) => guardarnombreusuario(e.target.value)}
                />

                <label htmlFor="txt-pass">Contraseña</label>
                <input
                    id="txt-pass"
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    name="constraseñaLogin"
                    value={constraseñaLogin}
                    onChange={(e) => guardarconstraseña(e.target.value)}
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

        <div className="col-sm-12 col-md-12 foot-image-login"
             style={{
               backgroundImage: "url('../assets/logo-login.png')",
               backgroundSize: "100% 100%",
               backgroundRepeat: "no-repeat",
               minHeight: "300px",
               width: "100%"
             }}>
        </div>

      </div>
      </React.Fragment>
  );
};
