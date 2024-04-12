import React from 'react'
import ASorting from './ASorting'
import PictureQ from './PictureQ'

export default function QSorting({ qname, cnt, a_arr, Qpic }) {
    
    let componentsArr = [];
    let aids = [];
    let pics = [];
    let i;

    for (i = 0; i < cnt; i++) {
        aids.push(a_arr[i].id);
        pics.push(a_arr[i].pictures[0]?.url);
    }

    for (i = 0; i < cnt; i++) {
        componentsArr.push(<li key={i}><ASorting cnt={cnt} aid_arr={aids} aname={a_arr[i].answer} anum={a_arr[i].number} picture={pics[i]} /></li>);
    }

    return (
        /* 
        Компонент условия вопроса с сортировкой
        */

        <div>
                
                <div className="question">
                    <br/>
                <p className="questiontext">{qname}</p>
                <br />
                <PictureQ src={Qpic} />
                <br />
                
                    <ul className="match">{componentsArr}</ul>

                </div>
                <br />

        </div>

    )
}