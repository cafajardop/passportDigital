import {
  LOG_OUT,
  LOGIN_EXITO,
  COMENZAR_OBTENER_USUARIOSLOGIN,
  OBTENER_USUARIOLOGIN_EXITO,
  OBTENER_USUARIOLOGIN_ERROR
} from '../types';

const initialState = {
  login: null,
  error: null,
  usuario: [],
  loading: false,
}

export default function (state = initialState, action){
  switch(action.type){
    case LOGIN_EXITO:
      return{
        ...state,
        login: action.payload
      }      
    case LOG_OUT:
      return {
        ...state,
        login: initialState
      }
    case COMENZAR_OBTENER_USUARIOSLOGIN:
      return{
        ...state,
        loading: action.payload
      }
    case OBTENER_USUARIOLOGIN_EXITO:
      return {
         ...state,
        loading: false,
        error: false,
        usuario: action.payload,
      }
    case OBTENER_USUARIOLOGIN_ERROR:
      return{
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}