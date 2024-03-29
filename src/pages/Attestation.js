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
        answersR.push({ id: idrcs, answer: "answer" + i, selected: 1, pictures: {} });
        idrcs = i + "c";
        answersC.push({ id: idrcs, answer: "answer" + i, selected: 1, pictures: {} });
        idrcs = i + "s";
        answersS.push({ id: idrcs, answer: "answer" + i, number: 1 });
    }

    for (i = 0; i < 5; i++) {
        idrcs = i + "m";
        if (i%2 === 0) {
            answersM.push({ id: idrcs, answer: "answer" + i, type: "L", number: 1 });
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
        answersSpic.push({ id: idrcs, answer: "answer" + i, number: 1 });
    }

    for (i = 0; i < 5; i++) {
        idrcs = i + "m";
        if (i % 2 === 0) {
            answersMpic.push({ id: idrcs, answer: "answer" + i, type: "L", number: 1 });
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
            <button className="btn-menu btn-menu-answered"><span>N</span></button>
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
            <button className="btn-menu"><span>N</span></button>
            <button className="btn-menu"><span>16</span></button>
            <button className="btn-menu"><span>N</span></button>
            <button className="btn-menu"><span>N</span></button>
            <button className="btn-menu"><span>N</span></button>
            <button className="btn-menu"><span>N</span></button>
        </div>

        <div className="timer-position">
        <Timer dl={"December, 31, 2022"} />
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
                                <DialogContentText><b>Результаты тестирования:</b>  /Требует уточнений/.</DialogContentText>
                                <DialogContentText><b>Проверяемые компетенции:</b> /список/</DialogContentText>
                                <DialogContentText><b>Инструкция к выполнению:</b> <br/>Вам необходимо выполнить /количество/ заданий. Перечень заданий изображен в виде светлых кнопок в правом верхнем углу экрана. Каждое задание вызывается нажатием на соответствующую кнопку. Время, оставшееся до конца тестирования, показано /Уточнить у Влада/.
                                                  <br/>Вы можете  выполнять задания в любом порядке, возвращаться к уже выполненному заданию и изменять Ваш ответ.  Кнопки, соответствующие уже выполненным заданиям, меняют свой цвет.  Для окончания тестирования нажмите кнопку /Уточнить у Влада/. </DialogContentText>
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

                <a className="btn btn-1" onClick={handleClickOpenWarn}> &nbsp;Предупреждение&nbsp; </a>
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
                    <br/>Вопрос с картинкой: <br/><br/>
                    <img className="question-pic" src='../img/testpic.jpg' /><br/><br/>
                </div>

                <div className="question">
                    <form>
                        <div>
                            <input id="var_1" type="radio" name="var" value="1" /> 
                                <label htmlFor="var_1">&nbsp;<img className="answer-pic" src='../img/testpic.jpg' /></label><br/><br/>
                        </div>
                        <div>
                            <input id="var_2" type="radio" name="var" value="1"/>
                                <label htmlFor="var_2">&nbsp;<img className="answer-pic" src='../img/testpic.jpg' /></label><br/><br/>
                        </div>
                        <div>
                            <input id="var_3" type="radio" name="var" value="3"/>
                                <label htmlFor="var_3">&nbsp;<img className="answer-pic" src='../img/testpic.jpg' /></label><br/><br/>
                        </div>
                        <div>
                            <input id="var_4" type="radio" name="var" value="4"/>
                                <label htmlFor="var_4">&nbsp;<img className="answer-pic" src='../img/testpic.jpg' /></label><br/><br/>
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
                    <img className="question-pic" src='../img/testpic.jpg' /><br/><br/>
                </div>

                <div className="question">
                <ul className="match">

                        <form>

                        <div className="matches">
                        <label><img className="answer-pic" src='../img/testpic.jpg' />&nbsp;</label>
                        <select id="" className="select " name="">
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                        </select><br/>
                        </div>
                        
                        <div className="matches">
                        <label><img className="answer-pic" src='../img/testpic.jpg' />&nbsp;</label>
                        <select id="" className="select" name="">
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                        </select><br/>
                        </div>
                        
                        <div className="matches">
                        <label><img className="answer-pic" src='../img/testpic.jpg' />&nbsp;</label>
                        <select id="" className="select " name="">
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                        </select><br/>
                        </div>
                        
                        <div className="matches">
                        <label><img className="answer-pic" src='../img/testpic.jpg' />&nbsp;</label>
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
                    
                    <QShort qname="Напишите оператор сравнения НЕРАВНО в среде MS Excel?" Qpic={""} />
                    <QMultiRadio qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersR} Qpic={""} />
                    <QMultiCheckbox qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersC} Qpic={""} />
                    <QSorting qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersS} Qpic={""} />
                    <QMatching qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={4} a_arr={answersM} Qpic={""} />
                    <br />

                    <span>
                        <p>ТЕСТ КОМПОНЕНТОВ С КАРТИНКАМИ</p>
                    </span>
                    <br /><br />

                    <QShort qname="Напишите оператор сравнения НЕРАВНО в среде MS Excel?" Qpic={"../img/testpic.jpg"} />
                    <QMultiRadio qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersRpic} Qpic={"../img/testpic.jpg"} />
                    <QMultiCheckbox qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersCpic} Qpic={"../img/testpic.jpg"} />
                    <QSorting qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersSpic} Qpic={"../img/testpic.jpg"} />
                    <QMatching qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={4} a_arr={answersMpic} Qpic={"../img/testpic.jpg"} />
                    <br />

                    

            </fieldset>

            <div className="quest-btn">
                <input className="btn btn-2" type="submit" value="Предыдущий"/>
                <input className="btn btn-1" type="submit" value="Подтвердить"/>
                <input className="btn btn-2" type="submit" value="Следующий"/>
            </div>
            <div>
                <input className="btn-fin2" type="submit" value="Завершить тестирование"/>
            </div>
                
        </div>
    </main>
    )

}
