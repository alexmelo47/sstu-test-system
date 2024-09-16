import React from 'react'

export default function Home() {
    return (
        <React.StrictMode>
            <div className="home">
                <div className="content-block-home">
                    <h1>Адаптивная интеллектуальная система тестирования АИСТ</h1><br/>
                <img src='./img/sstumain.jpg' alt="Home" width="100%" />
                <span>
                    Для входа в систему введите ваши<strong> логин</strong> и <strong>пароль </strong>.
                </span>
                </div>
            </div>
        </React.StrictMode>
    )
}
