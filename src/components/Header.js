import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from "@material-ui/core/Button";

import Home from '../pages/Home';
import Tests from '../pages/Tests';
import Attestation from '../pages/Attestation';
import ActiveTest from '../pages/ActiveTest';
import Result from '../pages/Result';
import Guid from '../pages/Guid';

import setAuthTokenStored from '../components/setTokenStored';

export default function Header() {

    setAuthTokenStored();

    /* авторизация через модальное окно */
    const [auth, setAuth] = React.useState(false);
    const [open, setOpenAuthorization] = React.useState(false);
    const [open1, setOpenRegistration] = React.useState(false);
    const [status, setStatus] = React.useState('EXTERNAL');
    const [open2, setOpenRemind] = React.useState(false);
    const [open3, setOpenWrongPass] = React.useState(false);
    const baseURL = "https://maile.fita.cc";

    useEffect(() => {
        localStorage.getItem("accessToken") ? setAuth(true) : setAuth(false);
    }, []);

    const handleClickOpenAuthorization = () => {
        setOpenAuthorization(true);
    }
    const handleCloseAuthorization = () => {
        setOpenAuthorization(false);
    }
    const handleClickOpenRegistration = () => {
        setOpenRegistration(true);
    }
    const handleCloseRegistration = () => {
        setOpenRegistration(false);
    }

    const handleClickOpenRemind = () => {
        setOpenRemind(true);
    }
    const handleCloseRemind = () => {
        setOpenRemind(false);
    }

    const handleCloseWrongPass = () => {
        setOpenWrongPass(false);
    }

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
      }

    const handleRegistr = () => {   //Запрос регистрации ДОБАВИТЬ ЗАЩИТУ ДАННЫХ ДОБАВИТЬ КРУЖОК ЗАГРУЗКИ
        const regPayload = {
            "firstName": document.getElementById("name1_reg").value,
            "lastName": document.getElementById("name2_reg").value,
            "patronymic": document.getElementById("name3_reg").value,
            "birthdate": document.getElementById("date_reg").value,
            "email": document.getElementById("mail_reg").value,
            "status": document.getElementById("status_reg").value,
            "workPlace": document.getElementById("status_reg").value
        }
        console.log(regPayload);

        axios.post(baseURL + '/waitlist', regPayload)
            .then(function (response) {
                console.log(response);
            })
            .catch((err) => {
                /*if (err.toJSON().status === 500) { //пользователь существует
                }*/
                console.log(err);
            });
        setOpenRegistration(false);
    }

    const handleAuth = () => {  //Запрос авторизации ДОБАВИТЬ ЗАЩИТУ ДАННЫХ ДОБАВИТЬ КРУЖОК ЗАГРУЗКИ
        const loginPayload = {
            "login": document.getElementById("name_login").value,
            "password": document.getElementById("pass_login").value
        }
        //console.log(loginPayload);
        localStorage.removeItem("accessToken");
        delete axios.defaults.headers.common["Authorization"];

        axios.post(baseURL + '/auth/login', loginPayload)
            .then(function (response) {
                //console.log(response);
                const token = response.data.accessToken;
                localStorage.setItem("accessToken", token);
                setAuthTokenStored();
                setAuth(true);
                //console.log(token);

                //setAuthToken(token);
                //localStorage.getItem("token") ? flag=true : flag=false
            })
            .catch((err) => {
                if (err.toJSON().status === 500) {
                    setOpenWrongPass(true);
                }
                console.log(err);
            });
        setOpenAuthorization(false);
    }

  return (
    <>

        <header>
            <div className="container">
                <div className="header-inner">

                      <div className="logo">&nbsp;Система тестирования&nbsp;АИСТ</div>

                    <div>
                        <nav>
                            <a className="nav-link" href="/"> &nbsp;Домашняя страница&nbsp;</a>
                            <a className="nav-link" href="/tests"> &nbsp;Тестирование&nbsp;</a>

                              {!auth && <a className="nav-link" onClick={handleClickOpenAuthorization}> &nbsp;Войти в систему&nbsp; </a>}
                              {auth && <a className="nav-link" onClick={() => { localStorage.clear(); setAuth(false); }}> &nbsp;Выйти&nbsp; </a>}
                            <Dialog open={open} onClose={handleCloseAuthorization} aria-labelledby="authorization">
                               <DialogTitle id="authorization">Вход в систему</DialogTitle> 
                                <DialogContent>
                                    <DialogContentText>Авторизуйтесь или зарегистрируйтесь для работы в системе</DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name_login"
                                        label="Логин"
                                        type="text"
                                        fullWidth
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="pass_login"
                                        label="Пароль"
                                        type="password"
                                        fullWidth
                                    />
                                </DialogContent>

                                <DialogActions>
                                    <Button onClick={handleClickOpenRemind} color="primary">Забыли логин или пароль?</Button>
                                </DialogActions>

                                <DialogActions>     
                                    <Button onClick={handleAuth} color="primary">Авторизоваться</Button><Button onClick={handleClickOpenRegistration} color="primary">Заявка на регистрацию</Button>   
                                </DialogActions>
                                
                            </Dialog>

                            <Dialog open={open2} onClose={handleCloseRemind} aria-labelledby="reminder">
                               <DialogTitle id="reminder">Восстановление данных</DialogTitle> 
                                <DialogContent>
                                    <DialogContentText>Введите почту для восстановления своих данных</DialogContentText>
                                    <TextField
                                    autoFocus
                                    margin="dense"
                                    id="mail_remind"
                                    label="Почта"
                                    type="email"
                                    fullWidth
                                    />
                                </DialogContent>                      
                                <DialogActions>
                                    <Button onClick={handleCloseRemind} color="primary">Напомнить данные</Button>
                                </DialogActions>
                            </Dialog>

                            <Dialog open={open3} onClose={handleCloseWrongPass} aria-labelledby="warning">
                                <DialogTitle id="warning">Ошибка</DialogTitle> 
                                <DialogContent>
                                    <DialogContentText>Логин или пароль введены неверно.</DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                      <Button onClick={() => { setOpenWrongPass(false); setOpenAuthorization(true); } } color="primary">Ввести заново</Button>                           
                                </DialogActions>
                            </Dialog>

                            <Dialog open={open1} onClose={handleCloseRegistration} aria-labelledby="registration">
                               <DialogTitle id="registration">Заявка на регистрацию</DialogTitle> 
                                <DialogContent>
                                    <DialogContentText>Оформите заявку на регистрацию для работы в системе</DialogContentText>
                                      <TextField
                                          autoFocus
                                          margin="dense"
                                          id="name1_reg"
                                          label="Имя"
                                          type="text"
                                          fullWidth
                                      />
                                      <TextField
                                          autoFocus
                                          margin="dense"
                                          id="name2_reg"
                                          label="Фамилия"
                                          type="text"
                                          fullWidth
                                      />
                                      <TextField
                                          autoFocus
                                          margin="dense"
                                          id="name3_reg"
                                          label="Отчество"
                                          type="text"
                                          fullWidth
                                      />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="mail_reg"
                                        label="Почта"
                                        type="email"
                                        fullWidth
                                    /><br /><br />

                                    <InputLabel htmlFor="date">Дата рождения</InputLabel>
                                    <TextField
                                        margin="dense"
                                        id="date_reg"
                                        label=""
                                        type="date"                                   
                                    /><br /><br />

                                    <InputLabel htmlFor="status">Статус в системе</InputLabel> 
                                    <Select
                                        autoFocus
                                        value={status}
                                        onChange={handleStatusChange}
                                        inputProps={{
                                        name: 'status',
                                        id: 'status_reg',
                                        }}
                                    >
                                        <MenuItem value="EMPLOYEE">Сотрудник СГТУ</MenuItem>
                                        <MenuItem value="STUDENT">Студент СГТУ</MenuItem>
                                        <MenuItem value="EXTERNAL">Внешний испытуемый</MenuItem>
                                    </Select><br />
                                </DialogContent>

                                <DialogActions>     
                                    <Button onClick={handleRegistr} color="primary">Отправить заявку</Button> 
                                </DialogActions>

                            </Dialog>


                        </nav>
                    </div>
                </div>
            </div>
        </header>

        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/tests" element={<Tests/>} />
                <Route exact path="/attestation" element={<Attestation/>} />
                <Route exact path="/activetest" element={<ActiveTest/>} />
                <Route exact path="/Result" element={<Result/>} />
                <Route exact path="/Guid" element={<Guid/>} />
            </Routes>
        </Router>

    </>
  )
}