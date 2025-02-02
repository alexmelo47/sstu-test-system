// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import QShort from '../components/qa/QShort'
import QMultiRadio from '../components/qa/QMultiRadio'
import QMultiCheckbox from '../components/qa/QMultiCheckbox'
import QSorting from '../components/qa/QSorting'
import QMatching from '../components/qa/QMatching'

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import Timer from "../components/Timer";

export default function Attestation() {

    //тестовая форма предупреждения вопросов без ответов    
    const[open, setOpen] = React.useState(false);
    const handleClickOpenWarn = () => {
      setOpen(true);
    }
    const handleClose = () => {
      setOpen(false);
    }

    //тестовая форма информации о тесте
    const [open2, setOpenTest] = React.useState(false);
    const handleClickOpenTest = () => {
        setOpenTest(true);
    }
    const handleCloseTest = () => {
        setOpenTest(false);
    }

    const [open3, setTimeWarn] = React.useState(false);
    const handleClickOpenTimeWarn = () => {
        setTimeWarn(true);
    }
    const handleCloseTimeWarn = () => {
        setTimeWarn(false);
    }

    const [open4, setAccessWarn] = React.useState(false);
    const handleClickOpenAccessWarn = () => {
        setAccessWarn(true);
    }
    const handleCloseAccessWarn = () => {
        setAccessWarn(false);
    }


    //aid={a_arr[i].id} aname={a_arr[i].answer} selected={a_arr[i].selected}
    //aid={a_arr[i].id} aname={a_arr[i].answer} selected={a_arr[i].selected}
    //aid_arr={aids} aname={a_arr[i].answer} anum={a_arr[i].number}
    let answersR, answersC, answersS, answersM;
    answersR = [];
    answersC = [];
    answersS = [];
    answersM = [];

    let answersRpic, answersCpic, answersSpic, answersMpic;
    answersRpic = [];
    answersCpic = [];
    answersSpic = [];
    answersMpic = [];

    let idrcs,i;
    let aidar = [];

    for (i = 0; i < 3; i++) {
        aidar.push(i);
    }

    for (i = 0; i < 3; i++) {
        idrcs = i + "r";
        answersR.push({ id: idrcs, answer: "answer" + i, selected: 1, pictures: [{}] });
        idrcs = i + "c";
        answersC.push({ id: idrcs, answer: "answer" + i, selected: 1, pictures: [{}] });
        idrcs = i + "s";
        answersS.push({ id: idrcs, answer: "answer" + i, number: 1, pictures: [{}] });
    }

    for (i = 0; i < 5; i++) {
        idrcs = i + "m";
        if (i%2 === 0) {
            answersM.push({ id: idrcs, answer: "answer" + i, type: "L", number: 1, pictures: [{}] });
        }
        else {
            answersM.push({ id: idrcs, answer: "answer" + i, type: "R", number: 1 });
        }
    }

    for (i = 0; i < 3; i++) {
        idrcs = i + "r";
        answersRpic.push({ id: idrcs, answer: "answer" + i, selected: 1, pictures: [{ "url": "../img/testpic.jpg" } ] });
        idrcs = i + "c";
        answersCpic.push({ id: idrcs, answer: "answer" + i, selected: 1, pictures: [{ "url" : "../img/testpic.jpg" } ] });
        idrcs = i + "s";
        answersSpic.push({ id: idrcs, answer: "answer" + i, number: 1, pictures: [{ "url": "../img/testpic.jpg" }] });
    }

    for (i = 0; i < 5; i++) {
        idrcs = i + "m";
        if (i % 2 === 0) {
            answersMpic.push({ id: idrcs, answer: "answer" + i, type: "L", number: 1, pictures: [{ "url": "../img/testpic.jpg" }] });
        }
        else {
            answersMpic.push({ id: idrcs, answer: "answer" + i, type: "R", number: 1 });
        }
    }

    return (
        /* 
        Страница с примерами визуализации разных типов вопросов: 
            1 вариант ответа(1)
            несколько вариантов ответа (1)
            ввод ответа вручную (1)
            на соответствие (1)
            на соответствие (2)
            1 вариант ответа(2)
            несколько вариантов ответа (2)
            ввод ответа вручную (2)
            выбор правильного порядка 
            ввод ответа вручную (3)

            ТЕСТОВАЯ СЕКЦИЯ КОМПОНЕНТ
        */
    <main>
        
        <div className="test-menu">
            <button className="btn-menu btn-menu-answered"><span>1</span></button>
            <button className="btn-menu btn-menu-answered"><span>N</span></button>
            <button className="btn-menu btn-menu-answered btn-menu-focus"><span>N</span></button>
            <button className="btn-menu btn-menu-focus"><span>N</span></button>
            <button className="btn-menu"><span>N</span></button>
            <button className="btn-menu"><span>N</span></button>
            <button className="btn-menu"><span>N</span></button>
            <button className="btn-menu"><span>N</span></button>
            <button className="btn-menu"><span>N</span></button>
            <button className="btn-menu"><span>N</span></button>
            <button className="btn-menu"><span>N</span></button>
            <button className="btn-menu"><span>N</span></button>
            <button className="btn-menu"><span>N</span></button>
            <button className="btn-menu"><span>N</span></button>
            <button className="btn-menu"><span>N</span></button>
            <button className="btn-menu"><span>16</span></button>
            <button className="btn-menu"><span>N</span></button>
            <button className="btn-menu"><span>N</span></button>
            <button className="btn-menu"><span>N</span></button>
            <button className="btn-menu"><span>N</span></button>
        </div>

        <div className="timer-position">
            <Timer dl={"January, 31, 2025"} />
        </div>
        
            <div className="content-block">
                <br />
                <div>
                    <ul className="test-list examinational">
                        <li>Математика</li>
                        <li>Итоговый</li>
                        <li>Доступ до:</li>
                        <li><button className="open-test" onClick={handleClickOpenTest}>Открыть тест</button>
                        <Dialog open={open2} onClose={handleCloseTest} aria-labelledby="test-info">
                           <DialogTitle id="test-info">Название теста</DialogTitle> 
                            <DialogContent>
                                <DialogContentText><b>Дисциплина:</b>  /Название дисциплины/</DialogContentText>
                                <DialogContentText><b>Преподаватель:</b> /ФИО преподавателя/ </DialogContentText>
                                <DialogContentText><b>Тест доступен до:</b> /Дата закрытия доступа к тесту/ </DialogContentText>
                                <DialogContentText><b>Время на выполнение теста (минут):</b> /количество/ </DialogContentText>
                                <DialogContentText><b>Количество попыток:</b> /количество/  </DialogContentText>
                                
                                <DialogContentText><b>Проверяемые компетенции:</b> /список/</DialogContentText>
                                <DialogContentText><b>Инструкция к выполнению:</b> <br/>Вам необходимо выполнить /количество/ заданий. Перечень заданий изображен в виде светлых кнопок в правом верхнем углу экрана. Каждое задание вызывается нажатием на соответствующую кнопку. Время, оставшееся до конца тестирования, показано.
                                        <br />Вы можете  выполнять задания в любом порядке, возвращаться к уже выполненному заданию и изменять Ваш ответ.  Кнопки, соответствующие уже выполненным заданиям, меняют свой цвет.  Для окончания тестирования нажмите кнопку “завершить тестирование”.</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseTest} color="primary">Начать тест</Button>
                                <Button onClick={handleCloseTest} color="primary">Закрыть</Button>
                            </DialogActions>
                        </Dialog>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="test-list intermediate">
                        <li>Русский</li>
                        <li>Промежуточный</li>
                        <li>Доступ до:</li>
                        <li><button className="open-test">Открыть тест</button></li>
                    </ul>
                </div>

                <div>
                    <ul className="test-list training">
                        <li>Информатика</li>
                        <li>Тренировочный</li>
                        <li>Доступ до:</li>
                        <li><button className="open-test">Открыть тест</button></li>
                    </ul>
                </div>

                <div>
                    <ul className="test-list wip">
                        <li>Информатика</li>
                        <li>В разработке</li>
                        <li>Доступ до:</li>
                        <li><button className="open-test">Открыть тест</button></li>
                    </ul>
                </div>
                <div>
                    <ul className="test-list debug">
                        <li>Информатика</li>
                        <li>Отладка</li>
                        <li>Доступ до:</li>
                        <li><button className="open-test">Открыть тест</button></li>
                    </ul>
                </div>
            <fieldset>
                <legend><h3>&nbsp;Информатика 2 курс&nbsp;</h3></legend> 

                    <a className="btn btn-1" onClick={handleClickOpenWarn}> &nbsp;Предупреждение&nbsp; Вы не ответили</a>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="warning">
                           <DialogTitle id="warning">Предупреждение</DialogTitle> 
                            <DialogContent>
                                <DialogContentText>Вы не ответили на один или более вопросов. Вы уверены, что хотите продолжить?</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">Да</Button>
                                <Button onClick={handleClose} color="primary">Нет</Button>
                            </DialogActions>
                        </Dialog>

                    <a className="btn btn-1" onClick={handleClickOpenTimeWarn}> &nbsp;Предупреждение&nbsp; Время на прохождение</a>
                        <Dialog open={open3} onClose={handleCloseTimeWarn} aria-labelledby="time-warning">
                           <DialogTitle id="time-warning">Предупреждение</DialogTitle> 
                            <DialogContent>
                                <DialogContentText>Время на прохождение теста подходит к концу.</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseTimeWarn} color="primary">Закрыть</Button>                                
                            </DialogActions>
                        </Dialog>

                    <a className="btn btn-1" onClick={handleClickOpenAccessWarn}> &nbsp;Предупреждение&nbsp; необходимо авторизоваться</a>
                        <Dialog open={open4} onClose={handleCloseAccessWarn} aria-labelledby="access-warning">
                           <DialogTitle id="access-warning">Предупреждение</DialogTitle> 
                            <DialogContent>
                                <DialogContentText>Для выполнения данного действия необходимо авторизоваться.</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseAccessWarn} color="primary">Авторизоваться</Button>                                
                            </DialogActions>
                            <DialogActions>
                                <Button onClick={handleCloseAccessWarn} color="primary">Закрыть</Button>                                
                            </DialogActions>
                        </Dialog>
                

                <div className="question">
                    <br/>Microsoft Office Word это ... <br/><br/>
                </div>

                <div className="question">
                    <form>
                        <div>
                            <input id="var_1" type="radio" name="var" value="1"/> 
                                <label htmlFor="var_1">&nbsp;Текстовый редактор</label><br/><br/>
                        </div>
                        <div>
                            <input id="var_2" type="radio" name="var" value="1"/>
                                <label htmlFor="var_2">&nbsp;Табличный редактор</label><br/><br/>
                        </div>
                        <div>
                            <input id="var_3" type="radio" name="var" value="3"/>
                                <label htmlFor="var_3">&nbsp;Редактор презентаций</label><br/><br/>
                        </div>
                        <div>
                            <input id="var_4" type="radio" name="var" value="4"/>
                                <label htmlFor="var_4">&nbsp;Графический редактор</label><br/><br/>
                        </div>
                    </form><br/>
                </div>


                <div className="question">
                    <br />Вопрос с картинкой: <br /><br />
                    <img className="question-pic" alt="" src='../img/testpic.jpg' /><br /><br />
                </div>

                <div className="question">
                    <form>
                        <div>
                            <input id="var_1" type="radio" name="var" value="1" />
                                <label htmlFor="var_1">&nbsp;<img alt="" className="answer-pic" src='../img/testpic.jpg' /></label><br /><br />
                        </div>
                        <div>
                            <input id="var_2" type="radio" name="var" value="1"/>
                                <label htmlFor="var_2">&nbsp;<img alt="" className="answer-pic" src='../img/testpic.jpg' /></label><br/><br/>
                        </div>
                        <div>
                            <input id="var_3" type="radio" name="var" value="3"/>
                                <label htmlFor="var_3">&nbsp;<img alt="" className="answer-pic" src='../img/testpic.jpg' /></label><br/><br/>
                        </div>
                        <div>
                            <input id="var_4" type="radio" name="var" value="4"/>
                                <label htmlFor="var_4">&nbsp;<img alt="" className="answer-pic" src='../img/testpic.jpg' /></label><br/><br/>
                        </div>
                    </form><br/>
                </div>


                <div className="question">
                    <br/><br/>Из чего состоят функции в среде MS Excel? Выберите несколько вариантов ответа (не менее двух)!<br/><br/>
                </div>

                <div className="question">
                    <form>
                        <div>
                            <input id="var_1" type="checkbox" name="var" value="1"/> 
                                <label htmlFor="var_1">&nbsp;Названия</label><br/><br/>
                        </div>
                        <div>
                            <input id="var_2" type="checkbox" name="var" value="1"/>
                                <label htmlFor="var_2">&nbsp;Константы</label><br/><br/>
                        </div>
                        <div>
                            <input id="var_3" type="checkbox" name="var" value="3"/>
                                <label htmlFor="var_3">&nbsp;Переменные</label><br/><br/>
                        </div>
                        <div>
                            <input id="var_4" type="checkbox" name="var" value="4"/>
                                <label htmlFor="var_4">&nbsp;Аргументы</label><br/><br/>
                        </div>
                    </form><br/>
                </div>


                <div className="question">
                    <br/><br/>Напишите оператор сравнения НЕРАВНО в среде MS Excel?<br/><br/>
                </div>

                <div className="question">
                    <form>
                        <div>
                            <label htmlFor="var_1">Ответ:</label><input id="var_1" type="text" name="var" placeholder="Введите ответ здесь"/><br/>
                        </div>
                    </form><br/>
                </div>


                <div className="question">
                    <br/><br/>Вопрос с выпадающим списком: <br/><br/>
                </div>

                <div className="question">
                <ul className="match">

                        <form>

                        <div className="matches">
                        <label className="accesshide" htmlFor="quest_897580_0">Создать стиль ячейки -&nbsp;</label>
                        <select id="quest_897580_0" className="select custom-select menuquest_897580_0" name="quest_897580_0">
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                        </select><br/>
                        </div>
                        
                        <div className="matches">
                        <label className="accesshide" htmlFor="quest_897580_1">Выбрать команду Главная - &nbsp;</label>
                        <select id="quest_897580_1" className="select custom-select menuquest_897580_1" name="quest_897580_1">
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                        </select><br/>
                        </div>
                        
                        <div className="matches">
                        <label className="accesshide" htmlFor="quest_897580_2">Открыть Стили - &nbsp;</label>
                        <select id="quest_897580_2" className="select custom-select menuquest_897580_2" name="quest_897580_2">
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                        </select><br/>
                        </div>
                        
                        <div className="matches">
                        <label className="accesshide" htmlFor="quest_897580_3" >Открыть Стили ячеек - &nbsp;</label>
                        <select id="quest_897580_3" className="select custom-select menuquest_897580_3" name="quest_897580_3">
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                        </select><br/>
                        </div>

                        </form>

                    </ul>
                    <br/>
                </div>

                <div className="question">
                    <br/><br/>Вопрос с выпадающим списком c картинкой: <br/><br/>
                    <img alt="" className="question-pic" src='../img/testpic.jpg' /><br/><br/>
                </div>

                <div className="question">
                <ul className="match">

                        <form>

                        <div className="matches">
                        <label><img alt="" className="answer-pic" src='../img/testpic.jpg' />&nbsp;</label>
                        <select id="" className="select " name="">
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                        </select><br/>
                        </div>
                        
                        <div className="matches">
                        <label><img alt="" className="answer-pic" src='../img/testpic.jpg' />&nbsp;</label>
                        <select id="" className="select" name="">
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                        </select><br/>
                        </div>
                        
                        <div className="matches">
                        <label><img alt="" className="answer-pic" src='../img/testpic.jpg' />&nbsp;</label>
                        <select id="" className="select " name="">
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                        </select><br/>
                        </div>
                        
                        <div className="matches">
                        <label><img alt="" className="answer-pic" src='../img/testpic.jpg' />&nbsp;</label>
                        <select id="" className="select" name="">
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                        </select><br/>
                        </div>

                        </form>
                        
                    </ul>
                    <br/>
                </div>


                <br /><br /><p className="questiontext"></p>
                <span>
                    <p>ТЕСТ КОМПОНЕНТОВ</p>
                </span>
                <br /><br />
                    
                <QShort qname="Напишите оператор сравнения НЕРАВНО в среде MS Excel?" Qpic={{ url: "" }} />
                <QMultiRadio qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersR} Qpic={{ url: "" }} />
                <QMultiCheckbox qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersC} Qpic={{ url: "" }} />
                <QSorting qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersS} Qpic={{ url: "" }} />
                <QMatching qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={4} a_arr={answersM} Qpic={{ url: "" }} />
                <br />

                <span>
                    <p>ТЕСТ КОМПОНЕНТОВ С КАРТИНКАМИ</p>
                </span>
                <br /><br />

                <QShort qname="Напишите оператор сравнения НЕРАВНО в среде MS Excel?" Qpic={{ url: "../img/testpic.jpg" }} />
                <QMultiRadio qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersRpic} Qpic={{ url: "../img/testpic.jpg" }} />
                <QMultiCheckbox qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersCpic} Qpic={{ url: "../img/testpic.jpg" }} />
                <QSorting qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersSpic} Qpic={{ url: "../img/testpic.jpg" }} />
                <QMatching qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={4} a_arr={answersMpic} Qpic={{ url: "../img/testpic.jpg" }} />
                <br />

                <span>
                    <p>ТЕСТ КОМПОНЕНТОВ С РЕЗУЛЬТАТАМИ(т1 - вопросы)</p>
                </span>
                <br /><br />

                <QShort qname="Напишите оператор сравнения НЕРАВНО в среде MS Excel?" Qpic={{ url: "../img/testpic.jpg" }} rtype={1} status={false} />
                <QMultiRadio qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersRpic} Qpic={{ url: "../img/testpic.jpg" }} rtype={1} status={false} />
                <QMultiCheckbox qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersCpic} Qpic={{ url: "../img/testpic.jpg" }} rtype={1} status={false} />
                <QSorting qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersSpic} Qpic={{ url: "../img/testpic.jpg" }} rtype={1} status={false} />
                <QMatching qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={4} a_arr={answersMpic} Qpic={{ url: "../img/testpic.jpg" }} rtype={1} status={false} />

                <QShort qname="Напишите оператор сравнения НЕРАВНО в среде MS Excel?" Qpic={{ url: "" }} rtype={1} status={true} />
                <QMultiRadio qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersR} Qpic={{ url: "" }} rtype={1} status={true} />
                <QMultiCheckbox qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersC} Qpic={{ url: "" }} rtype={1} status={true} />
                <QSorting qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersS} Qpic={{ url: "" }} rtype={1} status={true} />
                <QMatching qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={4} a_arr={answersM} Qpic={{ url: "" }} rtype={1} status={true} />
                <br />

                <span>
                    <p>ТЕСТ КОМПОНЕНТОВ С РЕЗУЛЬТАТАМИ(т2 - ответы)</p>
                </span>
                <br /><br />

                <QShort qname="Напишите оператор сравнения НЕРАВНО в среде MS Excel?" Qpic={{ url: "../img/testpic.jpg" }} rtype={2} status={false} />
                <QMultiRadio qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersRpic} Qpic={{ url: "../img/testpic.jpg" }} rtype={2} status={false} />
                <QMultiCheckbox qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersCpic} Qpic={{ url: "../img/testpic.jpg" }} rtype={2} status={false} />
                <QSorting qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersSpic} Qpic={{ url: "../img/testpic.jpg" }} rtype={2} status={false} />
                <QMatching qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={4} a_arr={answersMpic} Qpic={{ url: "../img/testpic.jpg" }} rtype={2} status={false} />

                <QShort qname="Напишите оператор сравнения НЕРАВНО в среде MS Excel?" Qpic={{ url: "" }} rtype={2} status={true} />
                <QMultiRadio qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersR} Qpic={{ url: "" }} rtype={2} status={true} />
                <QMultiCheckbox qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersC} Qpic={{ url: "" }} rtype={2} status={true} />
                <QSorting qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersS} Qpic={{ url: "" }} rtype={2} status={true} />
                <QMatching qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={4} a_arr={answersM} Qpic={{ url: "" }} rtype={2} status={true} />
                <br />

                <span>
                    <p>ТЕСТ КОМПОНЕНТОВ С РЕЗУЛЬТАТАМИ(т3 - правильные)</p>
                </span>
                <br /><br />

                <QShort qname="Напишите оператор сравнения НЕРАВНО в среде MS Excel?" Qpic={{ url: "../img/testpic.jpg" }} rtype={3} status={false} />
                <QMultiRadio qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersRpic} Qpic={{ url: "../img/testpic.jpg" }} rtype={3} status={false} />
                <QMultiCheckbox qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersCpic} Qpic={{ url: "../img/testpic.jpg" }} rtype={3} status={false} />
                <QSorting qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersSpic} Qpic={{ url: "../img/testpic.jpg" }} rtype={3} status={false} />
                <QMatching qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={4} a_arr={answersMpic} Qpic={{ url: "../img/testpic.jpg" }} rtype={3} status={false} />

                <QShort qname="Напишите оператор сравнения НЕРАВНО в среде MS Excel?" Qpic={{ url: "" }} rtype={3} status={true} />
                <QMultiRadio qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersR} Qpic={{ url: "" }} rtype={3} status={true} />
                <QMultiCheckbox qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersC} Qpic={{ url: "" }} rtype={3} status={true} />
                <QSorting qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersS} Qpic={{ url: "" }} rtype={3} status={true} />
                <QMatching qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={4} a_arr={answersM} Qpic={{ url: "" }} rtype={3} status={true} />
                <br />

            </fieldset>

            <div className="quest-btn">
                <input className="btn btn-2" type="submit" value="&#9668; Предыдущий"/>
                <input className="btn btn-1" type="submit" value="Подтвердить &#9660;"/>
                <input className="btn btn-2" type="submit" value="Следующий &#9658;"/>
            </div>

            <div dir="rtl">
            <div className="quest-btn">
                             
                <input className="btn btn-2" type="submit" value="Следующий"/>
            </div>
            </div>

            <div className="quest-btn">                
                <input className="btn btn-1" type="submit" value="Подтвердить"/>
                <input className="btn-fin2" type="submit" value="Завершить"/>                
            </div>


                
        </div>
    </main>
    )

}
