import React from 'react'
import AMultiCheckbox from './AMultiCheckbox'
import PictureQ from './PictureQ'

export default function QMultiCheckbox({ qname, cnt, a_arr, Qpic }) {
    
    let componentsArr = [];
    let rname = Math.floor(Math.random() * (8000 - 1001) + 1001);
    rname = "q_" + rname.toString();
    for (let i = 0; i < cnt; i++) {
        componentsArr.push(<AMultiCheckbox key={i} aid={a_arr[i].id} aname={a_arr[i].answer} rname={rname} selected={a_arr[i].selected} picture={a_arr[i].pictures[0]?.url ?? ""} />);
    }

    return (
        /* 
        Компонент условия вопроса с несколькими правильными вариантами ответа
        */
  
        <div>
            <div className="question">
                <br/><br/><p className="questiontext">
                    <span>
                        {qname}
                    </span>
                </p><br />
                <PictureQ src={Qpic} />
                <br />
                
                <ul className="multichoice">{componentsArr}</ul>           

            </div>
            <br />
        </div>

    )
}