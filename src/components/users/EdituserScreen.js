import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editarUsuarioAction } from "../../actions/usuarioActions";
import { useHistory } from "react-router-dom"; /**Redireccionamiento  */
import TypeDocument from "../../hooks/useTypeDocument";
import RoleUsers from "../../hooks/useRoleUsers";


const EdituserScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  /**Nuevo state */
  const [usuario, guardarUsuario] = useState({        
    ingreso: "",
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
    observacion:""
  });

  const {    
    nombreusuario,
    rol,
    primerapellido,
    segundoapellido,
    primernombre,
    segundonombre,
    cedula,
    tipodocumento,
    telefono,
    correo,
    direccion,
    direccion2,
    observacion
  } = usuario;

  /**Consumir hook tipo documento */
  const documento = TypeDocument();
  const roles = RoleUsers();

  /**User a editar */
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

  const submitEditarUsuario = (e) => {
    e.preventDefault();    
    dispatch(editarUsuarioAction(usuario));
    history.push("/");
  };

  const redireccionarNuevo = () => {
    history.push("/");
  };

  return (
    <div className="col-sm-12 order-sm-1">
      <h2 className="mb-3 align-self-center text-center mt-4">        
        Datos del Funcionario
      </h2>
      <hr />
      <form 
        onSubmit={submitEditarUsuario} 
        autoComplete="off">

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

            <select
              type="text"
              className="form-control"
              name="rol"
              value={rol}
              onChange={onChangeFormulario}
            >
              <option value="">-- Seleccione --</option>
              {roles.map((roles) => (
                <option key={roles.id} value={roles.rol}>
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
                <option key={categoria.IdTip} value={categoria.Descripcion}>
                  {categoria.Descripcion}
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

        <div className="form-group">
          <label>Observaciones</label>
          <textarea 
            className="form-control"             
            rows="4"
            className="form-control"            
            name="observacion"
            value={observacion}
            onChange={onChangeFormulario}
            >
          </textarea>
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
    </div>
  );
};

export default EdituserScreen;
