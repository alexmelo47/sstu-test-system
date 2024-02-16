import React, { Component, useState} from 'react'
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

export default function Attestation() {

        
    const[open, setOpen] = React.useState(false);
    const handleClickOpenWarn = () => {
      setOpen(true);
    }
    const handleClose = () => {
      setOpen(false);
    }

    //aid={a_arr[i].id} aname={a_arr[i].answer} selected={a_arr[i].selected}
    //aid={a_arr[i].id} aname={a_arr[i].answer} selected={a_arr[i].selected}
    //aid_arr={aids} aname={a_arr[i].answer} anum={a_arr[i].number}
    let answersR, answersC, answersS, answersM;
    answersR = [];
    answersC = [];
    answersS = [];
    answersM = [];

    let idrcs,i;
    let aidar = [];

    for (i = 0; i < 3; i++) {
        aidar.push(i);
    }

    for (i = 0; i < 3; i++) {
        idrcs = i + "r";
        answersR.push({ id: idrcs, answer: "answer", selected: 1 });
        idrcs = i + "c";
        answersC.push({ id: idrcs, answer: "answer", selected: 1 });
        idrcs = i + "s";
        answersS.push({ id: idrcs, answer: "answer", number: 1 });
    }

    for (i = 0; i < 5; i++) {
        idrcs = i + "m";
        if (i%2 === 0) {
            answersM.push({ id: idrcs, answer: "answer", type: "L", number: 1 });
        }
        else {
            answersM.push({ id: idrcs, answer: "answer", type: "R", number: 1 });
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
                <button className="btn-menu"><span>1</span></button>
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
                <button className="btn-menu"><span>N</span></button>
                <button className="btn-menu"><span>N</span></button>
                <button className="btn-menu"><span>16</span></button>
                <button className="btn-menu"><span>N</span></button>
                <button className="btn-menu"><span>N</span></button>
                <button className="btn-menu"><span>N</span></button>
                <button className="btn-menu"><span>N</span></button>
            </div>

            <input className="btn-fin" type="submit" value="Завершить тестирование"/>

        <div className="content-block">
            <fieldset>
                <legend><h3>&nbsp;Информатика 2 курс&nbsp;</h3></legend> 

                <a className="btn btn-1" onClick={handleClickOpenWarn}> &nbsp;Предупреждение&nbsp; </a>
                        <Dialog open={open} onClose={handleClose} aria-aria-labelledby="warning">
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
                                <label htmlFor="var_1">&nbsp;Текстовый редактор</label><br/>
                        </div>
                        <div>
                            <input id="var_2" type="radio" name="var" value="1"/>
                                <label htmlFor="var_2">&nbsp;Табличный редактор</label><br/>
                        </div>
                        <div>
                            <input id="var_3" type="radio" name="var" value="3"/>
                                <label htmlFor="var_3">&nbsp;Редактор презентаций</label><br/>
                        </div>
                        <div>
                            <input id="var_4" type="radio" name="var" value="4"/>
                                <label htmlFor="var_4">&nbsp;Графический редактор</label><br/>
                        </div>
                    </form><br/>
                </div>


                <div className="question">
                    <br/><br/>Из чего состоят функции в среде MS Excel?<br/>
                    Выберите несколько вариантов ответа (не менее двух)!<br/><br/>
                </div>

                <div className="question">
                    <form>
                        <div>
                            <input id="var_1" type="checkbox" name="var" value="1"/> 
                                <label htmlFor="var_1">&nbsp;Названия</label><br/>
                        </div>
                        <div>
                            <input id="var_2" type="checkbox" name="var" value="1"/>
                                <label htmlFor="var_2">&nbsp;Константы</label><br/>
                        </div>
                        <div>
                            <input id="var_3" type="checkbox" name="var" value="3"/>
                                <label htmlFor="var_3">&nbsp;Переменные</label><br/>
                        </div>
                        <div>
                            <input id="var_4" type="checkbox" name="var" value="4"/>
                                <label htmlFor="var_4">&nbsp;Аргументы</label><br/> 
                        </div>
                    </form><br/>
                </div>


                <div className="question">
                    <br/><br/>Напишите оператор сравнения НЕРАВНО в среде MS Excel?<br/><br/>
                </div>

                <div className="question">
                    <form>
                        <div>
                            <label htmlFor="var_1">Ответ:</label><input id="var_1" type="text" name="var"/><br/>
                        </div>
                    </form><br/>
                </div>


                <div className="question">
                    <br/><br/>Установите соответствие:<br/>
                    Выбранный ответ можно стереть и выбрать заново!<br/><br/>
                </div>
                
                <div className="question">
                    <form>
                    <div className="dropdown">
                        <label htmlFor="var_4">MS Word - &nbsp;</label>
                        <input  type="text" list="browsers"/>
                        <datalist id="browsers">
                            <option value="Текстовый редактор"/>
                            <option value="Округляет значения вниз (с недостатком)"/>
                            <option value="Возвращает положительный квадратный корень из числа"/>
                            <option value="Красиво оформленный текст с возможностью редактирования"/>
                        </datalist>
                    </div><br/>

                    <div className="dropdown">
                        <label htmlFor="var_4">Функция КОРЕНЬ() - &nbsp;</label>
                        <input  type="text" list="browsers"/>
                        <datalist id="browsers">
                            <option value="Текстовый редактор"/>
                            <option value="Округляет значения вниз (с недостатком)"/>
                            <option value="Возвращает положительный квадратный корень из числа"/>
                            <option value="Красиво оформленный текст с возможностью редактирования"/>
                        </datalist>
                    </div><br/>

                    <div className="dropdown">
                        <label htmlFor="var_4">Объекты WordArt - &nbsp;</label>
                        <input  type="text" list="browsers"/>
                        <datalist id="browsers">
                            <option value="Текстовый редактор"/>
                            <option value="Округляет значения вниз (с недостатком)"/>
                            <option value="Возвращает положительный квадратный корень из числа"/>
                            <option value="Красиво оформленный текст с возможностью редактирования"/>
                        </datalist>
                    </div><br/>

                    <div className="dropdown">
                        <label htmlFor="var_4">Функция ОКРУГЛВНИЗ() - &nbsp;</label>
                        <input  type="text" list="browsers"/>
                        <datalist id="browsers">
                            <option value="Текстовый редактор"/>
                            <option value="Округляет значения вниз (с недостатком)"/>
                            <option value="Возвращает положительный квадратный корень из числа"/>
                            <option value="Красиво оформленный текст с возможностью редактирования"/>
                        </datalist>
                    </div><br/>
                    </form>
                </div>


                <div className="question">
                    <br/><br/>Укажите правильный порядок действий для создания нового стиля в MS Excel:<br/>
                    Выбранный ответ можно стереть и выбрать заново!<br/><br/>
                </div>
                
                <div className="question">
                    <form>
                    <div className="dropdown">
                        <label htmlFor="var_5">Создать стиль ячейки - &nbsp;</label>
                        <input  type="text" list="browsers2"/>
                        <datalist id="browsers2">
                            <option value='1'/>
                            <option value='2'/>
                            <option value='3'/>
                            <option value='4'/>
                        </datalist>
                    </div><br/>

                    <div className="dropdown">
                        <label htmlFor="var_5">Выбрать команду Главная - &nbsp;</label>
                        <input  type="text" list="browsers2"/>
                        <datalist id="browsers2">
                            <option value="1"/>
                            <option value="2"/>
                            <option value="3"/>
                            <option value="4"/>
                        </datalist>
                    </div><br/>

                    <div className="dropdown">
                        <label htmlFor="var_5">Открыть Стили - &nbsp;</label>
                        <input  type="text" list="browsers2"/>
                        <datalist id="browsers2">
                            <option value="1"/>
                            <option value="2"/>
                            <option value="3"/>
                            <option value="4"/>
                        </datalist>
                    </div><br/>

                    <div className="dropdown">
                        <label htmlFor="var_5">Открыть Стили ячеек - &nbsp;</label>
                        <input  type="text" list="browsers2"/>
                        <datalist id="browsers2">
                            <option value="1"/>
                            <option value="2"/>
                            <option value="3"/>
                            <option value="4"/>
                        </datalist>
                    </div><br/>
                    </form>
                </div>



                <div className="question">
                    <br/><br/><p className="questiontext">
                            <span>
                                <p>Напишите оператор сравнения НЕРАВНО в среде MS Excel?</p>
                            </span>
                    </p><br/><br/>
                

               
                    <ul className="multichoice">
                        <li><input name="quest_897582" type="radio" value="&lt;p&gt;&lt;span style=&#039;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;&#039;&gt;Шара&lt;/span&gt;&lt;/p&gt;" /><label>Названия</label></li>
                        <li><input name="quest_897582" type="radio" value="&lt;p&gt;&lt;span style=&#039;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;&#039;&gt;Бублика&lt;/span&gt;&lt;/p&gt;" /><label>Константы</label></li>
                        <li><input name="quest_897582" type="radio" value="&lt;p&gt;&lt;span style=&#039;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;&#039;&gt;Блина&lt;/span&gt;&lt;/p&gt;" /><label>Переменные</label></li>
                        <li><input name="quest_897582" type="radio" value="&lt;p&gt;&lt;span style=&#039;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;&#039;&gt;Чемодана&lt;/span&gt;&lt;/p&gt;" /><label>Аргументы</label></li>
                    </ul>
                    <br/><br/>

                    <ul className="multichoice">
                        <li><input name="quest_897581" type="checkbox" value="&lt;p&gt;&lt;span style=&#039;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;&#039;&gt;Два&lt;/span&gt;&lt;/p&gt;" /><label>Два</label></li>
                        <li><input name="quest_897581" type="checkbox" value="&lt;p&gt;&lt;span style=&#039;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;&#039;&gt;Четыре&lt;/span&gt;&lt;/p&gt;" /><label>Четыре</label></li>
                        <li><input name="quest_897581" type="checkbox" value="&lt;p&gt;&lt;span style=&#039;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;&#039;&gt;Один&lt;/span&gt;&lt;/p&gt;" /><label>Один</label></li>
                        <li><input name="quest_897581" type="checkbox" value="&lt;p&gt;&lt;span style=&#039;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;&#039;&gt;Три&lt;/span&gt;&lt;/p&gt;" /><label>Три</label></li>
                        <li><input name="quest_897581" type="checkbox" value="&lt;p&gt;&lt;span style=&#039;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;&#039;&gt;Пять&lt;/span&gt;&lt;/p&gt;" /><label>Пять</label></li>
                    </ul>
                    <br/><br/>

                    <ul className="shortanswer/numerical">
                        <li>
                                <label className="accesshide" htmlFor="quest_897587">Ответ</label>
                        <input id="quest_897587" name="quest_897587" type="text" />
                        </li>
                    </ul>
                    <br/><br/>

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
                        <label className="accesshide" for="quest_897580_3" >Открыть Стили ячеек - &nbsp;</label>
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


                    <br /><br /><p className="questiontext"></p>
                    <span>
                        <p>ТЕСТ КОМПОНЕНТОВ</p>
                    </span>
                    <br /><br />
                    
                    <QShort qname="Напишите оператор сравнения НЕРАВНО в среде MS Excel?" />
                    <QMultiRadio qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersR} />
                    <QMultiCheckbox qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersC} />
                    <QSorting qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={2} a_arr={answersS} />
                    <QMatching qname="оператор сравнения НЕРАВНО в среде MS Excel?" cnt={4} a_arr={answersM} />

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
