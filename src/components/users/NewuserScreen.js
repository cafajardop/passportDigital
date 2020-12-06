import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TypeDocument from "../../hooks/useTypeDocument";
import { useHistory } from "react-router-dom";
import RoleUsers from "../../hooks/useRoleUsers";

/**Actions Redux */
import { crearNuevoUsuarioAction } from "../../actions/usuarioActions";
import {
  mostrarAlertaAction,
  ocultarAlertaAction,
} from "../../actions/alertaActions";

const NewuserScreen = (props) => {
  
  const history = useHistory();
  /**State del componente */
  const [repetirconstraseña, guardarrepetircontraseña] = useState("");
  const [password, showPassword] = useState("password");
  const [password2, showPassword2] = useState("password");
  const [usuario, guardarusuario] = useState({
    nombreusuario: "",
    primernombre: "",
    segundonombre: "",
    primerapellido: "",
    segundoapellido: "",
    telefono: "",
    Password: "",
    rol: "",
    cedula: "",
    tipodocumento: "",
    email: "",
    direccion: "",
    direccion2: "",
    observacion: "",
    ingreso: false,
  });

  const {
    nombreusuario,
    primernombre,
    segundonombre,
    primerapellido,
    segundoapellido,
    telefono,
    Password,
    rol,
    cedula,
    tipodocumento,
    email,
    direccion,
    direccion2,
    observacion,
    ingreso,
  } = usuario;

  const documento = TypeDocument();
  const roles = RoleUsers();

  /**Acceder al state del store */
  const cargando = useSelector((state) => state.usuarios.state);
  const error = useSelector((state) => state.usuarios.error);
  const alerta = useSelector((state) => state.alerta.alerta);

  const onChange = (e) => {
    guardarusuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  /**Utilizar dispatch y crear funcion */
  const dispatch = useDispatch();

  /**Enviar la accion */
  const agregarUsuario = (usuario) =>
    dispatch(crearNuevoUsuarioAction(usuario));

  /**Enviando Datos */
  const submitNuevoUsuario = (e) => {
    e.preventDefault();

    /**Validar Formulario */
    if (
      primerapellido.trim() === "" ||
      segundoapellido.trim() === "" ||
      primernombre.trim() === "" ||
      tipodocumento.trim() === "" ||
      cedula.trim() === ""
    ) {
      const alerta = {
        msg: "Campos Obligatorios",
        classes: "alert alert-danger text-center text-uppercase p3",
      };

      dispatch(mostrarAlertaAction(alerta));
      return;
    }

    if (Password.trim() !== repetirconstraseña.trim()) {
      console.log("las contraseñas deben ser iguales");
      return;
    }

    /**Si no hay errores */
    dispatch(ocultarAlertaAction());

    /**Crear nuevo usuario */
    agregarUsuario({
      ...usuario,
    });

    /**Redireccionar */
    props.info.history.push("/listadousuarios");
  };

  const redireccionarNuevo = () => {
    history.push("/listadousuarios");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="col-sm-12 order-sm-1">
          <h2 className="mb-3 align-self-center text-center mt-4">
            {" "}
            Agregar Funcionario Externo{" "}
          </h2>
          <hr />
          {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}

          <form onSubmit={submitNuevoUsuario} autoComplete="off">
            <div className="form-row">
              <div className="form-group col-sm-6">
                <label>email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>

              <div className="form-group col-sm-6">
                <label>Rol</label>
                <select
                  type="text"
                  className="form-control"
                  name="rol"
                  value={rol}
                  onChange={onChange}
                >
                  <option value="">-- Seleccione --</option>
                  {roles.map((roles) => (
                    <option key={roles._id} value={roles.rol}>
                      {roles.rol}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-sm-3">
                <label>Primer Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Primer apellido"
                  name="primerapellido"
                  value={primerapellido}
                  onChange={onChange}
                />
              </div>

              <div className="form-group col-sm-3">
                <label>Segundo Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Segundo apellido"
                  name="segundoapellido"
                  value={segundoapellido}
                  onChange={onChange}
                />
              </div>

              <div className="form-group col-sm-3">
                <label>Primer Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Primer nombre"
                  name="primernombre"
                  value={primernombre}
                  onChange={onChange}
                />
              </div>

              <div className="form-group col-sm-3">
                <label>Segundo Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Segundo nombre"
                  name="segundonombre"
                  value={segundonombre}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-sm-4">
                <label>Documento de Identidad</label>

                <select
                  type="text"
                  className="form-control"
                  name="tipodocumento"
                  value={tipodocumento}
                  onChange={onChange}
                >
                  <option value="">-- Seleccione --</option>
                  {documento.map((docu) => (
                    <option key={docu._id} value={docu.tipodocumento}>
                      {docu.tipodocumento}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group col-sm-4">
                <label>Cedula</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cedula"
                  name="cedula"
                  value={cedula}
                  onChange={onChange}
                />
              </div>

              <div className="form-group col-sm-4">
                <label>Telefono</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Telefono"
                  name="telefono"
                  value={telefono}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-sm-4">
                <label>Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Usuario"
                  name="nombreusuario"
                  value={nombreusuario}
                  onChange={onChange}
                />
              </div>

              <div className="form-group col-sm-4">
                <label>Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Direccion"
                  name="direccion"
                  value={direccion}
                  onChange={onChange}
                />
              </div>

              <div className="form-group col-sm-4">
                <label>Dirección 2</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Direccion2"
                  name="direccion2"
                  value={direccion2}
                  onChange={onChange}
                />
              </div>
            </div>
              
            <div className="form-row">
              <div className="form-group col-sm-6">
                  <label htmlFor="txt-pass2">Asigne una Contraseña</label>
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
                    <a onClick={(e) => showPassword(password === "password" ? "text" : "password")}>
                      <i className={ password === "password" ? "fa fa-eye-slash": "fa fa-eye" }aria-hidden="true"></i>
                    </a>
                  </div>
              </div>

              <div className="form-group col-sm-6">
                    <label htmlFor="txt-pass">Repetir Contraseña</label>
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

            <div className="form-group">
              <label>Observaciones</label>
              <textarea
                className="form-control"
                rows="4"
                className="form-control"
                name="observacion"
                value={observacion}
                onChange={onChange}
              ></textarea>
            </div>

            <div className="form-row mt-3">
              <div className="form-group mr-2">
                <button type="submit" className="btn-ecopetrol">
                  Guardar
                </button>
              </div>

              <div className="form-group">
                <button
                  onClick={() => redireccionarNuevo()}
                  className="btn-ecopetrol"
                >
                  Cancelar
                </button>
              </div>
            </div>
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
  );
};

export default NewuserScreen;
