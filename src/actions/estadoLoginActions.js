import {
  LOGIN_EXITO
}from '../types';

export function mostrarEstadoLoginAction(login){
  return(dispatch)=>{
    dispatch(mostrarloginError(login))
  }
}

const mostrarloginError = login => ({
  type: LOGIN_EXITO,
  payload: login
})