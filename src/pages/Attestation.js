import React, { Component } from 'react'

export default class Attestation extends Component {
    render() {
    return (
        <main>
        <div class="content-block">
            <fieldset>
                <legend><h3>&nbsp;Вопрос <i>например через i++</i>&nbsp;</h3></legend>
                <div class="question">
                    <br/>Текст задания находится здесь. <br/><br/><br/>
                </div>

                <div class="question">
                    <form>
                        <div>
                            <input id="var_1" type="radio" name="var" value="1"/> 
                            <label for="var_1">&nbsp;Вариант 1</label><br/>
                        </div>
                        <div>
                            <input id="var_2" type="radio" name="var" value="1"/>
                            <label for="var_2">&nbsp;Вариант 2</label><br/>
                        </div>
                        <div>
                            <input id="var_3" type="radio" name="var" value="3"/>
                            <label for="var_3">&nbsp;Вариант 3</label><br/>
                        </div>
                        <div>
                            <input id="var_4" type="radio" name="var" value="4"/>
                            <label for="var_4">&nbsp;Вариант 4</label><br/>
                        </div>

                        <div>
                            <div class="dropdown">
                                <label for="var_4">Факт 4&nbsp;</label>
                                <input  type="text" list="browsers"/>
                                <datalist id="browsers">
                                    <option value="Ответ 1"/>
                                    <option value="Ответ 2"/>
                                    <option value="Ответ 3"/>
                                    <option value="Ответ 4"/>
                                </datalist>
                            </div>
                        </div><br/>

                    </form>
                </div>

            </fieldset>

            <div class="quest-btn">
                <input class="btn btn-2" type="submit" value="Предыдущий"/>
                <input class="btn btn-1" type="submit" value="Подтвердить"/>
                <input class="btn btn-2" type="submit" value="Следующий"/>
            </div>

        </div>
    </main>
    )
    }
}
