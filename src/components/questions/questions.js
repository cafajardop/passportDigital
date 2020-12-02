import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import { Card, Row } from 'react-bootstrap';
Survey.StylesManager.applyTheme("bootstrap");


class Questions extends Component {

    render() {
        const survey = new Survey.Model(this.props.questions);
        console.log("preguntas cargadas");
        survey.completeText = "Finalizar";
        survey.completedHtml = "<span>Encuesta finalizada correctamente</span>";
        const handleSetAnswers = this.props.handleSetAnswers;

        if(this.props.questions !== undefined && this.props.questions.questions !== undefined &&
            this.props.questions.questions.length > 0) {
            this.props.questions.questions.filter(x => x.type === "radiogroup").forEach(question => {
                let q = survey.getQuestionByName(question.name);
                q.colCount = 1;
            });

            survey.render();
        }

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
            <Card className="mt-4">
                <Card.Header>Formulario Ira para Covid 19</Card.Header>
                <Card.Body>
                    <Survey.Survey
                        model={survey}
                    />
                </Card.Body>
            </Card>
        );
    }
}

export default Questions;
