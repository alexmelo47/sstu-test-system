/* eslint-disable eqeqeq */
/* eslint-disable no-fallthrough */
import React, { useState } from 'react'
import { Link } from "react-router-dom";

import QShort from '../components/qa/QShort'
import QSorting from '../components/qa/QSorting'
import QMatching from '../components/qa/QMatching'
import QMultiCheckbox from '../components/qa/QMultiCheckbox'
import QMultiRadio from '../components/qa/QMultiRadio'

export default function Result() {
        const [loaded, set_loaded] = useState(false);
        let res = localStorage.getItem("Result");
        let res_type = res.type;

        let questions, grade, time, tname, sname, author;
        let q_elements = [];

        switch (res_type) {
            case "CORRECT": 
            case "SELECTED": 
            case "INCORRECT":
                questions = res.test.item;
                for (var i = 0; i < questions.length; i++) {
                    switch (questions[i].itemType) {
                        case "MULTIPLE_CHOICE":
                            q_elements.push(<QMultiRadio qname={questions[i].question} cnt={questions[i].answers.length} a_arr={questions[i].answers} Qpic={questions[i].pictures[0] ?? ""} />);
                            break;
                        case "MULTIPLE_ANSWER":
                            q_elements.push(<QMultiCheckbox qname={questions[i].question} cnt={questions[i].answers.length} a_arr={questions[i].answers} Qpic={questions[i].pictures[0] ?? ""} />);
                            break;
                        case "SORTING":
                            q_elements.push(<QSorting qname={questions[i].question} cnt={questions[i].answers.length} a_arr={questions[i].answers} Qpic={questions[i].pictures[0] ?? ""} />);
                            break;
                        case "MATCHING":
                            q_elements.push(<QMatching qname={questions[i].question} cnt={questions[i].answers.length} a_arr={questions[i].answers} Qpic={questions[i].pictures[0] ?? ""} />);
                            break;
                        case "TEXT":
                        case "NUMBER":
                            q_elements.push(<QShort qname={questions[i].question} qa={questions[i].answers[0]?.answer ?? ""} Qpic={questions[i].pictures[0] ?? ""} />);
                        default: break;
                    }
                }
            case "GRADE_ONLY": 
                grade = res.test.grade;
            case "HIDDEN":
            default:
                time = res.test.fullTime;
                tname = res.test.name;
                //sname = localStorage.getItem("student_name");
                author = res.test.author;
                break;
        }
        set_loaded(!loaded);

        /*
        let time = localStorage.getItem("fullTime");
        let grade = localStorage.getItem("grade");
        let tname = localStorage.getItem("test_name");
        let author = localStorage.getItem("test_author");
        */
    return (
        <main>
            <div className="content-preview">
            {loaded && res_type != "HIDDEN" &&
                <>
                    <h1>
                        <i>{tname} (Преп. {author})</i>
                    </h1>
                    <span>
                        <br /><br /><i>Ваша оценка: {grade}<br /><br />
                            Метод оценивания: Последняя попытка<br /><br />
                            Ваше время: {time}</i><br /><br />
                    </span>
                </>
            }
                <Link className="btn btn-1" to="/tests/">Закрыть</Link>
            </div>

            {q_elements && loaded && q_elements}
        </main>
    )
}
