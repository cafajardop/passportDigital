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
  USUARIO_EDITADO_ERROR
} from "../types";

import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

/**Creacion de usuarios */
export function crearNuevoUsuarioAction(usuario) {
  return async (dispatch) => {
    dispatch(agreagarUsuario());
    /**Consulta a la base de datos */
    try {
      await clienteAxios.post("/usuarios", usuario);
      dispatch(agregarUsuarioExito(usuario));
      Swal.fire(
        "Correcto",
        `El Usuario con el id: ${usuario.cedula} se creo correctamente`,
        "success"
      );
    } catch (error) {
      dispatch(agregarUsuarioError(true));
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta de nuevo",
      });
    }
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
    try {
      const respuesta = await clienteAxios.get("/usuarios");
      dispatch(getUsuariosExito(respuesta.data));
    } catch (error) {
      dispatch(getUsuariosError());
    }
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
  return async (dispatch)=>{
    dispatch(obtenerUsuarioEliminar(id));
    try {
        await clienteAxios.delete(`/usuarios/${id}`)
        dispatch( eliminarUsuarioExito());

        Swal.fire(
          'Eliminado!',
          'El usuario se eliminó correctamente.',
          'success'
        )
    } catch (error) {
        console.log(error);
        dispatch( eliminarUsuarioError() );
    }
  }
}

const obtenerUsuarioEliminar = id => ({
  type: OBTENER_USUARIO_ELIMINAR,
  payload: id
});

const eliminarUsuarioExito = () =>({
    type:USUARIO_ELIMINADO_EXITO
})

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
})

/**Actualiza un registro en la api y state */
export function editarUsuarioAction(usuario){
  return async (dispatch) =>{
    dispatch(editarUsuario(usuario));
    try {
      await clienteAxios.put(`/usuarios/${usuario.id}`,usuario);
      dispatch(editarUsuarioExito(usuario))
    } catch (error) {
      console.log(error);
      dispatch(editarUsuarioError())    
    }
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

