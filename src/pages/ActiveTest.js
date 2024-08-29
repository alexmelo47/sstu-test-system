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
    // eslint-disable-next-line no-unused-vars
    let timerEject, timerReminder;
    const [question, setQuestion] = useState([]);
    const [timer, setTime] = useState();
    const [question_list, setQuestionList] = useState([]);
    const [started, set_started] = useState(false);
    const [is_last, set_last] = useState(false);
    const [is_first, set_first] = useState(true);
    const [finished, set_finished] = useState(false);

    const [menubtns, set_mb] = useState([]);
    
    const [open, setOpen] = useState(false);
    const handleClickOpenWarn = () => { //предупреждение о неотвеченных
        if (!is_adaptive_test) {
            handleSendOne(localStorage.getItem("question_id"));
            let unanswered = false;
            for (var i = 0; i < question_list.length; i++) {
                if (!question_list[i].isAnswered) {
                    unanswered = true;
                    setOpen(true);
                }
            }
            if (!unanswered) {
                handleSendAll();
            }
        }
        else {
            setOpen(true);
        }
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleAccept = () => {
        setOpen(false);
        handleSendAll();
    }

    const [open3, setTimeWarn] = React.useState(false);
    const handleClickOpenTimeWarn = () => {
        setTimeWarn(true);
    }
    const handleCloseTimeWarn = () => {
        setTimeWarn(false);
    }

    function getBoxes(current_index) {  
        axios.get(baseURL + '/sessions/' + localStorage.getItem("session_id") + '/items')   //загрузка меню
            .then(function (resp_menu) {
                //console.log(resp_menu);
                setQuestionList(resp_menu.data);
                localStorage.setItem("question_list", resp_menu.data);
                if (resp_menu.data.length === 1) {
                    set_last(!is_last);
                }

                let temp_arr = [].concat(resp_menu.data);
                for (var i = 0; i < resp_menu.data.length; i++) {
                    resp_menu.data[i].isAnswered ? temp_arr[i].style = "btn-menu btn-menu-answered" : temp_arr[i].style = "btn-menu";
                    if (i === current_index) {
                        temp_arr[i].style += " btn-menu-focus";
                    }
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

                if (!is_adaptive_test) {
                    getBoxes(0);
                }
                set_started(!started);
                //console.log(response.data.item);

                timerReminder = setTimeout(handleClickOpenTimeWarn, Date.parse(new Date(new Date().getTime() + Number(response.data.remainingTime) * 1000)) - Date.now() - 20000);//за 20с до конца
                timerEject = setTimeout(handleSendAll, Date.parse(new Date(new Date().getTime() + Number(response.data.remainingTime) * 1000)) - Date.now() - 1500);//actual deadline, needs testing

            })
            .catch(err => {
                if (err.toJSON().status === 310) {
                    handleSendAll();
                }
                else {
                    console.log(err);
                }
            });
    };

    function prepPayload() {    //подготовка ответов
        let answerload, Payload;
        Payload = {
            "answer": [],
            "text": null
        }

        switch (question.itemType) {
            case "MULTIPLE_CHOICE":
                let chosen_radio = document.getElementsByClassName("radioboxes");

                for (let i = 0; i < chosen_radio.length; i++) {
                    if (chosen_radio[i].checked) {
                        answerload = Number(chosen_radio[i].value);
                        Payload.answer.push({ "id": answerload });
                    }
                }
                break;
            case "MULTIPLE_ANSWER":
                answerload = [];
                let chosen_boxes = document.getElementsByClassName("checkboxes");

                for (let i = 0; i < chosen_boxes.length; i++) {
                    if (chosen_boxes[i].checked) {
                        answerload.push(Number(chosen_boxes[i].value));
                        Payload.answer.push({ "id": Number(chosen_boxes[i].value) });
                    }
                }
                break;
            case "SORTING":
                answerload = [];
                let chosen_order = document.getElementsByClassName("orderboxes");

                for (let i = 0; i < chosen_order.length; i++) {
                    answerload[chosen_order[i].value] = Number(chosen_order[i].id);
                }
                for (let i = 0; i < answerload.length; i++) {
                    Payload.answer.push({ "id": Number(answerload[i]) });
                }
                break;
            case "MATCHING":
                answerload = [];
                let chosen_matches = document.getElementsByClassName("matchboxes");

                for (let i = 0; i < chosen_matches.length; i++) {

                    answerload.push(Number(chosen_matches[i].id));
                    Payload.answer.push({ "id": Number(chosen_matches[i].id) });

                    answerload.push(Number(chosen_matches[i].value));
                    Payload.answer.push({ "id": Number(chosen_matches[i].value) });

                }
                break;
            case "TEXT":
            case "NUMBER":
                answerload = document.getElementById("AnsShort").value;
                Payload.text = answerload;
            // eslint-disable-next-line no-fallthrough
            default: break;
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
                    if (is_adaptive_test) {
                        localStorage.setItem("question_id", response.data.item.id);
                        setQuestion(response.data.item);
                    }
                })
                .catch(err => {
                    if (err.toJSON().status === 310) {
                        handleSendAll();
                    }
                    else {
                        console.log(err);
                    }
                });
        }

        if (!is_adaptive_test) {
            if (question_list.length > 0) {//set first\last
                // eslint-disable-next-line eqeqeq
                if (question_list[question_list.length - 1].id == question_id) {
                    set_last(true);
                }
                else {
                    set_last(false);
                }
                // eslint-disable-next-line eqeqeq
                if (question_list[0].id == question_id) {
                    set_first(true);
                }
                else {
                    set_first(false);
                }
            }

            //load
            url = baseURL + '/sessions/' + localStorage.getItem("session_id") + '/items/' + question_id;

            axios.get(url)
                .then(function (response) {
                    localStorage.setItem("question_id", response.data.item.id);
                    setQuestion(response.data.item);
                })
                .catch(err => console.log(err));

            getBoxes(question_list.findIndex((el) => el.id === question_id));
        }
    }

    function handleNext() {
        if (is_adaptive_test) {
            handleSendOne(0);
        }
        else if (question_list[question_list.length - 1].id !== Number(localStorage.getItem("question_id"))) {
            for (var i = 0; i < question_list.length; i++) {
                if (question_list[i].id === Number(localStorage.getItem("question_id"))) {
                    handleSendOne(question_list[i + 1].id);
                }
            }
        }
    }
    function handlePrev() {
        if (!is_adaptive_test && question_list[0].id !== Number(localStorage.getItem("question_id"))) {
            for (var i = 0; i < question_list.length; i++) {
                if (question_list[i].id === Number(localStorage.getItem("question_id"))) {
                    handleSendOne(question_list[i - 1].id);
                }
            }
        }
    }

    function handleSendAll() {  //завершение

        if (!is_adaptive_test) {
            handleSendOne(localStorage.getItem("question_id"));
        }
        //console.log(localStorage.getItem("question_id"));

        let url = baseURL + '/sessions/' + localStorage.getItem("session_id") + '/complete';

        axios.patch(url)
            .then(function (response) {
                localStorage.removeItem("session_id");
                localStorage.removeItem("question_id");
                if (!is_adaptive_test) {
                    localStorage.removeItem("question_list");
                }
                localStorage.removeItem("tid");
                localStorage.setItem("Result", JSON.stringify(response.data));
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

                <Dialog open={open3} onClose={handleCloseTimeWarn} aria-labelledby="time-warning">
                    <DialogTitle id="time-warning">Предупреждение</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Время на прохождение теста подходит к концу.</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseTimeWarn} color="primary">Закрыть</Button>
                    </DialogActions>
                </Dialog>

                

                    <div className="test-menu">
                        {menubtns && started && !is_adaptive_test &&
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
                    <div className="quest-back">
                    {question.itemType === "MULTIPLE_CHOICE" && <QMultiRadio qname={question.question} cnt={question.answers.length} a_arr={question.answers} Qpic={question.pictures[0] ?? ""} />}
                    {question.itemType === "MULTIPLE_ANSWER" && <QMultiCheckbox qname={question.question} cnt={question.answers.length} a_arr={question.answers} Qpic={question.pictures[0] ?? ""} />}
                    {(question.itemType === "TEXT" || question.itemType === "NUMBER") &&
                        <QShort qname={question.question} qa={question.answers[0]?.answer ?? ""}
                            correctN={question.answers[0]?.correctNumber ?? ""} correctT={question.answers[0]?.correctAnswer ?? ""} Qpic={question.pictures[0] ?? ""}
                        />}
                    {question.itemType === "SORTING" && <QSorting qname={question.question} cnt={question.answers.length} a_arr={question.answers} Qpic={question.pictures[0] ?? ""} />}
                    {question.itemType === "MATCHING" && <QMatching qname={question.question} cnt={question.answers.length} a_arr={question.answers} Qpic={question.pictures[0] ?? ""} />}
                    </div>
                

                

                <div className="quest-btn">
                    {started && !is_adaptive_test && !is_first && <input onClick={handlePrev} className="btn btn-2" type="submit" value="&lang; Предыдущий " />}
                    {started && !is_adaptive_test && (is_first || is_last) && <div className="pseudo-btn" />}
                    {started && !is_adaptive_test && !is_last && <input onClick={handleNext} className="btn btn-2" type="submit" value="Следующий &rang;" />}
                </div>

                <div className="quest-btn">
                    {!started && <input onClick={handleFirst} className="btn btn-1" type="submit" value="Начать тест" />}     
                    {started && is_adaptive_test && <input onClick={handleNext} className="btn btn-1" type="submit" value="Подтвердить &#10004;" />}
                    {started && <input onClick={handleClickOpenWarn} className="btn-fin2" type="submit" value="Завершить" />}
                </div>
           
            </div>
        </main>
    )
}

export default ActiveTest