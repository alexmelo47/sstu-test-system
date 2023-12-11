import React from 'react'
import AMatches from './AMatches'

export default function QMatches({ qname, cnt, a_arr }) {//добавить задание выбранных раньше значений
    
    let componentsArr = [];
    for (let i = 0; i < cnt; i++) {
        componentsArr.push(<AMatches cnt={cnt} aid={a_arr[i].id} aname={a_arr[i].answer} anum={a_arr[i].number} />);
    }

    return (
        /* 
        Компонент условия вопроса с несколькими вариантами ответа
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