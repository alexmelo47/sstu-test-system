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

    //Результат теста

    let res = JSON.parse(localStorage.getItem("Result"));
    console.log(res);
    let res_type = "GRADE_ONLY";//res.type;

    let questions, grade, time, tname, sname, author, sw_cnt = 0, status_en;
    let q_elements = [];

    switch (res_type) {
        case "CORRECT":
            //sw_cnt++;
        case "SELECTED":
            //sw_cnt++;
        case "INCORRECT":
            sw_cnt++;
            questions = res.items;
            for (var i = 0; i < questions.length; i++) {
                switch (questions[i].status) {
                    case "pass":
                        status_en = true;
                        break;
                    case "failed":
                        status_en = false;
                        break;
                    default:
                        status_en = false;
                        break;
                }
                switch (questions[i].itemType) {
                    case "MULTIPLE_CHOICE":
                        q_elements.push(<div key={i}><QMultiRadio qname={questions[i].question} cnt={questions[i].answers.length}
                            a_arr={questions[i].answers} Qpic={questions[i].pictures[0] ?? ""} rtype={sw_cnt} status={status_en} /></div>);
                        break;
                    case "MULTIPLE_ANSWER":
                        q_elements.push(<div key={i}><QMultiCheckbox qname={questions[i].question} cnt={questions[i].answers.length}
                            a_arr={questions[i].answers} Qpic={questions[i].pictures[0] ?? ""} rtype={sw_cnt} status={status_en} /></div>);
                        break;
                    case "SORTING":
                        q_elements.push(<div key={i}><QSorting qname={questions[i].question} cnt={questions[i].answers.length}
                            a_arr={questions[i].answers} Qpic={questions[i].pictures[0] ?? ""} rtype={sw_cnt} status={status_en} /></div>);
                        break;
                    case "MATCHING":
                        q_elements.push(<div key={i}><QMatching qname={questions[i].question} cnt={questions[i].answers.length}
                            a_arr={questions[i].answers} Qpic={questions[i].pictures[0] ?? ""} rtype={sw_cnt} status={status_en} /></div>);
                        break;
                    case "TEXT":
                    case "NUMBER":
                        q_elements.push(<div key={i}><QShort qname={questions[i].question} qa={questions[i].answers[0]?.answer ?? ""}
                            correctN={questions[i].answers[0]?.correctNumber ?? ""} correctT={questions[i].answers[0]?.correctAnswer ?? ""}
                            Qpic={questions[i].pictures[0] ?? ""} rtype={sw_cnt} status={status_en} /></div>);
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
            <div className="content-block">
                <div className="result-info">
                    {res_type != "HIDDEN" &&
                    <>
                        <h1>
                            <i>{tname} (Преп. {author})</i>
                        </h1>
                        <span>
                            <br /><br /><i>Ваша оценка: {grade}<br /><br />
                                Процент выполненных заданий: <br /><br />
                                Время тестирования: {time}</i><br /><br />
                        </span>
                    </>
                    }
                    <Link className="btn btn-1" to="/tests/">Закрыть</Link>
                </div>
                {q_elements && q_elements}
            </div>

            
        </main>
    )
}
