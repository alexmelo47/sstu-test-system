import React from 'react';
import logo from './logo_sstu.png';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from '../pages/Home';
import Tests from '../pages/Tests';
import Preview from '../pages/Preview';
import Attestation from '../pages/Attestation';

export default function Header() {
  return (
    <>

    <header>
        <div class="container">
            <div class="header-inner">

                <div class="logo"><img src={logo} height="30px" alt="logo"/>&nbsp;Дистанционное обучение&nbsp;</div>

                <div>
                    <nav>
                        <a class="nav-link" href="/"> &nbsp;Домашняя страница&nbsp;</a>
                        <a class="nav-link" href="/tests"> &nbsp;Тестирование&nbsp; </a>
                        <a class="nav-link" href="#"> &nbsp;Личный кабинет&nbsp; </a>
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