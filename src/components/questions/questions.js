import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import {obtenerPreguntasAction} from "../../actions/questionActions";
Survey.StylesManager.applyTheme("bootstrap");


class Questions extends Component {

    render() {
        const survey = new Survey.Model(this.props.questions);
        survey.completeText = "Finalizar";
        survey.completedHtml = "<span>Encuesta finalizada correctamente</span>";
        const handleSetAnswers = this.props.handleSetAnswers;

        survey
            .onComplete
            .add(function (result) {debugger;
                console.log(result.data);
                handleSetAnswers(result.data);
                // document
                //     .querySelector('#surveyResult')
                //     .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
            });

        return (
            <div className="card mt-4 mb-3 mh-80 overflow-auto">
                <div className="card-header">
                    Formulario Ira para Covid 19
                </div>
                <div className="card-body">
                    <Survey.Survey
                        model={survey}
                    />
                </div>
            </div>
        );
    }
}

export default Questions;
