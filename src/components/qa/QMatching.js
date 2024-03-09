import React from 'react'
import AMatching from './AMatching'
import PictureQ from './PictureQ'

export default function QMatching({ qname, a_arr, Qpic }) {
    
    let componentsArr = [];

    let R_cnt = 0;
    let R_ids = [];
    let R_names = []; 
    //let R_chosen = [];

    let L_cnt = 0;
    let L_ids = [];
    let L_names = [];

    let i;

    for (i = 0; i < a_arr.length; i++) {
        if (a_arr[i].type === "L") {
            L_ids.push(a_arr[i].id);
            L_names.push(a_arr[i].answer);
            L_cnt++;
        }
        else {
            R_ids.push(a_arr[i].id);
            R_names.push(a_arr[i].answer);
            //R_chosen.push(a_arr[i].selected);
            R_cnt++;
        }
    }

    for (i = 0; i < L_cnt; i++) {
        componentsArr.push(<li key={i}><AMatching cnt={R_cnt} aid={L_ids[i]} aid_arr={R_ids} aname={L_names[i]} name_arr={R_names} /></li>);
    }

    return (
        /* 
        Компонент условия вопроса с соответствием
        ДОБАВИТЬ картинку в ОТВЕТ
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

        </div>

    )
}