// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const Test = ({ tid, status, method, type, name, disciplines, teacher, time, try_time, try_cnt, testing_attr, q_cnt }) => {

    //компонент, отображаемый в списке тестов

    let has_attr = true;
    if (testing_attr.length === 0) {
        has_attr = false;
    }

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

    const StyleButton = withStyles({
        root: {
          width: '93%',
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

      const StyleActions = withStyles({
        root: {
          display: "flex",
          justifyContent: "space-between",
        },
      })(DialogActions);

      const StyleAction = withStyles({
        root: {
            display: "flex",
            justifyContent: "center",
        },
      })(DialogActions);

      const StyleTitle = withStyles({
        root: {
          color: '#0059A8',
          fontSize: '2rem ',
          textAlign: "center",
          fontFamily: ["Roboto", "Helvetica", "Arial", 'sans-serif'].join(','),
          fontWeight: 700,
          lineHeight: 1.6,
          letterSpacing: '0.0075em',
        },
      })(DialogTitle);

    return (
        <div>
            <ul className={this_style} >
                <li>{name}</li>
                <li>{disciplines.map(attr => attr.name).join(", ")}</li>
                <li>{testing_attr && testing_attr.map(attr => attr.description).join(", ")}</li>
                <li>{this_title}</li>
                <li>{new Date(time).toLocaleString()}</li>
                <li>
                    <button onClick={handleClickOpenTest} className="open-test">Выбрать тест</button>
                </li>
            </ul>
            <Dialog PaperProps={{
                                      style: { borderRadius: 15 }
                                  }}
                                  open={openDescr} onClose={handleCloseTest} aria-labelledby="test-info">
                <StyleTitle disableTypography id="test-info">{name}</StyleTitle>
                <DialogContent>
                    <DialogContentText><b>Дисциплина(ы):</b> {disciplines.map(attr => attr.name).join(", ")}</DialogContentText>
                    <DialogContentText><b>Преподаватель:</b> {teacher.name}</DialogContentText>
                    <DialogContentText><b>Тест доступен до:</b> {new Date(time).toLocaleString()}</DialogContentText>
                    <DialogContentText><b>Время на выполнение теста (минут):</b> {try_time}</DialogContentText>
                    <DialogContentText><b>Количество попыток:</b> {try_cnt}</DialogContentText>

                    {testing_attr && has_attr && <DialogContentText><b>Проверяемые компетенции:</b></DialogContentText>}
                    {testing_attr && has_attr &&
                        <DialogContentText>
                            {testing_attr.map(attr => (
                                <span key={attr.id}>{attr.name}<br /></span>
                            ))}
                        </DialogContentText>
                    }

                    {method === "CLASSIC" && <DialogContentText>
                        <b>Инструкция к выполнению:</b> <br />Вам необходимо выполнить {q_cnt} заданий. Перечень заданий изображен в виде светлых кнопок в правом верхнем углу экрана. Каждое задание вызывается нажатием на соответствующую кнопку. Время, оставшееся до конца тестирования, показано.
                        <br />Вы можете  выполнять задания в любом порядке, возвращаться к уже выполненному заданию и изменять Ваш ответ.  Кнопки, соответствующие уже выполненным заданиям, меняют свой цвет.  Для окончания тестирования нажмите кнопку “завершить тестирование”.
                    </DialogContentText>}
                    {method === "ADAPTIVE" && type !== "MULTIDIMENSIONAL" && <DialogContentText>
                        <b>Инструкция к выполнению:</b> <br />Вы выполняете адаптивный тест в диалоге с компьютером. Выполните первое задание, предложенное компьютером. Каждое следующее задание выберет компьютер  в зависимости от того, как Вы справились с предыдущим заданием. Поэтому, будьте внимательны, постарайтесь выполнить все предложенные Вами задания.
                        Максимальное количество заданий в тесте {q_cnt}, но тест закончится, как только компьютеру станет ясно, какую оценку Вы заслуживаете.
                    </DialogContentText>}
                    {method === "ADAPTIVE" && type === "MULTIDIMENSIONAL" && <DialogContentText>
                        <b>Инструкция к выполнению:</b> <br />Вы выполняете адаптивное тестирование, позволяющее оценить уровень сформированности сразу нескольких Ваших компетенций.  Каждое следующее задание выберет компьютер  в зависимости от того, как Вы справились с предыдущим заданием. Поэтому, будьте внимательны, постарайтесь выполнить все предложенные Вами задания.
                        Максимальное количество заданий в тесте {q_cnt}, но тест закончится, как только компьютеру станет ясно, какую оценку Вы заслуживаете.
                    </DialogContentText>}
                </DialogContent>
                <StyleActions>
                    <StyleButton onClick={(e) => { e.preventDefault(); localStorage.setItem("tid", tid); localStorage.setItem("method", method); localStorage.setItem("type", type); window.location.href = 'http://localhost:3000/activetest/'; }} color="primary">Начать тестирование</StyleButton>
                    <StyleButton onClick={handleCloseTest} color="primary">Закрыть</StyleButton>
                </StyleActions>
            </Dialog>
        </div>
    )
}

export default Test

//window.location.href ПОМЕНЯТЬ ПОД РЕЛИЗ на актуальный домен