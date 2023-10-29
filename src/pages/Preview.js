import React, { Component } from 'react'

import { Link } from "react-router-dom";

export default class Preview extends Component {
  render() {
    return (
        <main>
        <div class="content-preview">
            <h1><i>Запрос выводящий название выбранного ранее теста</i></h1>
            <span>
                <br/><i>Возможная дополнительная информация о тесте возможно по запросу в бд.</i><br/><br/>
            </span>
            <Link class="btn btn-1" to="/attestation/">Пройти тестирование</Link>
        </div>
    </main>
    )
  }
}
