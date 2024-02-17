import React from 'react'
import ASorting from './ASorting'

export default function QSorting({ qname, cnt, a_arr }) {
    
    let componentsArr = [];
    let aids = [];
    let chosen_num = [];
    let chosen_vals = [];
    let i;
    for (i = 0; i < cnt; i++) {
        aids.push(a_arr[i].id);
        chosen_num.push(a_arr[i].number);
    }
    for (i = 0; i < cnt; i++) {
        chosen_vals.push(aids[chosen_num[i] - 1]);
    }
    for (i = 0; i < cnt; i++) {
        componentsArr.push(<li key={i}><ASorting cnt={cnt} aid_arr={aids} aname={a_arr[i].answer} anum={chosen_vals[i]} /></li>);
    }

    return (
        /* 
        Компонент условия вопроса с сортировкой
        */

        <div>
                
                <div className="question">
                    <br/>
                <p className="questiontext">{qname}</p>
                    <br/>
                
                    <ul className="match">{componentsArr}</ul>

                </div>

        </div>

    )
}