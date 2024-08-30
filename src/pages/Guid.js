import React from 'react'
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

export default function Guid() {

    const StyleButton = withStyles({
        root: {
          
          backgroundColor: '#0059A8',
          borderRadius: '30px',
          color: "white",
          textTransform: "none",
          fontFamily: [
            "Lucida Sans Unicode", 
            "Lucida Grande", 
            'sans-serif',
          ].join(','),
          fontSize: "1rem",
          margin: "5px",

          '&:hover': {
            backgroundColor: '#0372D4',
          },
          '&:active': {
            backgroundColor: '#0059A8',
          },
          '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
          },
        },
      })(Button);

    return (
        <div className="home">
            <div className="content-block-home">
                <h1>Руководство пользователя портала электронного тестирования по основным образовательным программам АИСТ</h1><br/>
                <span>
                    <p>В данном разделе описаны элементы и правила управления пользовательским интерфейсом тестируемых пользователей.</p><br />
                    
                    <h4>Вход в систему и переходы по страницам.</h4><br />

                    <h3>Порядок прохождения авторизации в системе:</h3>
                    <p className="guid-text">1. Нажмите кнопку&nbsp;<a className="nav-link">&nbsp;Войти в систему&nbsp;</a>&nbsp; - открывающую форму авторизации и регистрации в системе.</p>
                    <p>2. Введите в появившейся форме авторизации без указания домена ваши <strong>логин</strong> -
                    номер зачетной книжки и <strong>пароль</strong> для локальной сети.</p>
                    <p>3. Нажмите кнопку <StyleButton color="primary">Авторизоваться</StyleButton>.</p>
                    <p>Для выхода из системы нажать кнопку "Выйти" на том месте, где была кнопка "Войти в систему".</p><br />

                    <h3>Если вы забыли свои данные для авторизации, следуйте данным указаниям:</h3>
                    <p>1. Нажмите в форме авторизации на кнопку "<Button color="primary">Забыли логин или пароль?</Button>"</p>
                    <p>2. В появившейся форме восстановления данных введите вашу почту, указанную для регистрации.</p>
                    <p>3. Нажмите кнопку <StyleButton color="primary">Напомнить данные</StyleButton> и пройдите авторизацию после получения письма с напоминанием на почту.</p><br />
                    
                    <h3>Для регистрации в системе, следуйте данным указаниям:</h3>
                    <p>1. Нажмите в форме авторизации на кнопку <StyleButton color="primary">Заявка на регистрацию</StyleButton></p>
                    <p>2. В появившейся форме заполните поля ФИО, электронная почта, дату рождения, а также вашего статуса в системе.</p>
                    <p>3. Нажмите кнопку <StyleButton color="primary">Отправить заявку</StyleButton> и ожидайте получения письма на указанную при регистрации электронную почту с данными для авторизации.</p><br />

                    <p className="guid-text"><a className="nav-link">&nbsp;Домашняя страница&nbsp;</a>&nbsp;- кнопка перехода на домашнюю страницу.</p><br />
                    <p className="guid-text"><a className="nav-link">&nbsp;Тестирование&nbsp;</a>&nbsp;- кнопка перехода на страницу с доступными вам тестами.</p><br />
                    
                    <h4>Тестирование.</h4><br />

                    <h3>Порядок запуска теста:</h3>
                    <p>1. Авторизоваться в системе.</p>
                    <p>2. Нажмите кнопку <button className="open-test">Выбрать тест</button> в разделе необходимого вам теста.</p>
                    <p>3. В открывшейся форме с подробной информацией о выбранном тесте нажмите кнопку <StyleButton color="primary">Начать тестирование</StyleButton>.</p>
                    <p>Если вы передумали, нажмите в форме кнопку <StyleButton color="primary">Закрыть</StyleButton> и выберите другой тест.</p><br />

                    <h3>Пример представления страницы с запущенным тестом:</h3>
                    <img className="shadow" src='./img/example.png' alt="Пример страницы тестирования" width="70%" /><p />

                    <p>Задание, требующее выбрать 1 правильный вариант ответа:</p>
                    <img className="shadow" src='./img/radio.png' alt=""/><p />

                    <p>Задание, требующее выбрать несколько правильных вариантов ответа:</p>
                    <img className="shadow" src='./img/checkbox.png' alt=""/><p />

                    <p>Задание, требующее ввод правильного ответа вручную:</p>
                    <img className="shadow" src='./img/input.png' alt=""/><p />

                    <p>Задание, требующее выбрать в каждом выпадающем списке правильное соответствие, смысловое либо порядковое, относительно соседнего элемента:</p>
                    <img className="shadow" src='./img/select.png' alt=""/><p />

                    <p><input className="btnguid btn-2" type="submit" value="Следующий &rang;"/> - кнопка перехода на следующее (или предыдущее задание).</p>
                    <p><input className="btnguid btn-1" type="submit" value="Подтвердить &#10004;"/> - кнопка подтверждения ответа для адаптивного метода тестирования.</p>
                    <p><input className="btn-fin-guid" type="submit" value="Завершить"/> - кнопка завершения тестирования в классическом методе тестирования.</p><br />

                    <h3>Панель навигации между заданиями классического тестирования:</h3>
                    <p><button className="btn-menu"><span>1</span></button> - неотвеченное неоткрытое задание.</p>
                    <p><button className="btn-menu btn-menu-focus"><span>2</span></button> - неотвеченное открытое задание.</p>
                    <p><button className="btn-menu btn-menu-answered"><span>3</span></button> - отвеченное неоткрытое задание.</p>
                    <p><button className="btn-menu btn-menu-answered btn-menu-focus"><span>4</span></button> - отвеченное открытое задание.</p>
                    <p>При наведении курсора на кнопку навигации заливка кнопки осветляется.</p><br />
                    
                    <p>Таймер в левом верхнем углу экрана показывает количество оставшегося на тестирование времени в формате часы : минуты : секунды.</p><br />


                </span>
            </div>
        </div>
    )
}