import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Preview extends Component {
  render() {
    return (
        <main>
          <div className="content-preview">
              <h1><i>Итоговый тест по информатике 2 курс (Преп. Иван Иванов)</i></h1>
              <span >
                  <br/><br/><i>Здесь находится пробный тест с основными вопросами по дисциплине "Информатика". 
                    Тест рассчитан на 20 минут, содержит 20 вопросов.<br/><br/>
                    Метод оценивания: Последняя попытка</i><br/>
                    <br/>
              </span>
                <Link className="btn btn-1" to="/attestation/">Открыть превью вопросов</Link>
                <Link className="btn btn-1" to="/activetest/">Пройти тестирование (актуальное)</Link>
          </div>
        </main>
    )
  }
}
