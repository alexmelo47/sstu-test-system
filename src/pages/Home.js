import React, { Component } from 'react'
import homepic from '../img/sstumain.jpg'

export default class Home extends Component {
  render() {
    return (
        <div class="home">
        <div class="content-block-home">
            <h1>Портал дистанционного обучения по основным образовательным программам СГТУ имени Гагарина Ю.А.</h1><br/>
            <img src={homepic} alt="Home" width="100%" />


        <span>
            Для входа в систему введите <strong>без указания домена&nbsp;</strong> ваши логин -
            <strong>номер зачетной книжки</strong> и <strong>пароль для локальной сети</strong> СГТУ.
        </span></div>
    </div>
    )
  }
}
