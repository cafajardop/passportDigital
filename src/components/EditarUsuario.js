import React, {useState,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { editarUsuarioAction } from '../actions/usuarioActions';
import { useHistory } from 'react-router-dom';/**Redireccionamiento  */

const EditarUsuario = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  /**Nuevo state */
  const [usuario, guardarUsuario] = useState({
    nombre:'',
    cedula:''
  });

  /**Usuario a editar */
  const usuarioEditar = useSelector(state => state.usuarios.usuarioEditar);

  /**Llenado de información edición */
  useEffect(() => {
    guardarUsuario(usuarioEditar)
  }, [usuarioEditar])

  /**Leer los datos del formulario */
  const onChangeFormulario = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }

  const {nombre, cedula} = usuario;

  const submitEditarUsuario = e =>{
    e.preventDefault();

    dispatch(editarUsuarioAction(usuario));;
    history.push('/');
  }

  return (
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Editar Usuario
              </h2>

              <form
                onSubmit={submitEditarUsuario}
              >
                <div className="form-group">
                  <label>Nombres</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Usuario"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeFormulario}
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
                    onChange={onChangeFormulario}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Guardar Cambios
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default EditarUsuario;
