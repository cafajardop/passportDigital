import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editarUsuarioAction } from "../actions/usuarioActions";
import { useHistory } from "react-router-dom"; /**Redireccionamiento  */
import { Link } from "react-router-dom";

const EditarUsuario = () => {
  const history = useHistory();
  console.log(history);
  const dispatch = useDispatch();

  /**Nuevo state */
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    cedula: "",
  });

  /**Usuario a editar */
  const usuarioEditar = useSelector((state) => state.usuarios.usuarioEditar);

  /**Llenado de información edición */
  useEffect(() => {
    guardarUsuario(usuarioEditar);
  }, [usuarioEditar]);

  /**Leer los datos del formulario */
  const onChangeFormulario = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const { nombre, cedula } = usuario;

  const submitEditarUsuario = (e) => {
    e.preventDefault();

    dispatch(editarUsuarioAction(usuario));
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <div className="col-sm-12 order-sm-1">
              <h4 className="mb-3 align-self-center text-center mb-5">Datos del Funcionario</h4>

              <form 
                  autocomplete="off" 
                  onSubmit={submitEditarUsuario}
              > 
                
                <div className="form-row">
                  <div className="form-group col-sm-3">
                    <label for="inputEmail4">Primer Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Cedula"
                      name="nombre"
                      value={nombre}
                      onChange={onChangeFormulario}
                    />
                  </div>

                  <div className="form-group col-sm-3">
                    <label for="inputPassword4">Segundo Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Cedula"
                      name="cedula"
                      value={cedula}
                      onChange={onChangeFormulario}
                    />
                  </div>

                  <div className="form-group col-sm-3">
                    <label for="inputEmail4">Primer Nombre</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="form-group col-sm-3">
                    <label for="inputPassword4">Segundo Nombre</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-sm-4">
                    <label for="inputState">Documento de Identidad</label>
                    <select id="inputState" className="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>

                  <div className="form-group col-sm-4">
                    <label for="inputCity">Cedula</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>

                  <div className="form-group col-sm-4">
                    <label for="inputCity">Telefono</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-sm-4">
                    <label for="inputAddress">Correo</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>

                  <div className="form-group col-sm-4">
                    <label for="inputAddress">Dirección</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>

                  <div className="form-group col-sm-4">
                    <label for="inputAddress2">Dirección 2</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="Apartment, studio, or floor"
                    />
                  </div>
                </div>

                <div className="form-row mt-4">
                  <div className="form-group col-sm-6 align-self-center text-right mr-2">
                    <button type="submit" className="btn btn-primary btn-sm">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarUsuario;
