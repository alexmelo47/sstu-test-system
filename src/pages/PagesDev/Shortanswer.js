import React, { Component } from 'react'

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
                    <p className="questiontext">Напишите оператор сравнения НЕРАВНО в среде MS Excel?</p>
                    <br/>

                    <ul className="shortanswer/numerical">
                        <li>
                        <label className="accesshide" for="">Ответ</label>
                        <input id="" name="" type="text" />
                        </li>
                    </ul>
                    <br/><br/>

                </div>

        </div>

    )
    }
}