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
    let res = JSON.parse(localStorage.getItem("Result"));
    console.log(res);
    let res_type = "CORRECT";//res.type;

    let questions, grade, time, tname, sname, author;
    let q_elements = [];

    switch (res_type) {
        case "CORRECT": 
        case "SELECTED": 
        case "INCORRECT":
            questions = res.items;
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
            grade = res.grade;
        case "HIDDEN":
        default:
            time = res.fullTime;
            tname = res.test.name;
            //sname = localStorage.getItem("student_name");
            author = res.test.author.name;
            break;
    }

    return (
        <main>
            <div className="content-preview">
            {res_type != "HIDDEN" &&
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

            {q_elements && q_elements}
        </main>
    )
}
