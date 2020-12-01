import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import {obtenerPreguntasAction} from "../../actions/questionActions";
Survey.StylesManager.applyTheme("bootstrap");


class Questions extends Component {

    render() {
        const json = { "questions": [
                {
                    "type": "radiogroup",
                    "name": "car",
                    "title": "Que marca de carro te gusta?",
                    "isRequired": true,
                    "colCount": 4,
                    "choices": ["None", "Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota", "Citroen"] },
                {"name":"name", "type":"text", "title": "Dinos tu nombre:", "placeHolder":"Son Goku", "isRequired": true, "autoComplete": "name"},
                {"name":"temp", "type":"text", "inputType":"number", "title": "Tu temperatura:", "placeHolder":"10", "isRequired": true },
                {
                    "type": "checkbox",
                    "name": "opSystem",
                    "title": "Presenta alguno de los siguientes sintomas",
                    "hasOther": true,
                    "isRequired": true,
                    "choices": ["Tos", "Picazon", "Mocos"]
                }
            ] };

        const survey = new Survey.Model(json);
        survey.completeText = "Finalizar";
        survey.completedHtml = "<span>Encuesta finalizada correctamente</span>";

        survey
            .onComplete
            .add(function (result) {
                console.log(result.data);
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
