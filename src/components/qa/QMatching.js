import React from 'react'
import AMatching from './AMatching'
import PictureQ from './PictureQ'

export default function QMatching({ qname, a_arr, Qpic, rtype = 0, status = false }) {

    //for result start
    let classes = "question";
    if (rtype === 1) {
        status ? classes += " q-true" : classes += " q-false";
    }
    //for result end
    
    let componentsArr = [];

    let R_cnt = 0;
    let R_ids = [];
    let R_names = []; 

    let L_cnt = 0;
    let L_ids = [];
    let L_names = [];
    let L_pics = [];
    let L_chosen = [];
    let L_correct = [];

    let i;

    for (i = 0; i < a_arr.length; i++) {
        if (a_arr[i].type === "L") {
            L_ids.push(a_arr[i].id);
            L_names.push(a_arr[i].answer);
            L_pics.push(a_arr[i].pictures[0]?.url);
            L_chosen.push(a_arr[i].number);
            L_correct.push(a_arr[i]?.correct ?? false);
            L_cnt++;
        }
        else {
            R_ids.push(a_arr[i].id);
            R_names.push(a_arr[i].answer);
            R_cnt++;
        }
    }

    for (i = 0; i < L_cnt; i++) {
        componentsArr.push(<AMatching key={i} cnt={R_cnt} aid={L_ids[i]} aid_arr={R_ids} aname={L_names[i]}
            name_arr={R_names} anum={L_chosen[i]} picture={L_pics[i]} rtype={rtype} status={L_correct[i]} />);
    }

    return (
        /* 
        Компонент условия вопроса с соответствием
        */

        <div>
            <div className={classes}>
                <br/>
                <p className="questiontext">{qname}</p>    
            <PictureQ src={Qpic} />
            <br />
                
                {rtype !== 1 && <ul className="match">{componentsArr}</ul>}

            </div>
            <br />

        </div>

    )
}