import React from 'react'
import AMultiRadio from './AMultiRadio'
import PictureQ from './PictureQ'

export default function QMultiRadio({ qname, cnt, a_arr, Qpic, rtype = 0, status = false }) {

    //for result start
    let classes = "question";
    if (rtype === 1) {
        status ? classes += " q-true" : classes += " q-false";
    }
    //for result end

    let componentsArr = [];
    let rname = Math.floor(Math.random() * (8000 - 1001) + 1001);
    rname = "q_" + rname.toString();
    for (let i = 0; i < cnt; i++) {
        componentsArr.push(<AMultiRadio key={i} aid={a_arr[i].id} aname={a_arr[i].answer}
            rname={rname} selected={a_arr[i].selected} picture={a_arr[i].pictures[0]?.url ?? ""}
            rtype={rtype} status={a_arr[i]?.correct ?? false} />);
    }

    return (
        /* 
        Компонент условия вопроса с одним вариантом ответа
        */
  
        <div>
            <div className={classes}>
                <br/><p className="questiontext">
                    <span>
                        {qname}
                    </span>
                </p>
                <PictureQ src={Qpic} />
                <br />
                
                <div>
                    {rtype !== 1 && <ul className="multichoice">{componentsArr}</ul>}
                </div>      

            </div>
            <br />
        </div>

    )
}
