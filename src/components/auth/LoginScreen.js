import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

/**Actions Redux */
import {
  mostrarAlertaAction,
  ocultarAlertaAction,
} from "../../actions/alertaActions";
import { mostrarEstadoLoginAction } from "../../actions/estadoLoginActions";
import styled from "styled-components";

const Contenedor = styled.div`    
height:100vh;
display: grid;
background-color: #0F0C5A;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;
grid-auto-rows: 380px;
grid-template-areas: 
  ". a a ."
  ". a a .";  
}`;

const SideBar = styled.div`
  grid-area: a;
  align-self: center;
  justify-self: center;
  width: 50%;
`;

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

    /**Si no hay errores */
    dispatch(ocultarAlertaAction());
    dispatch(mostrarEstadoLoginAction(false));

    history.push("/");
  };

  return (
    <Contenedor>
      <SideBar>
        <div class="card">
          <div class="card-body">
            <div className="col-md-12">
              <div className="align-self-center text-center ml-3">
                <a className="navbar-brand">
                  <img
                    src="data:image/jpeg;base64,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951/Iafet3G9maVtvNffyjp+ff8ARjfmTPuwlGNAFhoAvUUpWlYrWNRCnM76y56yhbJx0PUf71XP5/heDmRu8at6x3/7bMWa2PsjzgzuTh8CvPW9l8m/q5I19krcc2PR7qfCADdxzeXAf+Ve4ns3ix282a3m+XaPv9WrJy7TGqxpJgL0kRERqFRmm0W6YVVTNUmrLO2dmy9iHW0AtfOL8OiyidK9+P5p3tdNkcD9ipIqUP7Tss/fy5b53uf4bm3itx5JMttK+WukwoZiCu7X7HU2IMAmBa9nglZYPb5aizm+R+5IYXxxeOrNqjcpOD3KuJzeRcxzTb0BKy8ytPF+aTwTcvG1wdVVBkA/m429mD5OeSTb0APmk2ZV40R3alRUkcTGxRtaxjBZrWiwAHIBYrURpD7a7Oe30xpjJ2V3tfmy5/DytcfNTDDJTzRpV9k91goquKqFUZOyz9zsg2+djmeLObeK/Dkm2qmCK23toyhYZntDulFVUzVPtZZ2zs2XsQ62gFr59eHRTEq9+P5rb2umyOB+xUkVJn7Tss/fy5b55HP8Nza2a3HkobqV8tdK3ttu0ir5xUCYwvLQ19ow8PLfC7xCxA08wB0UxLVkwRedvdsLsG/DZJHNqzLHK2zozFlGYeF4Oc2I1HDUH0SZTjxeT4p3afZmmrouynZe2rHtNnsJ5td+BuDzChnekXjUsxrdycuY9jVsLeQkYWkeRLSQfWwWUWV54vpLswbcs0ODqqpL2j6kTcl/IyE3t6AHzCeZNeNEd5anQUUcMbIomNZGwWa1osAP981isxER0hStt924xCpFQakxWjbHlEWfwlxvfOPtdOSmJacmHzzvav8A7yLf6a79AP8AuKfM1/4seryj3JtBB9tOhB/iBy/vFG0xxoie7W1C0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/2Q=="
                    className="rounded"
                    width="250"
                    height="120"
                    alt=""
                  />
                </a>
              </div>
              <h2 className="text-center mb-4 font-weight-bold">Pasaporte Digital</h2>
              <h5 className="text-center mb-4 font-weight-bold">Login</h5>

              {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}

              <form onSubmit={submitNuevoUsuario}>
                <div className="form-group">
                  <small>Inicie sesión mediante su cuenta corporativa</small>
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="alguien@example.com"
                    name="nombre"
                    value={nombre}
                    onChange={(e) => guardarnombre(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    name="cedula"
                    value={cedula}
                    onChange={(e) => guardarCedula(e.target.value)}
                  />
                </div>
                <div class="row">
                  <div class="col">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        placeholder="Check"
                        name="check"
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Recuerdame
                      </label>
                    </div>
                  </div>

                  <div class="col align-self-center text-right">
                    <Link
                      to={"/Registro"}
                      type="text"
                      >
                          Registrarse
                    </Link>
                  </div>

                </div>

                <button
                  type="submit"
                  className="text-uppercase d-block w-100 mt-4 mb-3"
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
      </SideBar>
    </Contenedor>
  );
};
