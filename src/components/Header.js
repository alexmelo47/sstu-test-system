import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Home from '../pages/Home';
import Tests from '../pages/Tests';
import Preview from '../pages/Preview';
import Attestation from '../pages/Attestation';
import Testtest from '../pages/Testtest';
//import setAuthToken from '../components/setToken';

export default function Header() {

    /* авторизация через модальное окно */ 
    const [open, setOpen] = React.useState(false);
    const baseURL = "https://maile.fita.cc";

    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleAuth = () => {

        //auth development
        const loginPayload = {
            "login": document.getElementById("name").value,
            "password": document.getElementById("pass").value
        }
        console.log(loginPayload);
        axios.post(baseURL + '/auth/login', loginPayload)
            .then(function (response) {
                //console.log(response);
                const token = response.data.accessToken;
                localStorage.setItem("accessToken", token);
                console.log(token);
                //setAuthToken(token);
                //localStorage.getItem("token") ? flag=true : flag=false
            })
            .catch(err => console.log(err));
        setOpen(false);
    }

    const handletst = () => {
    //    axios.get(baseURL + '/tests', {
    //        headers: {
    //            "Accept" : "*/*",
    //           "Access-Control-Allow-Origin": "*"
    //        }
    //    })
    //        .then(function (response) {
    //            console.log(response);
    //        })//axios.defaults.headers.common["Access-Control-Allow-Origin"] = `*`;
    //     .catch(err => console.log(err));

        //localStorage.setItem("session_id", response.data.id)
        axios.get(baseURL + '/sessions/' + localStorage.getItem("session_id") + '/items')
            .then(function (response) {
                console.log(response);
            })
            .catch(err => console.log(err));

        setOpen(false);
    }

  return (
    <>

    <header>
        <div className="container">
            <div className="header-inner">

                <div className="logo"><img src='./img/logo_sstu.png' height="30px" alt="logo"/>&nbsp;Система тестирования&nbsp;</div>

                <div>
                    <nav>
                        <a className="nav-link" href="/"> &nbsp;Домашняя страница&nbsp;</a>
                        <a className="nav-link" href="/tests"> &nbsp;Тестирование&nbsp; </a>

                        <a className="nav-link" onClick={handleClickOpen}> &nbsp;Авторизация&nbsp; </a>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="authorization">
                           <DialogTitle id="authorization">Авторизация</DialogTitle> 
                            <DialogContent>
                                <DialogContentText>Авторизуйтесь для работы в системе</DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Логин"
                                    type="text"
                                    fullWidth
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="pass"
                                    label="Пароль"
                                    type="password"
                                    fullWidth
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">Закрыть</Button>
                                <Button onClick={handleAuth} color="primary">Авторизация</Button>
                                <Button onClick={handletst} color="primary">get disciplines</Button>
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
            <Route exact path="/preview" element={<Preview/>} />
            <Route exact path="/attestation" element={<Attestation />} />
            <Route exact path="/testtest" element={<Testtest />} />
        </Routes>
    </Router>

    </>
  )
}

//