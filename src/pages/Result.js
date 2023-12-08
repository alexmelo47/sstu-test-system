import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

export default class Result extends Component {
  render() {
    return (
        <main>
          <div className="content-preview">
              <h1><i>Итоговый тест по информатике 2 курс (Преп. Иван Иванов)</i></h1>
              <span >
                <br/><br/><i>Ваша оценка:<br/><br/>
                Метод оценивания: Последняя попытка<br/><br/>   
                Ваше время:</i><br/><br/>                
              </span>
              <Link className="btn btn-1" to="/tests/">Закрыть</Link>
          </div>
        </main>
    )
  }
}
