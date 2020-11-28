import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/**Actions Redux */
import {mostrarAlertaAction, ocultarAlertaAction} from "../../actions/alertaActions";
import {mostrarEstadoLoginAction} from '../../actions/estadoLoginActions';
import styled from 'styled-components';

const Contenedor = styled.div`
  max-width: 700px;
  margin: 0 auto;
  margin-top: 200px;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
}`;

const Login = ({eventLogin}) => {
  /**State del componente */
  const [nombre, guardarnombre] = useState("");
  const [cedula, guardarCedula] = useState("");

  /**Acceder al state del store */
  const cargando = useSelector((state) => state.usuarios.state);
  const error = useSelector((state) => state.usuarios.error);
  const alerta = useSelector((state) => state.alerta.alerta);

  /**Utilizar dispatch y crear funcion */
  const dispatch = useDispatch();

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
      eventLogin(true);
      return;
    }

    console.log(dispatch);

    /**Si no hay errores */
    dispatch(ocultarAlertaAction());
    dispatch(mostrarEstadoLoginAction(false));
    eventLogin(false);
  };

  return (
    <Contenedor>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">Login</h2>

              {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}

              <form onSubmit={submitNuevoUsuario}>
                <div className="form-group">
                  <label>Usuario y/o Correo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Usuario"
                    name="nombre"
                    value={nombre}
                    onChange={(e) => guardarnombre(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Cedula</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cedula"
                    name="cedula"
                    value={cedula}
                    onChange={(e) => guardarCedula(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Ingresar
                </button>
              </form>

              {cargando ? <p>Cargando..</p> : null}
              {error ? (
                <p className="alert alert-danger p2 mt-4 text-center">
                  Hubo un error
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
  </Contenedor>
  );
};

export default Login;
