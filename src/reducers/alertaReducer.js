import {
  MOSTRAR_ALERTA,
  OCULTAR_ALERTA
}from '../types';

/**Cada reducer debe tener su propio state */
const initialState = {
  alerta: null
}

 function adminAlert(state = initialState, action){
  switch(action.type){
    case MOSTRAR_ALERTA:
      return{
        ...state,
        alerta: action.payload
      }
    case OCULTAR_ALERTA:
      return{
        ...state,
        alerta: null
      }
    default:
      return state;
  }
}

export default adminAlert;