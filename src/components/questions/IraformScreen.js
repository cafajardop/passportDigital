import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import QuestionAnimated from './question-animated';
import Questions from "./questions";
import {obtenerPreguntasAction} from '../../actions/questionActions';
import {newSurveyRepliesAction} from "../../actions/surveyRepliesActions";

const IraformScreen = ({db}) => {
    // store form values in a state hook
    const dispatch = useDispatch();

    useEffect(
        () => {
            const cargarPreguntas = () => dispatch(obtenerPreguntasAction());
            cargarPreguntas();

            // create the store
            db.version(1).stores({ formData: 'id,value' });

            // perform a read/write transatiction on the new store
            db.transaction('rw', db.formData, async () => {
                // get the first and last name from the data
                const dbReplies = await db.formData.get('replies');

                // if the dbReplies have not be added, add them
                if (!dbReplies) await db.formData.add({ id: 'replies', value: {} });
            }).catch(e => {
                // log any errors
                console.log(e.stack || e);
            });

            // close the database connection if form is unmounted or the
            // database connection changes
            return () => db.close();

        },
        // run effect whenever the database connection changes
        [db]
    );

    const questions = useSelector(state => state.questions.questions);

    const handleSetAnswers = replies => {
        db.formData.put({ id: 'replies', value:replies });
        dispatch(newSurveyRepliesAction(replies));
    }

    return (
        <Questions
          handleSetAnswers={handleSetAnswers}
          questions={questions} />
    )
}

export default IraformScreen;
