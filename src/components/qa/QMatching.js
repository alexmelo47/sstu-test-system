import React from 'react'
import ASorting from './AMatching'

export default function QMatching({ qname, a_arr }) {//dev
    
    let componentsArr = [];
    /*
    1.вычислить количество левых и правых\выводить подряд все
    2.учесть порядок и сопоставление id
    */
    //for (let i = 0; i < cnt; i++) {
    //    componentsArr.push(<ASorting cnt={cnt} aid={a_arr[i].id} aname={a_arr[i].answer} anum={a_arr[i].number} />);
    //}

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