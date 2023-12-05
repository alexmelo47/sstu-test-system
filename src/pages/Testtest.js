import React, { useState } from 'react'
import axios from 'axios'
import QShort from '../components/qa/QShort'
import QMatches from '../components/qa/QMatches'
import QMultiCheckbox from '../components/qa/QMultiCheckbox'
import QMultiRadio from '../components/qa/QMultiRadio'

const baseURL = "https://maile.fita.cc";

const Testtest = () => {

    let testid = 4;//load from storage?
    const [question, setQuestion] = useState([]);

    function handleFirst() {//handle first load and next loads
        
        const Payload = {
            "testId": testid
        }
        //console.log(Payload);
        axios.post(baseURL + '/sessions', Payload)
            .then(function (response) {
                console.log(response);
                localStorage.setItem("session_id", response.data.id);
                localStorage.setItem("question_id", response.data.item.id);
                setQuestion(response.data.item);
                //console.log(response.data.item);
            })
            .catch(err => console.log(err));
    };

    function handlePrev() {
        
    }

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

    function handleNext() {

        let Payload = prepPayload();
        
        let url = baseURL + '/sessions/' + localStorage.getItem("session_id") + '/items/' + localStorage.getItem("question_id") + '/answer';
        console.log(url);
        console.log(Payload);

        axios.post(url, Payload)
            .then(function (response) {
                console.log(response);
                localStorage.setItem("question_id", response.data.item.id);
                setQuestion(response.data.item);
                //console.log(response.data.item);
            })
            .catch(err => console.log(err));

        /*let url = baseURL + '/sessions/' + localStorage.getItem("session_id") + '/items';

        axios.get(url)
            .then(function (response) {
                console.log(response);
            })
            .catch(err => console.log(err));*/

    }

    function handleSend() {

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

                {question.type === "MULTIPLE_CHOICE" && <QMultiRadio qname={question.question} cnt={question.answers.length} a_arr={question.answers} />}
                {question.type === "MULTIPLE_ANSWER" && <QMultiCheckbox qname={question.question} cnt={question.answers.length} a_arr={question.answers} />}
                {(question.type === "TEXT" || question.type === "NUMBER") && <QShort qname={question.question} />}
                {question.type === "SORTING" && <QMatches qname={question.question} cnt={question.answers.length} a_arr={question.answers} />}

                <div className="quest-btn">
                    <input onClick={handleFirst} className="btn btn-2" type="submit" value="Получить вопрос" />
                    <input onClick={handlePrev} className="btn btn-2" type="submit" value="Предыдущий (NO)" />
                    <input onClick={handleSend} className="btn btn-1" type="submit" value="Подтвердить" />
                    <input onClick={handleNext} className="btn btn-2" type="submit" value="Следующий" />
                </div>
            </div>
        </main>
    )
}

export default Testtest