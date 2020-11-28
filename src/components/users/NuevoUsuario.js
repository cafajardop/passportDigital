import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

/**Actions Redux */
import { crearNuevoUsuarioAction } from "../../actions/usuarioActions";
import {
  mostrarAlertaAction,
  ocultarAlertaAction,
} from "../../actions/alertaActions";

const NuevoUsuario = (props) => {
  /**State del componente */
  const [usuario, guardarnombre] = useState({
    primerapellido: "",
    segundoapellido: "",
    primernombre: "",
    segundonombre: "",
    cedula: "",
    tipodocumento: "",
    telefono:"",
    correo:"",
    direccion:"",
    direccion2:""
  });

  const {primerapellido,segundoapellido, primernombre, segundonombre,cedula,tipodocumento, telefono, correo, direccion, direccion2 } = usuario;

  const [documento, guardardocumento] = useState([]);
  useEffect(() => {
    const obtenerTipoDocumento = async () => {
      const url = "http://localhost:4000/tipodocumento";
      const tipdocumentos = await axios.get(url);
      guardardocumento(tipdocumentos.data);
    };
    obtenerTipoDocumento();
  }, []);


  /**Acceder al state del store */
  const cargando = useSelector((state) => state.usuarios.state);
  const error = useSelector((state) => state.usuarios.error);
  const alerta = useSelector((state) => state.alerta.alerta);

  const onChange = (e) => {
    guardarnombre({
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
    if (primerapellido.trim() === "" || segundoapellido.trim() === "" || primernombre.trim() === "" || tipodocumento.trim() === "" || cedula.trim() === "") {
      const alerta = {
        msg: "Campos Obligatorios",
        classes: "alert alert-danger text-center text-uppercase p3",
      };

      dispatch(mostrarAlertaAction(alerta));
      return;
    }

    /**Si no hay errores */
    dispatch(ocultarAlertaAction());

    /**Crear nuevo usuario */
    agregarUsuario({
      ...usuario,
    });

    /**Redireccionar */
    props.info.history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <div className="col-sm-12 order-sm-1">
              <h4 className="mb-3 align-self-center text-center mb-5">Agregar Funcionario Externo </h4>
              {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}

              <form
                onSubmit={submitNuevoUsuario}
                autocomplete="off"
                >

                <div className="form-row">
                  <div className="form-group col-sm-3">
                  <label>Primer Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Primer Apellido"
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
                        placeholder="Segundo Apellido"
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
                        placeholder="Primer Nombre"
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
                        placeholder="Segundo Nombre"
                        name="segundonombre"
                        value={segundonombre}
                        onChange={onChange}
                      />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-sm-4">

                  <label>Tipo Documento</label>
                    <select
                        className="form-control"
                        name="tipodocumento"
                        value={tipodocumento}
                        onChange={onChange}
                        >
                      <option value="">-- Seleccione --</option>
                      {documento.map((categoria) => (
                        <option
                              key={categoria.id}
                              value={categoria.value}>
                          {categoria.value}
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
                    <label>Correo</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Correo"
                        name="correo"
                        value={correo}
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

                <div className="form-row mt-3">
                  <div className="form-group mr-2">
                    <button
                        type="submit">
                      Guardar
                    </button>
                  </div>

                  <div className="form-group">
                    <Link
                      to={"/"}
                      type="submit"
                      className="btn btn-danger btn-sm"
                    >
                      Cancelar
                    </Link>
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
      </div>
    </div>
  );
};

export default NuevoUsuario;
