import React from 'react'
import ASorting from './ASorting'

export default function QSorting({ qname, cnt, a_arr }) {
    
    let componentsArr = [];
    let aids = [];
    for (var i = 0; i < cnt; i++) {
        aids.push(a_arr[i].id);
    }
    for (let i = 0; i < cnt; i++) {
        componentsArr.push(<ASorting cnt={cnt} aid_arr={aids} aname={a_arr[i].answer} anum={a_arr[i].number} />);
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