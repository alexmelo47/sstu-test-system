import React, { useState, /*useEffect*/ } from 'react'
import { Navigate } from "react-router-dom"
import axios from 'axios'
import QShort from '../components/qa/QShort'
import QSorting from '../components/qa/QSorting'
import QMatching from '../components/qa/QMatching'
import QMultiCheckbox from '../components/qa/QMultiCheckbox'
import QMultiRadio from '../components/qa/QMultiRadio'
//import MenuBox from '../components/MenuBox'

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const baseURL = "https://maile.fita.cc";

const ActiveTest = () => {

    let testid = Number(localStorage.getItem("tid"));
    const [question, setQuestion] = useState([]);
    const [question_list, setQuestionList] = useState([]);
    const [started, set_started] = useState(false);
    const [loaded, set_loaded] = useState(false);
    const [is_adaptive_test] = useState(false);                 //don't forget to clen up all localstorage items ---> localStorage.getItem("adaptive")
    const [is_last, set_last] = useState(false);
    const [is_first, set_first] = useState(true);
    const [finished, set_finished] = useState(false);

   // const [menubtns, set_mb] = useState([]);
   // let menubtns = [];
   //
   // for (var i = 0; i < 100; i++) {
   //     menubtns.push(<Button onClick={() => { handleSendOne(i) } } className="menubox" variant="outlined">{i + 1}</Button >);//------>maybe will work somehow
   // }

    /*const [menustate, set_menustate] = useState(0);
    useEffect(() => {
        if (loaded) {
            let id = question_list[menustate].id;
            handleSendOne(id);
        }
        return () => {};
    }, [menustate]);*/
    
    const [open, setOpen] = useState(false);
    const handleClickOpenWarn = () => {
        let unanswered = false;
        axios.get(baseURL + '/sessions/' + localStorage.getItem("session_id") + '/items')//check answered
            .then(function (response) {
                console.log(response);
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

    //question_list[0].id !== Number(localStorage.getItem("question_id"))
    //question_list[question_list.length - 1].id !== Number(localStorage.getItem("question_id"))
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

                    axios.get(baseURL + '/sessions/' + localStorage.getItem("session_id") + '/items')//load boxes
                        .then(function (response) {
                            console.log(response);
                            setQuestionList(response.data);
                            localStorage.setItem("question_list", question_list);
                            if (response.data.length === 1) {
                                set_last(!is_last);
                            }

                            //for (let i = 0; i < question_list.length; i++) {
                            //    set_mb( // Replace the state
                            //        [ // with a new array
                            //            ...menubtns, // that contains all the old items
                            //            <Button variant="outlined" onClick={() => { handleSendOne(question_list[i].id) }}>{i}</Button> // and one new item at the end
                            //        ]
                            //    );
                            //    //menubtns.push(<Button variant="outlined" onClick={() => { handleSendOne(response.data[i].id) }}>{response.data[i].id}</Button>);
                            //}
                            set_loaded(!loaded);

                        })
                        .catch(err => console.log(err));

            })
            .catch(err => console.log(err));
        //setTimeout(() => { } , 400);
    };

    function prepPayload() {
        let answerload, Payload;
        Payload = {
            "answer": [],
            "text": null
        }

        if (question.type === "MULTIPLE_CHOICE") {
            let chosen_radio = document.getElementsByClassName("radioboxes");

            for (let i = 0; i < chosen_radio.length; i++) {
                if (chosen_radio[i].checked) {
                    answerload = Number(chosen_radio[i].value);
                    Payload.answer.push({ "id": answerload });
                }
            }
        }
        else if (question.type === "MULTIPLE_ANSWER") {
            answerload = [];
            let chosen_boxes = document.getElementsByClassName("checkboxes");

            for (let i = 0; i < chosen_boxes.length; i++) {
                if (chosen_boxes[i].checked) {
                    answerload.push(Number(chosen_boxes[i].value));
                    Payload.answer.push({ "id": Number(chosen_boxes[i].value) });
                }
            }
        }
        else if (question.type === "TEXT" || question.type === "NUMBER") {
            answerload = document.getElementById("AnsShort").value;
            Payload.text = answerload;
        }
        else if (question.type === "SORTING") {
            answerload = [];
            let chosen_order = document.getElementsByClassName("orderboxes");

            for (let i = 0; i < chosen_order.length; i++) {
                answerload.push(Number(chosen_order[i].value));
                Payload.answer.push({ "id": Number(chosen_order[i].value) });
            }
        }
        else if (question.type === "MATCHING") {
            answerload = [];
            let chosen_matches = document.getElementsByClassName("matchboxes");

            for (let i = 0; i < chosen_matches.length; i++) {

                answerload.push(Number(chosen_matches[i].value));
                console.log(chosen_matches[i].value);//------------------------------------------------------>debug if all works
                Payload.answer.push({ "id": Number(chosen_matches[i].value) });
                
                answerload.push(Number(chosen_matches[i].id));
                console.log(chosen_matches[i].id);//--------------------------------------------------------->debug if all works
                Payload.answer.push({ "id": Number(chosen_matches[i].id) });

            }
        }

        if (answerload === undefined || answerload.length === 0) {//не отправляем ничего, просто переход
            return "DONOTSEND";
        }
        else {
            return Payload;
        }
    }

    function handleSendOne(question_id) {//move to question by id

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

        //load question
        url = baseURL + '/sessions/' + localStorage.getItem("session_id") + '/items/' + question_id;

        axios.get(url)
            .then(function (response) {
                console.log(response);
                localStorage.setItem("question_id", response.data.id);
                setQuestion(response.data);
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

    function handleSendAll() {
        let url = baseURL + '/sessions/' + localStorage.getItem("session_id") + '/complete';

        axios.patch(url)
            .then(function (response) {
                console.log(response);
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

    /*
    <div id="test-menu-test">
                        {started && !is_adaptive_test && loaded && menubtns}
                        <Button variant="outlined" onClick={() => { console.log(question_list) }}>test</Button>
                    </div>
                    {started && !is_adaptive_test && loaded && <MenuBox cnt={question_list.length} />}
    */
    
    if (finished) {
        return <Navigate to="/result/" />
    }
    return (
        <main>

            {started && !is_adaptive_test && <input onClick={handleClickOpenWarn} className="btn-fin" type="submit" value="Завершить тестирование" />}
            <div className="content-block">

                <Dialog open={open} onClose={handleClose} aria-labelledby="warning">
                    <DialogTitle id="warning">Предупреждение</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Вы не ответили на один или более вопросов. Вы уверены, что хотите продолжить?</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleAccept} color="primary">Да</Button>
                        <Button onClick={handleClose} color="primary">Нет</Button>
                    </DialogActions>
                </Dialog>

                <fieldset>

                    <div id="menu-btns"></div>

                    {question.type === "MULTIPLE_CHOICE" && <QMultiRadio qname={question.question} cnt={question.answers.length} a_arr={question.answers} />}
                    {question.type === "MULTIPLE_ANSWER" && <QMultiCheckbox qname={question.question} cnt={question.answers.length} a_arr={question.answers} />}
                    {(question.type === "TEXT" || question.type === "NUMBER") && <QShort qname={question.question} qa={question.answers[0]?.answer ?? ""} />}
                    {question.type === "SORTING" && <QSorting qname={question.question} cnt={question.answers.length} a_arr={question.answers} />}
                    {question.type === "MATCHING" && <QMatching qname={question.question} cnt={question.answers.length} a_arr={question.answers} />}

                </fieldset>

                <div className="quest-btn">
                        {!started && <input onClick={handleFirst} className="btn btn-1" type="submit" value="Начать тест" />}
                        {started && !is_adaptive_test && !is_first && <input onClick={handlePrev} className="btn btn-2" type="submit" value="Предыдущий" />}
                        {started && !is_last && <input onClick={handleNext} className="btn btn-2" type="submit" value="Следующий" />}
                </div>
            </div>
        </main>
    )
}

export default ActiveTest