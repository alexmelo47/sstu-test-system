import React from 'react'
import AMatchingL from './AMatchingL'
import AMatchingR from './AMatchingR'

export default function QMatching({ qname, a_arr, cnt }) {
    
    let componentsArr = [];
    let aids = [];
    let chosen_num = [];
    let chosen_names = [];
    let chosen_vals = [];
    let Lcnt = 0;
    let i;

    for (i = 0; i < cnt; i++) {
        if (a_arr[i].type === "L") {
            aids.push(a_arr[i].id);
            Lcnt++;
        }
        else {
            chosen_num.push(a_arr[i].number);
            chosen_names.push(a_arr[i].answer);
        }
    }
    for (i = 0; i < Lcnt; i++) {
        chosen_vals.push(aids[chosen_num[i] - 1]);
    }
    console.log(aids);
    console.log(chosen_names);
    for (i = 0; i < cnt; i++) {
        if (a_arr[i].type === "L") {
            componentsArr.push(<li key={i}><AMatchingL aname={a_arr[i].answer} /></li>);
        }
        else {
            componentsArr.push(<li key={i}><AMatchingR cnt={Lcnt} aid={a_arr[i].id} aid_arr={aids} name_arr={chosen_names} anum={chosen_vals[i]} /></li>);
        }
    }

    return (
        /* 
        Компонент условия вопроса с соответствием
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