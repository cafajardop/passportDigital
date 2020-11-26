import {
  LOGIN_EXITO
}from '../types';

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
    default:
      return state;
  }
}