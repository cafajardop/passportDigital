import {
    COMENZAR_OBTENER_PREGUNTAS,
    DESCARGA_PREGUNTAS_ERROR, DESCARGA_PREGUNTAS_EXITO
} from "../types";
import http from "../http/http";

/*Consultar preguntas*/
export function obtenerPreguntasAction() {
    return async (dispatch) => {
        dispatch(obtenerPreguntas());
        http.get("questions").then(response => {
            dispatch(getPreguntasExito(response.data));
        }).catch(err => {
            console.log(err);
            dispatch(getPreguntasError());
        });
    }
}

const obtenerPreguntas = () => ({
    type: COMENZAR_OBTENER_PREGUNTAS,
    payload: true,
});


const getPreguntasExito = (preguntas) => ({
    type: DESCARGA_PREGUNTAS_EXITO,
    payload: preguntas,
});


const getPreguntasError = () => ({
    type: DESCARGA_PREGUNTAS_ERROR,
    payload: true,
});
