import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from '../pages/Home';
import Tests from '../pages/Tests';
import Preview from '../pages/Preview';
import Attestation from '../pages/Attestation';

export default function Header() {
  return (
    <>

    <header>
        <div className="container">
            <div className="header-inner">

                <div className="logo"><img src='./img/logo_sstu.png' height="30px" alt="logo"/>&nbsp;Дистанционное обучение&nbsp;</div>

                <div>
                    <nav>
                        <a className="nav-link" href="/"> &nbsp;Домашняя страница&nbsp;</a>
                        <a className="nav-link" href="/tests"> &nbsp;Тестирование&nbsp; </a>
                        <a className="nav-link" href="#"> &nbsp;Личный кабинет&nbsp; </a>
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
        </Routes>
    </Router>

    </>
  )
}

//