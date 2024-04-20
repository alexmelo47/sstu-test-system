import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Result extends Component {
    render() {
        let time = localStorage.getItem("fullTime");
        let grade = localStorage.getItem("grade");
        let tname = localStorage.getItem("test_name");
        let author = localStorage.getItem("test_author");
    return (
        <main>
          <div className="content-preview">
                <h1>
                    <i>{tname} (Преп. {author})</i>
                </h1>
              <span>
                    <br /><br /><i>Ваша оценка: {grade}<br/><br/>
                    Метод оценивания: Последняя попытка<br/><br/>   
                    Ваше время: {time}</i><br/><br/>                
              </span>
              <Link className="btn btn-1" to="/tests/">Закрыть</Link>
          </div>
        </main>
    )
  }
}
