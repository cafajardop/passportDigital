import React, { useEffect, useState } from "react";
import {crearNuevoUsuarioAction} from "../../actions/usuarioActions";
import {useDispatch, useSelector} from "react-redux";
import QuestionAnimated from './question-animated';
import Questions from "./questions";
import QuestionActions, {obtenerPreguntasAction} from '../../actions/questionActions';
import {newSurveyRepliesAction} from "../../actions/surveyRepliesActions";

const IraformScreen = ({db}) => {
    // store form values in a state hook
    const dispatch = useDispatch();

    useEffect(
        () => {
            const cargarPreguntas = () => dispatch(obtenerPreguntasAction());
            cargarPreguntas();
        },
        // run effect whenever the database connection changes
        [db]
    );

    const questions = useSelector(state => state.questions.questions);

    const handleSetAnswers = replies => {
      dispatch(newSurveyRepliesAction(replies));
    }

    return (
        <Questions
          handleSetAnswers={handleSetAnswers}
          questions={questions} />
    )
}

export default IraformScreen;
