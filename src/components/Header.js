import React, { useState }  from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


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
import ActiveTest from '../pages/ActiveTest';
import Result from '../pages/Result';
import Guid from '../pages/Guid';

export default function Header() {

  /* авторизация через модальное окно, пока без связи с сервером */ 

  const[open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  const[open2, setOpenRemind] = React.useState(false);
  const handleClickOpenRemind = () => {
    setOpenRemind(true);
  }
  const handleCloseRemind = () => {
    setOpenRemind(false);
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
                        <Dialog open={open} onClose={handleClose} aria-aria-labelledby="authorization">
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
                                <Button onClick={handleClickOpenRemind} color="primary">Забыли логин или пароль?</Button>
                            </DialogActions>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">Авторизация</Button>
                            </DialogActions>
                        </Dialog>

                        <Dialog open={open2} onClose={handleCloseRemind} aria-aria-labelledby="reminder">
                           <DialogTitle id="reminder">Восстановление данных</DialogTitle> 
                            <DialogContent>
                                <DialogContentText>Введите почту для восстановления своих данных</DialogContentText>
                                <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Почта"
                                type="email"
                                fullWidth
                                />
                            </DialogContent>                      
                            <DialogActions>
                                <Button onClick={handleCloseRemind} color="primary">Напомнить данные</Button>
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
            <Route exact path="/attestation" element={<Attestation/>} />
            <Route exact path="/activetest" element={<ActiveTest/>} />
            <Route exact path="/Result" element={<Result/>} />
            <Route exact path="/Guid" element={<Guid/>} />
        </Routes>
    </Router>

    </>
  )
}

//