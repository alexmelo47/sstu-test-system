import React, { Component } from 'react'
import axios from 'axios'
import AMatches from './AMatches'

export default function QMatches({ qname, cnt, a_arr }) {
    
    let componentsArr = [];
    for (let i = 0; i < cnt*3; i += 3) {
        componentsArr.push(<AMatches aid = a_arr[i], aname = a_arr[i+1], anum = a_arr[i+2] />);
    }

    return (
        /* 
        Компонент условия вопроса с несколькими вариантами ответа
        */

        <div>
                
                <div className="question">
                    <br/>
                    <p className="questiontext">Укажите правильный порядок действий для создания нового стиля в MS Excel:</p>
                    <br/>
                
                    <ul className="match">{componentsArr}</ul>

                </div>

        </div>

    )
}