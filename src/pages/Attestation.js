import React, { Component, useState} from 'react'
import axios from 'axios'
import QShort from '../components/qa/QShort'

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

    return (
        /* 
        Страница с примерами визуализации разных типов вопросов: на 1 вариант ответа, 
        несколько вариантов ответа, 
        ввод ответа вручную, 
        на соответствие 
        и выбор правильного порядка 
        */
        <main>
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
                            <label for="var_1">&nbsp;Текстовый редактор</label><br/>
                        </div>
                        <div>
                            <input id="var_2" type="radio" name="var" value="1"/>
                            <label for="var_2">&nbsp;Табличный редактор</label><br/>
                        </div>
                        <div>
                            <input id="var_3" type="radio" name="var" value="3"/>
                            <label for="var_3">&nbsp;Редактор презентаций</label><br/>
                        </div>
                        <div>
                            <input id="var_4" type="radio" name="var" value="4"/>
                            <label for="var_4">&nbsp;Графический редактор</label><br/>
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
                            <label for="var_1">&nbsp;Названия</label><br/>
                        </div>
                        <div>
                            <input id="var_2" type="checkbox" name="var" value="1"/>
                            <label for="var_2">&nbsp;Константы</label><br/>
                        </div>
                        <div>
                            <input id="var_3" type="checkbox" name="var" value="3"/>
                            <label for="var_3">&nbsp;Переменные</label><br/>
                        </div>
                        <div>
                            <input id="var_4" type="checkbox" name="var" value="4"/>
                            <label for="var_4">&nbsp;Аргументы</label><br/> 
                        </div>
                    </form><br/>
                </div>


                <div className="question">
                    <br/><br/>Напишите оператор сравнения НЕРАВНО в среде MS Excel?<br/><br/>
                </div>

                <div className="question">
                    <form>
                        <div>
                            <label for="var_1">Ответ:</label><input id="var_1" type="text" name="var"/><br/>
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
                        <label  for="var_4">MS Word - &nbsp;</label>
                        <input  type="text" list="browsers"/>
                        <datalist id="browsers">
                            <option value="Текстовый редактор"/>
                            <option value="Округляет значения вниз (с недостатком)"/>
                            <option value="Возвращает положительный квадратный корень из числа"/>
                            <option value="Красиво оформленный текст с возможностью редактирования"/>
                        </datalist>
                    </div><br/>

                    <div className="dropdown">
                        <label for="var_4">Функция КОРЕНЬ() - &nbsp;</label>
                        <input  type="text" list="browsers"/>
                        <datalist id="browsers">
                            <option value="Текстовый редактор"/>
                            <option value="Округляет значения вниз (с недостатком)"/>
                            <option value="Возвращает положительный квадратный корень из числа"/>
                            <option value="Красиво оформленный текст с возможностью редактирования"/>
                        </datalist>
                    </div><br/>

                    <div className="dropdown">
                        <label for="var_4">Объекты WordArt - &nbsp;</label>
                        <input  type="text" list="browsers"/>
                        <datalist id="browsers">
                            <option value="Текстовый редактор"/>
                            <option value="Округляет значения вниз (с недостатком)"/>
                            <option value="Возвращает положительный квадратный корень из числа"/>
                            <option value="Красиво оформленный текст с возможностью редактирования"/>
                        </datalist>
                    </div><br/>

                    <div className="dropdown">
                        <label for="var_4">Функция ОКРУГЛВНИЗ() - &nbsp;</label>
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
                        <label  for="var_5">Создать стиль ячейки - &nbsp;</label>
                        <input  type="text" list="browsers2"/>
                        <datalist id="browsers2">
                            <option value='1'/>
                            <option value='2'/>
                            <option value='3'/>
                            <option value='4'/>
                        </datalist>
                    </div><br/>

                    <div className="dropdown">
                        <label for="var_5">Выбрать команду Главная - &nbsp;</label>
                        <input  type="text" list="browsers2"/>
                        <datalist id="browsers2">
                            <option value="1"/>
                            <option value="2"/>
                            <option value="3"/>
                            <option value="4"/>
                        </datalist>
                    </div><br/>

                    <div className="dropdown">
                        <label for="var_5">Открыть Стили - &nbsp;</label>
                        <input  type="text" list="browsers2"/>
                        <datalist id="browsers2">
                            <option value="1"/>
                            <option value="2"/>
                            <option value="3"/>
                            <option value="4"/>
                        </datalist>
                    </div><br/>

                    <div className="dropdown">
                        <label for="var_5">Открыть Стили ячеек - &nbsp;</label>
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
                        <span><p>Напишите оператор сравнения НЕРАВНО в среде MS Excel?</p></span>
                    </p><br/><br/>
                

               
                    <ul class="multichoice">
                        <li><input name="quest_897582" type="radio" value="&lt;p&gt;&lt;span style=&#039;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;&#039;&gt;Шара&lt;/span&gt;&lt;/p&gt;" /><label>Названия</label></li>
                        <li><input name="quest_897582" type="radio" value="&lt;p&gt;&lt;span style=&#039;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;&#039;&gt;Бублика&lt;/span&gt;&lt;/p&gt;" /><label>Константы</label></li>
                        <li><input name="quest_897582" type="radio" value="&lt;p&gt;&lt;span style=&#039;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;&#039;&gt;Блина&lt;/span&gt;&lt;/p&gt;" /><label>Переменные</label></li>
                        <li><input name="quest_897582" type="radio" value="&lt;p&gt;&lt;span style=&#039;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;&#039;&gt;Чемодана&lt;/span&gt;&lt;/p&gt;" /><label>Аргументы</label></li>
                    </ul>
                    <br/><br/>

                    <ul class="multichoice">
                        <li><input name="quest_897581" type="checkbox" value="&lt;p&gt;&lt;span style=&#039;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;&#039;&gt;Два&lt;/span&gt;&lt;/p&gt;" /><label>Два</label></li>
                        <li><input name="quest_897581" type="checkbox" value="&lt;p&gt;&lt;span style=&#039;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;&#039;&gt;Четыре&lt;/span&gt;&lt;/p&gt;" /><label>Четыре</label></li>
                        <li><input name="quest_897581" type="checkbox" value="&lt;p&gt;&lt;span style=&#039;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;&#039;&gt;Один&lt;/span&gt;&lt;/p&gt;" /><label>Один</label></li>
                        <li><input name="quest_897581" type="checkbox" value="&lt;p&gt;&lt;span style=&#039;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;&#039;&gt;Три&lt;/span&gt;&lt;/p&gt;" /><label>Три</label></li>
                        <li><input name="quest_897581" type="checkbox" value="&lt;p&gt;&lt;span style=&#039;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;&#039;&gt;Пять&lt;/span&gt;&lt;/p&gt;" /><label>Пять</label></li>
                    </ul>
                    <br/><br/>

                    <ul className="shortanswer/numerical">
                        <li>
                        <label className="accesshide" for="quest_897587">Ответ</label>
                        <input id="quest_897587" name="quest_897587" type="text" />
                        </li>
                    </ul>
                    <br/><br/>

                    <ul className="match">
                        <label className="accesshide" for="quest_897580_0">Создать стиль ячейки - &nbsp;</label>
                        <select id="quest_897580_0" class="select custom-select menuquest_897580_0" name="quest_897580_0">
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                        </select><br/>
                        
                        <label className="accesshide" for="quest_897580_1">Выбрать команду Главная - &nbsp;</label>
                        <select id="quest_897580_1" class="select custom-select menuquest_897580_1" name="quest_897580_1">
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                        </select><br/>
                        
                        <label className="accesshide" for="quest_897580_2">Открыть Стили - &nbsp;</label>
                        <select id="quest_897580_2" class="select custom-select menuquest_897580_2" name="quest_897580_2">
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                        </select><br/>

                        <label className="accesshide" for="quest_897580_3" >Открыть Стили ячеек - &nbsp;</label>
                        <select id="quest_897580_3" class="select custom-select menuquest_897580_3" name="quest_897580_3">
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                        </select>
                    </ul>
                    <br/><br/>

                </div>




                    <QShort qname="Напишите оператор сравнения НЕРАВНО в среде MS Excel?" />


            </fieldset>

            <div className="quest-btn">
                <input className="btn btn-2" type="submit" value="Предыдущий"/>
                <input className="btn btn-1" type="submit" value="Подтвердить"/>
                <input className="btn btn-2" type="submit" value="Следующий"/>
            </div>

        </div>
    </main>
    )

}
