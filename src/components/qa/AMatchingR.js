import React from 'react'

export default function AMatchingR({ cnt, aid, aid_arr, aname, anum }) {//dev

    let componentsArr = [];
    for (let i = 0; i < cnt; i++) {
        componentsArr.push(<option key={i} value={aid_arr[i]}>{i + 1}</option>);
    }
    
    return (
        /* 
        Правый компонент(выбора) ответа вопроса с соответствием
        */

        <div>
            <label>{aname}</label>
            <select className="matchboxes" id={aid} defaultValue={anum}>
                {componentsArr}
            </select><br/>
            <br/>
        </div>

    )
}