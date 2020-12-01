import {
  REGISTRO_CUESTIONARIO,
  REGISTRO_CUESTIONARIO_EXITO,
  REGISTRO_CUESTIONARIO_ERROR} from '../types';


  /*Esatado inicial del reducer*/
const initialState = {
  replies: [],
  error: null,
  loading: false,
  repliesDelete: null,
  repliesEdit: null
};


export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTRO_CUESTIONARIO:
          return {
            ...state,
            loading: action.payload,
          };
          case REGISTRO_CUESTIONARIO_EXITO:
            return {
              ...state,
              loading: false,
              replies: [...state.replies, action.payload],
            };
          case REGISTRO_CUESTIONARIO_ERROR:
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
