import React, { useState } from 'react'
import axios from 'axios'
import QShort from '../components/qa/QShort'
import QMatches from '../components/qa/QMatches'
import QMultiCheckbox from '../components/qa/QMultiCheckbox'
import QMultiRadio from '../components/qa/QMultiRadio'
//import Button from "@material-ui/core/Button";
import MenuBox from '../components/MenuBox'

const baseURL = "https://maile.fita.cc";

const Testtest = () => {

    let testid = 4;//---> localStorage.getItem("tid")
    const [question, setQuestion] = useState([]);
    const [question_list, setQuestionList] = useState([]);
    const [started, set_started] = useState(false);
    const [loaded, set_loaded] = useState(false);
    const [is_adaptive_test] = useState(false);//don't forget to clen up all localstorage items ---> localStorage.getItem("adaptive")
    //let q_box = [];

    function handleFirst() {
        
        const Payload = {
            "testId": testid
        }

        //console.log(Payload);
        axios.post(baseURL + '/sessions', Payload)//main load
            .then(function (response) {
                console.log(response);
                localStorage.setItem("session_id", response.data.id);
                localStorage.setItem("question_id", response.data.item.id);
                setQuestion(response.data.item);
                set_started(!started);
                //console.log(response.data.item);
            })
            .catch(err => console.log(err));

        axios.get(baseURL + '/sessions/' + localStorage.getItem("session_id") + '/items')//load boxes
            .then(function (response) {
                console.log(response);
                setQuestionList(response.data);
             //   for (var i = 0; i < response.data.length; i++) {
             //       q_box.push(<Button variant="outlined">{response.data[i].id}</Button>);
             //   }
                set_loaded(!loaded);
            })
            .catch(err => console.log(err));
    };

    function prepPayload() {
        let answerload, Payload;

        if (question.type === "MULTIPLE_CHOICE") {
            let chosen_radio = document.getElementsByClassName("radioboxes");

            for (let i = 0; i < chosen_radio.length; i++) {
                if (chosen_radio[i].checked) {
                    answerload = Number(chosen_radio[i].value);
                }
            }

            Payload = {
                "answerId": answerload
            }
        }
        else if (question.type === "MULTIPLE_ANSWER") {
            answerload = [];
            let chosen_boxes = document.getElementsByClassName("checkboxes");

            for (let i = 0; i < chosen_boxes.length; i++) {
                if (chosen_boxes[i].checked) {
                    answerload.push(Number(chosen_boxes[i].value));
                }
            }

            Payload = {
                "answerIds": answerload
            }
        }
        else if (question.type === "NUMBER") {
            answerload = parseFloat(document.getElementById("AnsShort").value);
            Payload = {
                "answer": answerload
            }
        }
        else if (question.type === "TEXT") {
            answerload = document.getElementById("AnsShort").value;
            Payload = {
                "answer": answerload
            }
        }
        else if (question.type === "SORTING") {
            answerload = [];
            let chosen_order = document.getElementsByClassName("orderboxes");

            for (let i = 0; i < chosen_order.length; i++) {
                answerload.push(Number(chosen_order[i].value));
            }

            Payload = {
                "answerIds": answerload
            }
        }

        if (answerload === undefined) {//не отправляем ничего, просто переход
            return "DONOTSEND";
        }
        else {
            return Payload;
        }
    }

    function handleSendOne(question_id) {//move to question

        //send answer/don't send
        let Payload = prepPayload();

        let url = baseURL + '/sessions/' + localStorage.getItem("session_id") + '/items/' + localStorage.getItem("question_id") + '/answer';

        console.log(url);
        console.log(Payload);

        if (Payload !== "DONOTSEND") {
            axios.post(url, Payload)
                .then(function (response) {
                    console.log(response);
                    //localStorage.setItem("question_id", response.data.item.id);
                    //setQuestion(response.data.item);
                    //console.log(response.data.item);
                })
                .catch(err => console.log(err));
        }

        //load question
        url = baseURL + '/sessions/' + localStorage.getItem("session_id") + '/items/' + question_id;

        axios.get(url)
            .then(function (response) {
                console.log(response);
                localStorage.setItem("question_id", response.data.item.id);
                setQuestion(response.data.item);
            })
            .catch(err => console.log(err));

    }

    function handleNext() {
        if (question_list[question_list.length - 1].id !== Number(localStorage.getItem("question_id"))) {
            handleSendOne(question_list.findIndex((elem) => { return elem === Number(localStorage.getItem("question_id")) }) + 1);
        }
    }
    function handlePrev() {
        if (question_list[0].id !== Number(localStorage.getItem("question_id"))) {
            handleSendOne(question_list.findIndex((elem) => { return elem === Number(localStorage.getItem("question_id")) }) - 1);
        }
    }

    function handleSendAll() {

        let url = baseURL + '/sessions/' + localStorage.getItem("session_id") + '/complete';

        axios.post(url)
            .then(function (response) {
                console.log(response);
            })
            .catch(err => console.log(err));
    }

    //add MATCHING type and handle it
    return (
        <main>
            <div id="test-body" className="content-block">

                {started && !is_adaptive_test && loaded && <MenuBox cnt={question_list.length} q_arr={question_list} />}

                {question.type === "MULTIPLE_CHOICE" && <QMultiRadio qname={question.question} cnt={question.answers.length} a_arr={question.answers} />}
                {question.type === "MULTIPLE_ANSWER" && <QMultiCheckbox qname={question.question} cnt={question.answers.length} a_arr={question.answers} />}
                {(question.type === "TEXT" || question.type === "NUMBER") && <QShort qname={question.question} />}
                {question.type === "SORTING" && <QMatches qname={question.question} cnt={question.answers.length} a_arr={question.answers} />}

                <div className="quest-btn">
                    {!started && <input onClick={handleFirst} className="btn btn-2" type="submit" value="Начать тест" />}
                    {started && !is_adaptive_test && <input onClick={handlePrev} className="btn btn-2" type="submit" value="Предыдущий (NO)" />}
                    {started && <input onClick={handleSendAll} className="btn btn-1" type="submit" value="Подтвердить" />}
                    {started && <input onClick={handleNext} className="btn btn-2" type="submit" value="Следующий" />}
                </div>
            </div>
        </main>
    )
}

export default Testtest