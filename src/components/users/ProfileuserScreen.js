import React,{useState,useEffect} from "react";
import { editarUsuarioAction } from "../../actions/usuarioActions";
import TypeDocument from "../../hooks/useTypeDocument";
import { useDispatch, useSelector } from "react-redux";
import {obtenerUsuarioEditarAction} from '../../actions/usuarioActions';

const ProfileuserScreen = ({usuario}) => {
  
  const dispatch = useDispatch();  
  dispatch( obtenerUsuarioEditarAction(usuario));

  const [usuarioprofile, guardarUsuario] = useState({
    nombreusuario: "",
    rol: "",
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
  });

  const { nombreusuario,rol,primerapellido,segundoapellido, primernombre, segundonombre,
          cedula,tipodocumento,telefono, correo, direccion, direccion2} = usuarioprofile; 

  /**Hook tipo documento */  
  const documento = TypeDocument();
  
  /**User a editar */
  const usuarioEditar = useSelector((state) => state.usuarios.usuarioEditar);

  /**Llenado de información edición */
  useEffect(() => {
    guardarUsuario(usuarioEditar);
  }, [usuarioEditar]);

  /**Leer los datos del formulario */
  const onChangeFormulario = (e) => {
    guardarUsuario({
      ...usuarioprofile,
      [e.target.name]: e.target.value,
    });
  };

  const submitEditarUsuario = (e) => {
    e.preventDefault();
    dispatch(editarUsuarioAction(usuarioprofile));
  };

  return (
    <>
     <div className="col-sm-12 order-sm-1">
      <h2 className="mb-3 align-self-center text-center mt-4">
        {" "}
        Datos del Funcionario{" "}
      </h2>
      <hr />
      <form 
        onSubmit={submitEditarUsuario}
        autoComplete="off"
        > 
        <div className="form-row">
          <div className="form-group col-sm-6">
            <label>Usuario</label>
            <input
              type="text"
              className="form-control"
              placeholder="Usuario"
              name="nombreusuario"
              value={nombreusuario}
              onChange={onChangeFormulario}
              disabled
            />
          </div>

          <div className="form-group col-sm-6">
            <label>Rol</label>
            <input
              type="text"
              className="form-control"
              placeholder="Rol"
              name="rol"
              value={rol}
              onChange={onChangeFormulario}
              disabled
            />
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
              onChange={onChangeFormulario}
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
              onChange={onChangeFormulario}
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
              onChange={onChangeFormulario}
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
              onChange={onChangeFormulario}
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
              onChange={onChangeFormulario}
            >
              <option value="">-- Seleccione --</option>
              {documento.map((categoria) => (
                <option key={categoria.id} value={categoria.value}>
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
              onChange={onChangeFormulario}
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
              onChange={onChangeFormulario}
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
              onChange={onChangeFormulario}
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
              onChange={onChangeFormulario}
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
              onChange={onChangeFormulario}
            />
          </div>
        </div>

        <div className="form-row mt-3">
          <div className="form-group mr-2">
            <button type="submit" className="btn-ecopetrol">
              Guardar
            </button>
          </div>          
        </div>
      </form>
    </div>
    </>
  );
};

export default ProfileuserScreen;