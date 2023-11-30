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

        <div>
                
                <div className="question">
                    <br/>
                    <p className="questiontext">Укажите правильный порядок действий для создания нового стиля в MS Excel:</p>
                    <br/>
                

                    <ul className="match">
                        <label>Создать стиль ячейки - &nbsp;</label>
                        <select>
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                        </select><br/>
                        
                        <label>Выбрать команду Главная - &nbsp;</label>
                        <select>
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                        </select><br/>
                        
                        <label>Открыть Стили - &nbsp;</label>
                        <select>
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                        </select><br/>

                        <label>Открыть Стили ячеек - &nbsp;</label>
                        <select>
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                        </select>
                    </ul>
                    <br/><br/>

                </div>

        </div>

    )
    }
}