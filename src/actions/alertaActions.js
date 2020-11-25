import {
  MOSTRAR_ALERTA,
  OCULTAR_ALERTA
}from '../types';

/**Mostrar alerta no usamos async ni await por lo que
 * no consultamos bases de datos
*/
export function mostrarAlertaAction(alerta){
  return(dispatch)=>{
    dispatch(mostrarAlertaError(alerta))
  }
}

const mostrarAlertaError = alerta => ({
  type: MOSTRAR_ALERTA,
  payload: alerta
})


/**Ocultar alerta */
export function ocultarAlertaAction(){
  return (dispatch) =>{
    dispatch ( ocultarAlerta())
  }
}

const ocultarAlerta = () => ({
  type: OCULTAR_ALERTA
})