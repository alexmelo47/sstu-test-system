import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <div className="home">
          <div className="content-block-home">
                <h1>Адаптивная интеллектуальная система тестирования АИСТ</h1><br/>
            <img src='./img/sstumain.jpg' alt="Home" width="100%" />
            <span>
                Для входа в систему введите <strong>без указания домена&nbsp;</strong> ваши логин -
                <strong>номер зачетной книжки</strong> и <strong>пароль для локальной сети</strong> СГТУ.
            </span>
          </div>
        </div>
    )
  }
}
