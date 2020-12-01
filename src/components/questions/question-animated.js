import React from 'react';
import './questionsanimated.css';


function QuestionAnimated() {
    return(
        <div className="container-fluid">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>¿Por qué React es tan chimba?</h3>
                    </div>

                    <div className="modal-body">
                        <div className="col-xs-3 5"></div>

                        <div className="quiz" id="quiz" data-toggle="buttons">
                            <label className="element-animation1 btn btn-lg btn-danger btn-block">
                                 <span className="btn-label">
                                    <i className="glyphicon glyphicon-chevron-right"></i>
                                </span>
                                <input type="radio" name="q_answer" value="1" /> Porque lo hizo facebook
                            </label>
                            <label className="element-animation2 btn btn-lg btn-danger btn-block">
                                <span className="btn-label">
                                    <i className="glyphicon glyphicon-chevron-right"></i></span>
                                <input type="radio" name="q_answer" value="2"/>Porque es una libreria
                            </label>
                            <label className="element-animation3 btn btn-lg btn-danger btn-block">
                                <span className="btn-label">
                                    <i className="glyphicon glyphicon-chevron-right"></i>
                                </span>
                                <input type="radio" name="q_answer" value="3"/>Porque es javascript
                            </label>
                            <label className="element-animation4 btn btn-lg btn-danger btn-block">
                                <span className="btn-label">
                                    <i className="glyphicon glyphicon-chevron-right"></i>
                                </span>
                                <input type="radio" name="q_answer" value="4"/> Porque somos re asperos
                            </label>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}


export default QuestionAnimated;
