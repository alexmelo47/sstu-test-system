import React from 'react'

export default function AMatches({ cnt, aid, aname, anum }) {

    let componentsArr = [];
    for (let i = 0; i < cnt; i++) {
        componentsArr.push(<option value={i + 1}>{i + 1}</option>);
    }
    
    return (
        /* 
        Компонент выбора ответа вопроса с несколькими вариантами ответа
        */

        <div>
            <label>{aname}</label>
            <select className="orderboxes" id={aid} value={anum}>
                {componentsArr}
            </select><br/>
            <br/>
        </div>

    )
}