import React from 'react'
import AMatchingL from './AMatchingL'
import AMatchingR from './AMatchingR'

export default function QMatching({ qname, a_arr, cnt }) {
    
    let componentsArr = [];
    let aids = [];
    let chosen_num = [];
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
        }
    }
    for (i = 0; i < Lcnt; i++) {
        chosen_vals.push(aids[chosen_num[i] - 1]);
    }
    console.log(aids);
    for (i = 0; i < cnt; i++) {
        if (a_arr[i].type === "L") {
            componentsArr.push(<AMatchingL aname={a_arr[i].answer} />);
        }
        else {
            componentsArr.push(<AMatchingR cnt={Lcnt} aid={a_arr[i].id} aid_arr={aids} aname={a_arr[i].answer} anum={chosen_vals[i]} />);
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