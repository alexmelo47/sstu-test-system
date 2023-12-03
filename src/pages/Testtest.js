import React, { useState } from 'react'
import axios from 'axios'
//import Qwrapper from '../components/qa/Qwrapper'
import QShort from '../components/qa/QShort'

const baseURL = "https://maile.fita.cc";

const Testtest = () => {

    let testid = 4;
    const [question, setQuestion] = useState([]);

    function handleFirst() {//handle first load and next loads
        
        const Payload = {
            "testId": testid
        }
        console.log(Payload);
        axios.post(baseURL + '/sessions', Payload)
            .then(function (response) {
                console.log(response);
                localStorage.setItem("session_id", response.data.id);
                localStorage.setItem("question_id", response.data.item.id);
                setQuestion(response.data.item);
                console.log(response.data.item);
            })
            .catch(err => console.log(err));
        
    };

    function handlePrev() {

    }

    function handleNext() {

        const Payload = {
            "answerId": 17///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        }
        
        let url = baseURL + '/sessions/' + localStorage.getItem("session_id") + '/items/' + localStorage.getItem("question_id") + '/answer';

        axios.post(url, Payload)
            .then(function (response) {
                console.log(response);
                localStorage.setItem("question_id", response.data.item.id);
                setQuestion(response.data.item);
                console.log(response.data.item);
            })
            .catch(err => console.log(err));
    }

    function handleSend() {

        let url = baseURL + '/sessions/' + localStorage.getItem("session_id") + '/complete';

        axios.post(url)
            .then(function (response) {
                console.log(response);
            })
            .catch(err => console.log(err));
    }
    //add all types and handle them
    return (
        <main>
            <div id="test-body" className="content-block">

                {question.type === "MULTIPLE_CHOICE" && <QShort qname={question.question} />}

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