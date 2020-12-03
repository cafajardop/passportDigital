import {
  LOGIN_EXITO,
  LOG_OUT
}from '../types';

export const authReducer = (state ={}, action)=>{
  switch (action.type) {
    case LOGIN_EXITO:
        return {
          uid: action.payload.uid,
          name: action.payload.displayName
        }
    
    case LOG_OUT:
    return { }
    
    default:
      return state;
  }

}