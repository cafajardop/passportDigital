import http from "../http/http";
import Swal from "sweetalert2";

import {
  LOGIN_EXITO,
  LOG_OUT,
  COMENZAR_OBTENER_USUARIOSLOGIN,
  OBTENER_USUARIOLOGIN_EXITO,
  OBTENER_USUARIOLOGIN_ERROR
} from '../types';

export function mostrarEstadoLoginAction(login){
  return async (dispatch)=>{
    /**Consulta a la base de datos */
    http.post("loginpasaporte", login).then( resp => {
      console.log(resp);
      dispatch(mostrarloginError(login))
      Swal.fire(
          "Correcto",
          `El Usuario con el id: ${login.cedula} se creo correctamente`,
          "success"
      );
    }).catch(err => {
      console.log(err);
      /* dispatch(mostrarloginError(login)) */
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta de nuevo",
      });
    });

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

//**Edición de usuario */
export function obtenerUsuarioLoginAction(usuario){  
  return async (dispatch) => {
    dispatch(obtenerUsuariosLogin());
    http.post("loginpasaporte",usuario).then(response => {
      if(response.data.ok){
        dispatch(ObtenerUsuariosLoginExito(response.data));
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("menu", JSON.stringify(response.data.menu));
          localStorage.setItem("usuario", JSON.stringify(response.data.usuario));
      }else{
        /* dispatch(ObtenerUsuarioLoginError(true)); */
        Swal.fire({
          icon: "error",
          title: `Hubo un error al registrarse ${response.data.err.message}`,
          text: "Hubo un error, intenta de nuevo",
        });
      }     
    }).catch(response => {
      console.log("errror",response);
    });
  };
}

const obtenerUsuariosLogin = () => ({
  type: COMENZAR_OBTENER_USUARIOSLOGIN,
  payload: false,
});

const ObtenerUsuariosLoginExito = usuario => ({
  type: OBTENER_USUARIOLOGIN_EXITO,
  payload: usuario
});

const ObtenerUsuarioLoginError = (estado) =>({
  type: OBTENER_USUARIOLOGIN_ERROR,
  payload: estado
})


export function getUserLogin() {
  return {
    type: 'CONSULTA_LOGIN'
  }
}
