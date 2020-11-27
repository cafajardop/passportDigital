import {
  LOGIN_EXITO, LOG_OUT
} from '../types';

export function mostrarEstadoLoginAction(login){
  return(dispatch)=>{
    dispatch(mostrarloginError(login))
  }
}

const mostrarloginError = login => ({
  type: LOGIN_EXITO,
  payload: login
});


export function logOutAction() {
  return {
    type: LOG_OUT
  }
}
