import {
  AGREGAR_USUARIO,
  AGREGAR_USUARIO_EXITO,
  AGREGAR_USUARIO_ERROR,
  COMENZAR_OBTENER_USUARIOS,
  DESCARGA_USUARIOS_EXITO,
  DESCARGA_USUARIOS_ERROR,
  OBTENER_USUARIO_ELIMINAR,
  USUARIO_ELIMINADO_EXITO,
  USUARIO_ELIMINADO_ERROR,
  OBTENER_USUARIO_EDITAR,
  COMENZAR_EDITAR_USUARIO,
  USUARIO_EDITADO_EXITO,
  USUARIO_EDITADO_ERROR,
  REGISTRO_USUARIO,
  REGISTRO_USUARIO_EXITO,
  REGISTRO_USUARIO_ERROR
} from "../types";

import http from "../http/http";
import Swal from "sweetalert2";

/**Creacion de usuarios */
export function crearNuevoUsuarioAction(usuario) {
  return async (dispatch) => {
    dispatch(agreagarUsuario());
    /**Consulta a la base de datos */
    http.post("usuarios", usuario).then( resp => {
      dispatch(agregarUsuarioExito(usuario));
      Swal.fire(
          "Correcto",
          `El Usuario con el id: ${usuario.cedula} se creo correctamente`,
          "success"
      );
    }).catch(err => {
      console.log(err);
      dispatch(agregarUsuarioError(true));
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta de nuevo",
      });
    });
  };
}

const agreagarUsuario = () => ({
  type: AGREGAR_USUARIO,
  payload: true,
});

/**Si usuario se guarda en la base de datos */
const agregarUsuarioExito = (usuario) => ({
  type: AGREGAR_USUARIO_EXITO,
  payload: usuario,
});

/**Si hay error */
const agregarUsuarioError = (estado) => ({
  type: AGREGAR_USUARIO_ERROR,
  payload: estado,
});

/**Función que obtiene los usuarios de la BD */
export function obtenerUsuariosAction() {
  return async (dispatch) => {
    dispatch(obtenerUsuarios());
    http.get("usuarios").then(response => {
      dispatch(getUsuariosExito(response.data));
    }).catch(err => {
      console.log(err);
      dispatch(getUsuariosError());
    });
  };
}

const obtenerUsuarios = () => ({
  type: COMENZAR_OBTENER_USUARIOS,
  payload: true,
});

const getUsuariosExito = (usuarios) => ({
  type: DESCARGA_USUARIOS_EXITO,
  payload: usuarios,
});

const getUsuariosError = () => ({
  type: DESCARGA_USUARIOS_ERROR,
  payload: true,
});


/**Selecciona y elimina usuario */
export function borrarUsuarioAction(id){
  return async (dispatch) => {
    dispatch(obtenerUsuarioEliminar(id));
    http.delete(`usuarios/${id}`).then(resp => {
      dispatch( eliminarUsuarioExito());
      Swal.fire(
          'Eliminado!',
          'El usuario se eliminó correctamente.',
          'success'
      )
    }).catch(err => {
      console.log(err);
      dispatch( eliminarUsuarioError() );
    });
  }
}

const obtenerUsuarioEliminar = id => ({
  type: OBTENER_USUARIO_ELIMINAR,
  payload: id
});

const eliminarUsuarioExito = () =>({
    type:USUARIO_ELIMINADO_EXITO
});

const eliminarUsuarioError = () => ({
  type: USUARIO_ELIMINADO_ERROR,
  payload: true
})

//**Edición de usuario */
export function obtenerUsuarioEditarAction(usuario){
  return(dispatch)=>{
    dispatch(obtenerUsuarioEditar(usuario))
  }
}

const obtenerUsuarioEditar = usuario => ({
  type: OBTENER_USUARIO_EDITAR,
  payload: usuario
});

/**Actualiza un registro en la api y state */
export function editarUsuarioAction(usuario){
  return async (dispatch) =>{
    dispatch(editarUsuario(usuario));
    http.put(`usuarios/${usuario.id}`, usuario).then(resp => {
      dispatch(editarUsuarioExito(usuario));
    }).catch(err => {
      console.log(err);
      dispatch(editarUsuarioError())
    });
  }
}

const editarUsuario = usuario => ({
  type: COMENZAR_EDITAR_USUARIO,
  payload: usuario
});

const editarUsuarioExito = usuario => ({
  type:USUARIO_EDITADO_EXITO,
  payload:usuario
});

const editarUsuarioError = () => ({
  type: USUARIO_EDITADO_ERROR,
  payload: true
});

/**Registro Usuario */
export function registroUsuarioAction(usuario) {
  return async (dispatch) => {
    dispatch(registrorUsuario());
    /**Consulta a la base de datos */
    http.post("usuarios", usuario).then( resp => {
      
      Swal.fire(
        "Correcto",
        `Registro Exitoso Inicie Sesión`,
        "success"
        );  

      setTimeout(() => {
        dispatch(registroUsuarioExito(usuario));
      }, 3000);

    }).catch(err => {
      console.log(err);
      dispatch(registroUsuarioError(true));
      Swal.fire({
        icon: "error",
        title: "Hubo un error al registrarse",
        text: "Hubo un error, intenta de nuevo",
      });
    });
  };
}

const registrorUsuario = () => ({
  type: REGISTRO_USUARIO,
  payload: true,
});

/**Si usuario se guarda en la base de datos */
const registroUsuarioExito = (usuario) => ({
  type: REGISTRO_USUARIO_EXITO,
  payload: usuario,
});

/**Si hay error */
const registroUsuarioError = (estado) => ({
  type: REGISTRO_USUARIO_ERROR,
  payload: estado,
});