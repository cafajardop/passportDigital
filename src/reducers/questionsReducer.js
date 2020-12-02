/*Importar Reducers*/
import {CONSULTAR_PREGUNTAS, COMENZAR_OBTENER_PREGUNTAS, DESCARGA_PREGUNTAS_EXITO, DESCARGA_PREGUNTAS_ERROR}
from '../types'


/*Esatado inicial del reducer*/
const initialState = {
  questions: [],
  error: null,
  loading: false,
  questionDelete: null,
  questionEdit: null
};

export default function (state = initialState, action) {
    switch (action.type) {
      case COMENZAR_OBTENER_PREGUNTAS:
          return{
            ...state,
            loading: action.payload
          }
        break;
        case CONSULTAR_PREGUNTAS:
          return state;
        break;
        case DESCARGA_PREGUNTAS_EXITO:
          return {
            ...state,
            loading: false,
            error: null,
            questions: action.payload,
          };
          case DESCARGA_PREGUNTAS_ERROR:
            return {
              ...state,
              loading: false,
              error: action.payload,
            };
      default:
        return state;
      break;

    }
}
