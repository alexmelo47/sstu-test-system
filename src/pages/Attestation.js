import React, { Component } from 'react'
import axios from 'axios'

export default class Attestation extends Component {
    render() {
    return (
        /* 
        Страница с примерами визуализации разных типов вопросов: на 1 вариант ответа, 
        несколько вариантов ответа, 
        ввод ответа вручную, 
        на соответствие 
        и выбор правильного порядка 
        */
        <main>
        <div className="content-block">
            <fieldset>
                <legend><h3>&nbsp;Информатика 2 курс&nbsp;</h3></legend> 
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
}
