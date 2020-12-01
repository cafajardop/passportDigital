import {
  REGISTRO_CUESTIONARIO,
  REGISTRO_CUESTIONARIO_EXITO,
  REGISTRO_CUESTIONARIO_ERROR} from '../types';

  import http from "../http/http";
  import Swal from "sweetalert2";

  /*Registro de respuestas a encuestas*/
  export function newSurveyRepliesAction(respuestas) {
    return async (dispatch) => {
      dispatch(addSurveyReplies());
      /**Consulta a la base de datos */
      http.post("respuestas", respuestas).then( resp => {
        debugger;
        dispatch(addSurveyRepliesSuccess(respuestas));
        Swal.fire(
            "Correcto",
            `Las respuestas diligenciadas se crearon correctamente correctamente`,
            "success"
        );
      }).catch(err => {
        console.log(err);
        dispatch(addSurveyRepliesError(true));
        Swal.fire({
          icon: "error",
          title: "Hubo un error",
          text: "Hubo un error, intenta de nuevo",
        });
      });
    };
  };


const addSurveyReplies = () => ({
  type: REGISTRO_CUESTIONARIO,
  payload: true,
});

/**Si encuesta se guarda en la base de datos */
const addSurveyRepliesSuccess = (respuestas) => ({
  type: REGISTRO_CUESTIONARIO_EXITO,
  payload: respuestas,
});

/**Si hay error */
const addSurveyRepliesError = (estado) => ({
  type: REGISTRO_CUESTIONARIO_ERROR,
  payload: estado,
});
