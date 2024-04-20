import React, { useState } from 'react';

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const Test = ({ tid, status, method, name, discipline, teacher, time, try_time, try_cnt, testing_attr, q_cnt }) => {

    //компонент, отображаемый в списке тестов

    const [openDescr, setOpenTest] = React.useState(false);
    const handleClickOpenTest = () => {
        setOpenTest(true);
    }
    const handleCloseTest = () => {
        setOpenTest(false);
    }

    let styles = ["test-list wip", "test-list training", "test-list intermediate", "test-list examinational", "test-list debug"];
    let titles = ["В разработке", "Тренировочный", "Промежуточный", "Итоговый", "Отладка"];

    let this_style, this_title;

    switch (status) {
        case 'WIP':
            this_style = styles[0];
            this_title = titles[0];
            break;
        case 'TRAINING':
            this_style = styles[1];
            this_title = titles[1];
            break;
        case 'INTERMEDIATE_TEST':
            this_style = styles[2];
            this_title = titles[2];
            break;
        case 'EXAMINATION':
            this_style = styles[3];
            this_title = titles[3];
            break;
        case 'DEBUG':
            this_style = styles[4];
            this_title = titles[4];
            break;
        default:
            this_style = "ERROR";
            this_title = "ОШИБКА";
    }

    return (
        <div>
            <ul className={this_style} >
                <li>{name}</li>
                <li>{discipline}</li>
                <li>{testing_attr}</li>
                <li>{this_title}</li>
                <li>{time}</li>
                <li>
                    <button onClick={handleClickOpenTest} className="open-test">Выбрать тест</button>
                </li>
            </ul>
            <Dialog open={openDescr} onClose={handleCloseTest} aria-labelledby="test-info">
                <DialogTitle id="test-info">{name}</DialogTitle>
                <DialogContent>
                    <DialogContentText><b>Дисциплина:</b> {discipline}</DialogContentText>
                    <DialogContentText><b>Преподаватель:</b> {teacher.name}</DialogContentText>
                    <DialogContentText><b>Тест доступен до:</b> {time}</DialogContentText>
                    <DialogContentText><b>Время на выполнение теста (минут):</b> {try_time}</DialogContentText>
                    <DialogContentText><b>Количество попыток:</b> {try_cnt}</DialogContentText>

                    <DialogContentText><b>Проверяемые компетенции:</b> {testing_attr}</DialogContentText>
                    {method === "CLASSIC" && <DialogContentText>
                        <b>Инструкция к выполнению:</b> <br />Вам необходимо выполнить {q_cnt} заданий. Перечень заданий изображен в виде светлых кнопок в правом верхнем углу экрана. Каждое задание вызывается нажатием на соответствующую кнопку. Время, оставшееся до конца тестирования, показано.
                        <br />Вы можете  выполнять задания в любом порядке, возвращаться к уже выполненному заданию и изменять Ваш ответ.  Кнопки, соответствующие уже выполненным заданиям, меняют свой цвет.  Для окончания тестирования нажмите кнопку “завершить тестирование”.
                    </DialogContentText>}
                    {method === "ADAPTIVE" && <DialogContentText>
                        Вы выполняете адаптивный тест в диалоге с компьютером. Выполните первое задание, предложенное компьютером. Каждое следующее задание выберет компьютер  в зависимости от того, как Вы справились с предыдущим заданием. Поэтому, будьте внимательны, постарайтесь выполнить все предложенные Вами задания.
                        Максимальное количество заданий в тесте {q_cnt}, но тест закончится, как только компьютеру станет ясно, какую оценку Вы заслуживаете.
                    </DialogContentText>}
                    {method === null && <DialogContentText>
                        Вы выполняете адаптивное тестирование, позволяющее оценить уровень сформированности сразу нескольких Ваших компетенций.  Каждое следующее задание выберет компьютер  в зависимости от того, как Вы справились с предыдущим заданием. Поэтому, будьте внимательны, постарайтесь выполнить все предложенные Вами задания.
                        Максимальное количество заданий в тесте {q_cnt}, но тест закончится, как только компьютеру станет ясно, какую оценку Вы заслуживаете.
                    </DialogContentText>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={(e) => { e.preventDefault(); localStorage.setItem("tid", tid); localStorage.setItem("method", method); window.location.href = 'https://web.fita.cc/activetest/'; }} color="primary">Начать тестирование</Button>
                    <Button onClick={handleCloseTest} color="primary">Закрыть</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Test