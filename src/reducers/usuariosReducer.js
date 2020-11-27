/**2. Importar Reducers */
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
  USUARIO_EDITADO_EXITO,
  USUARIO_EDITADO_ERROR
} from "../types";

/**1. Cada reducer tiene su propio state */
const initialState = {
  usuarios: [],
  error: null,
  loading: false,
  usuarioEliminar: null,
  usuarioEditar: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case COMENZAR_OBTENER_USUARIOS:
    case AGREGAR_USUARIO:
      return {
        ...state,
        loading: action.payload,
      };
    case AGREGAR_USUARIO_EXITO:
      return {
        ...state,
        loading: false,
        usuarios: [...state.usuarios, action.payload],
      };
    case AGREGAR_USUARIO_ERROR:
    case DESCARGA_USUARIOS_ERROR:
    case USUARIO_ELIMINADO_ERROR:
    case USUARIO_EDITADO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DESCARGA_USUARIOS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        usuarios: action.payload,
      };
    case OBTENER_USUARIO_ELIMINAR:
      return {
        ...state,
        usuarioEliminar: action.payload        
      }
    case USUARIO_ELIMINADO_EXITO:
      return{
        ...state,        
        usuarios: state.usuarios.filter(usuario => usuario.id !== state.usuarioEliminar),
        usuarioEliminar: null
      }
    case OBTENER_USUARIO_EDITAR:
      return{
        ...state,
        usuarioEditar: action.payload
      }
    case USUARIO_EDITADO_EXITO:
      return {
        ...state,
        usuarioEditar:null,
        usuarios: state.usuarios.map(usuario => 
            usuario.id === action.payload.id ? usuario = action.payload : usuario
          )
      }
    default:
      return state;
  }
}
