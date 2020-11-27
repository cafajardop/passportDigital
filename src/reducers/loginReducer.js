import {
  LOG_OUT,
  LOGIN_EXITO
} from '../types';


const initialState = {
  login: null
}

export default function (state = initialState, action){
  switch(action.type){
    case LOGIN_EXITO:
      return{
        ...state,
        login: action.payload
      }
      break;
    case LOG_OUT:
      return {
        ...state,
        login: initialState
      }
    break;
    default:
      return state;
  }
}
