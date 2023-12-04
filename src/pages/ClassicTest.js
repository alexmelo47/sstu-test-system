import React, { Component } from 'react'
import axios from 'axios'

export default class Attestation extends Component {
    render() {
    return (
        /* 
        Страница в которой воспроизводится классическая форма тестирования
        */
        <main>
        <div className="content-block">
            <fieldset>
                <legend><h3>&nbsp;Информатика 2 курс&nbsp;</h3></legend> 


            </fieldset>

            <div className="quest-btn">
                <input className="btn btn-2" type="submit" value="Предыдущий"/>
                <input className="btn btn-1" type="submit" value="Завершить тестирование"/>
                <input className="btn btn-2" type="submit" value="Следующий"/>
            </div>

        </div>
    </main>
    )
    }
}