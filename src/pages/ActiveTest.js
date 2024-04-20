import React, { useState } from 'react'
import { Navigate } from "react-router-dom"
import axios from 'axios'
import QShort from '../components/qa/QShort'
import QSorting from '../components/qa/QSorting'
import QMatching from '../components/qa/QMatching'
import QMultiCheckbox from '../components/qa/QMultiCheckbox'
import QMultiRadio from '../components/qa/QMultiRadio'

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import Timer from "../components/Timer";

const baseURL = "https://maile.fita.cc";

const ActiveTest = () => {

    let testid = Number(localStorage.getItem("tid"));
    let is_adaptive_test = localStorage.getItem("method") === "CLASSIC" ? false : true;
    let timerEject;//, timerReminder;
    const [question, setQuestion] = useState([]);
    const [timer, setTime] = useState();
    const [question_list, setQuestionList] = useState([]);
    const [started, set_started] = useState(false);
    const [loaded, set_loaded] = useState(false);
    const [is_last, set_last] = useState(false);
    const [is_first, set_first] = useState(true);
    const [finished, set_finished] = useState(false);

    const [menubtns, set_mb] = useState([]);
    
    const [open, setOpen] = useState(false);
    const handleClickOpenWarn = () => { //предупреждение о неотвеченных
        let unanswered = false;
        axios.get(baseURL + '/sessions/' + localStorage.getItem("session_id") + '/items')
            .then(function (response) {
                //console.log(response);
                setQuestionList(response.data);
            })
            .catch(err => console.log(err));
        for (var i = 0; i < question_list.length; i++) {
            if (!question_list[i].answered) {
                unanswered = true;
                setOpen(true);
            }
        }
        if (!unanswered) {
            handleSendAll();
        }
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleAccept = () => {
        setOpen(false);
        handleSendAll();
    }

    function getBoxes() {  
        axios.get(baseURL + '/sessions/' + localStorage.getItem("session_id") + '/items')   //загрузка меню
            .then(function (resp_menu) {
                //console.log(resp_menu);
                setQuestionList(resp_menu.data);
                localStorage.setItem("question_list", resp_menu.data);
                if (resp_menu.data.length === 1) {
                    set_last(!is_last);
                }

                //прототип нового способа
                //for (let i = 0; i < response.data.length; i++) {
                //set_mb( // Replace the state
                //    [ // with a new array
                //        ...menubtns, // that contains all the old items
                //        //<Button variant="outlined" onClick={() => { handleSendOne(question_list[i].id) }}>{i}</Button> // and one new item at the end
                //        response.data[i]
                //    ]
                //);
                //    menubtns.push(<Button variant="outlined" onClick={() => { handleSendOne(response.data[i].id) }}>{response.data[i].id}</Button>);
                //menubtns.push(response.data[i]);
                //menubtns[i].name = i + 1;
                //}
                //
                //menubtns.concat(resp_menu.data);

                let temp_arr = [].concat(resp_menu.data);
                for (var i = 0; i < resp_menu.data.length; i++) {
                    resp_menu.data[i].isAnswered ? temp_arr[i].style = "btn-menu btn-menu-answered" : temp_arr[i].style = "btn-menu";
                    temp_arr[i].num = i + 1;
                }

                set_mb(temp_arr);
            })
            .catch(err => console.log(err));
    }
    function handleFirst() {
        
        const Payload = {
            "testId": testid
        }

        //console.log(Payload);
        axios.post(baseURL + '/sessions', Payload)
            .then(function (response) {

                //console.log(response);
                localStorage.setItem("session_id", response.data.id);
                localStorage.setItem("question_id", response.data.item.id);
                setTime(new Date(new Date().getTime() + Number(response.data.remainingTime) * 1000));
                setQuestion(response.data.item);

                getBoxes();

                set_loaded(!loaded);
                set_started(!started);
                //console.log(response.data.item);

                //timerReminder = setTimeout(setOpenTimeReminder, milliseconds);
                timerEject = setTimeout(handleSendAll, Date.parse(new Date(new Date().getTime() + Number(response.data.remainingTime) * 1000)) - Date.now() - 1500);//actual deadline, needs testing

            })
            .catch(err => console.log(err));
    };

    function prepPayload() {    //подготовка ответов
        let answerload, Payload;
        Payload = {
            "answer": [],
            "text": null
        }

        if (question.itemType === "MULTIPLE_CHOICE") {
            let chosen_radio = document.getElementsByClassName("radioboxes");

            for (let i = 0; i < chosen_radio.length; i++) {
                if (chosen_radio[i].checked) {
                    answerload = Number(chosen_radio[i].value);
                    Payload.answer.push({ "id": answerload });
                }
            }
        }
        else if (question.itemType === "MULTIPLE_ANSWER") {
            answerload = [];
            let chosen_boxes = document.getElementsByClassName("checkboxes");

            for (let i = 0; i < chosen_boxes.length; i++) {
                if (chosen_boxes[i].checked) {
                    answerload.push(Number(chosen_boxes[i].value));
                    Payload.answer.push({ "id": Number(chosen_boxes[i].value) });
                }
            }
        }
        else if (question.itemType === "TEXT" || question.itemType === "NUMBER") {
            answerload = document.getElementById("AnsShort").value;
            Payload.text = answerload;
        }
        else if (question.itemType === "SORTING") {
            answerload = [];
            let chosen_order = document.getElementsByClassName("orderboxes");

            for (let i = 0; i < chosen_order.length; i++) {
                answerload.push(Number(chosen_order[i].value));
                Payload.answer.push({ "id": Number(chosen_order[i].value) });
            }
        }
        else if (question.itemType === "MATCHING") {
            answerload = [];
            let chosen_matches = document.getElementsByClassName("matchboxes");

            for (let i = 0; i < chosen_matches.length; i++) {

                answerload.push(Number(chosen_matches[i].id));
                Payload.answer.push({ "id": Number(chosen_matches[i].id) });

                answerload.push(Number(chosen_matches[i].value));
                Payload.answer.push({ "id": Number(chosen_matches[i].value) });

            }
        }

        if (answerload === undefined || answerload.length === 0) {//не отправляем ничего, просто переход
            return "DONOTSEND";
        }
        else {
            return Payload;
        }
    }

    function handleSendOne(question_id) {//переход к вопросу по id, отправка старого и загрузка нового

        let Payload = prepPayload();

        let url = baseURL + '/sessions/' + localStorage.getItem("session_id") + '/items/' + localStorage.getItem("question_id") + '/answer';

        //console.log(url);
        //console.log(Payload);

        if (Payload !== "DONOTSEND") {
            axios.post(url, Payload)
                .then(function (response) {
                    //console.log(response);
                    //localStorage.setItem("question_id", response.data.item.id);
                    //setQuestion(response.data.item);
                    //console.log(response.data.item);
                })
                .catch(err => console.log(err));
        }

        if (question_list.length > 0) {//set first\last
            if (question_list[question_list.length - 1].id === question_id) {
                set_last(true);
            }
            else {
                set_last(false);
            }
            if (question_list[0].id === question_id) {
                set_first(true);
            }
            else {
                set_first(false);
            }
        }

        getBoxes();

        //load
        url = baseURL + '/sessions/' + localStorage.getItem("session_id") + '/items/' + question_id;

        axios.get(url)
            .then(function (response) {
                //console.log(response);
                localStorage.setItem("question_id", response.data.item.id);
                setQuestion(response.data.item);
            })
            .catch(err => console.log(err));

    }

    function handleSendOne_debug(question_id) {//debug sent answer data, changes handle next and prev and all, button method

        let Payload = prepPayload();

        console.log(Payload);

        if (question_list[question_list.length - 1].id === question_id) {//set first\last
            set_last(true);
        }
        else {
            set_last(false);
        }
        if (question_list[0].id === question_id) {
            set_first(true);
        }
        else {
            set_first(false);
        }

        getBoxes();

        //load
        let url = baseURL + '/sessions/' + localStorage.getItem("session_id") + '/items/' + question_id;

        axios.get(url)
            .then(function (response) {
                console.log(response);
                localStorage.setItem("question_id", response.data.item.id);
                setQuestion(response.data.item);
                //console.log(question);
            })
            .catch(err => console.log(err));
    }
    function handleNext() {
        if (question_list[question_list.length - 1].id !== Number(localStorage.getItem("question_id"))) {
            for (var i = 0; i < question_list.length; i++) {
                if (question_list[i].id === Number(localStorage.getItem("question_id"))) {
                    handleSendOne(question_list[i + 1].id);
                }
            }
        }
    }
    function handlePrev() {
        if (question_list[0].id !== Number(localStorage.getItem("question_id"))) {
            for (var i = 0; i < question_list.length; i++) {
                if (question_list[i].id === Number(localStorage.getItem("question_id"))) {
                    handleSendOne(question_list[i - 1].id);
                }
            }
        }
    }

    function handleSendAll() {  //завершение

        //console.log(localStorage.getItem("question_id"));
        handleSendOne(localStorage.getItem("question_id"));

        let url = baseURL + '/sessions/' + localStorage.getItem("session_id") + '/complete';

        axios.patch(url)
            .then(function (response) {
                //console.log(response);
                localStorage.removeItem("session_id");
                localStorage.removeItem("question_id");
                localStorage.removeItem("question_list");
                localStorage.removeItem("tid");
                localStorage.setItem("fullTime", response.data.fullTime);
                localStorage.setItem("grade", response.data.grade);
                localStorage.setItem("test_name", response.data.test.name);
                localStorage.setItem("test_author", response.data.test.author.name);
                set_finished(!finished);
            })
            .catch(err => console.log(err));
        
    }
    
    if (finished) {
        return <Navigate to="/result/" />
    }
    return (
        <main>

            
            <div className="content-block">

                <Dialog open={open} onClose={handleClose} aria-labelledby="warning">
                    <DialogTitle id="warning">Предупреждение</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Вы не ответили на один или более вопросов. Вы уверены, что хотите завершить тестирование?</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleAccept} color="primary">Да</Button>
                        <Button onClick={handleClose} color="primary">Нет</Button>
                    </DialogActions>
                </Dialog>

                <fieldset>

                    <div className="test-menu">
                        {menubtns && started && loaded && !is_adaptive_test &&
                            menubtns.map(btn => (
                                <button key={btn.num} className={btn.style} onClick={() => { handleSendOne(btn.id) }}>
                                    <span>{btn.num}</span>
                                </button>
                            ))
                        }
                    </div>

                    <div className="timer-position">
                        {started && timer && <Timer dl={timer} />}
                    </div>

                    {question.itemType === "MULTIPLE_CHOICE" && <QMultiRadio qname={question.question} cnt={question.answers.length} a_arr={question.answers} Qpic={question.pictures[0] ?? ""} />}
                    {question.itemType === "MULTIPLE_ANSWER" && <QMultiCheckbox qname={question.question} cnt={question.answers.length} a_arr={question.answers} Qpic={question.pictures[0] ?? ""} />}
                    {(question.itemType === "TEXT" || question.itemType === "NUMBER") && <QShort qname={question.question} qa={question.answers[0]?.answer ?? ""} Qpic={question.pictures[0] ?? ""} />}
                    {question.itemType === "SORTING" && <QSorting qname={question.question} cnt={question.answers.length} a_arr={question.answers} Qpic={question.pictures[0] ?? ""} />}
                    {question.itemType === "MATCHING" && <QMatching qname={question.question} cnt={question.answers.length} a_arr={question.answers} Qpic={question.pictures[0] ?? ""} />}

                </fieldset>

                <div className="quest-btn">
                        {!started && <input onClick={handleFirst} className="btn btn-1" type="submit" value="Начать тест" />}
                        {started && !is_adaptive_test && !is_first && <input onClick={handlePrev} className="btn btn-2" type="submit" value="Предыдущий" />}
                        {started && !is_adaptive_test && !is_last && <input onClick={handleNext} className="btn btn-2" type="submit" value="Следующий" />}
                        {started && is_adaptive_test && <input onClick={handleNext} className="btn btn-2" type="submit" value="Подтвердить ответ" />}
                </div>
                
                <div>
                    {started && !is_adaptive_test && <input onClick={handleClickOpenWarn} className="btn-fin2" type="submit" value="Завершить тестирование" />}
                </div>

            </div>
        </main>
    )
}

export default ActiveTest