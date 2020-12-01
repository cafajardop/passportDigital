import React, { useEffect, useState } from "react";
import { Offline, Online } from 'react-detect-offline'
import {crearNuevoUsuarioAction} from "../../actions/usuarioActions";
import {useDispatch, useSelector} from "react-redux";
import QuestionAnimated from './question-animated';
import Questions from "./questions";
import QuestionActions, {obtenerPreguntasAction} from '../../actions/questionActions';

const IraformScreen = ({db}) => {
    // store form values in a state hook
    const dispatch = useDispatch();

    // set firstname and lastname to whatever is in the database
    // if no values are in the database, set the database values to ''
    useEffect(
        () => {
            const cargarPreguntas = () => this.props.dispatch(obtenerPreguntasAction());
            cargarPreguntas();

            // create the store
            db.version(1).stores({ formData: 'id,value' });

            // perform a read/write transatiction on the new store
            db.transaction('rw', db.formData, async () => {
                // get the first and last name from the data
                const dbanswers = await db.formData.get('answers');

                // if the values fields have not be added, add them
                if (!dbanswers) await db.formData.add({ id: 'answer', value: {} });
            }).catch(e => {
                // log any errors
                console.log(e.stack || e)
            });

            // close the database connection if form is unmounted or the
            // database connection changes
            return () => db.close();
        },
        // run effect whenever the database connection changes
        [db]
    );

    // sets the name in the store and in the state hook
    const setName = id => value => {
        // update the store
        db.formData.put({ id, value });
    }

    // partial application to make on change handler easier to deal with
    const handleSetAnswers = (id, answers) => setName(id)(answers);

    const saveOffline = e => {
        //prueba background sync
        dispatch(crearNuevoUsuarioAction({
            primerapellido: "sync",
            segundoapellido: "sync",
            primernombre: "sync",
            segundonombre: "syn",
            cedula: "10000000000",
            tipodocumento: "CC",
            telefono:"0",
            correo:"sync@",
            direccion:"cll sync",
            direccion2:"cll 2 sync"
        }));
    }

    return (
        <div>
            <Questions handleSetAnswers={handleSetAnswers} />
        </div>
    )
}

export default IraformScreen;
