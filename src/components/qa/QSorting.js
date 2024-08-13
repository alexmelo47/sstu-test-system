import React from 'react'
import ASorting from './ASorting'
import PictureQ from './PictureQ'

export default function QSorting({ qname, cnt, a_arr, Qpic, rtype = 0, status = false }) {

    //for result start
    let classes = "question";
    if (rtype === 1) {
        status ? classes += " q-true" : classes += " q-false";
    }
    //for result end
    
    let componentsArr = [];
    let i;
    for (i = 0; i < cnt; i++) {
        componentsArr.push(<ASorting key={i} cnt={cnt} aid={a_arr[i].id} aname={a_arr[i].answer} anum={a_arr[i].number}
                picture={a_arr[i].pictures[0]?.url} rtype={rtype} status={a_arr[i]?.correct ?? false} />);
    }

    return (
        /* 
        Компонент условия вопроса с сортировкой
        */

        <div>
            <div className={classes}>
                <br/>
            <p className="questiontext">{qname}</p>
            <br />
            <PictureQ src={Qpic} />
            <br />
                
                {rtype !== 1 && <ul className="match">{componentsArr}</ul>}

            </div>
            <br />

        </div>

    )
}