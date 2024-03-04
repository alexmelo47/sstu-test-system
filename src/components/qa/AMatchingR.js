import React from 'react'

export default function AMatchingR({ cnt, aid, aid_arr, name_arr, anum }) {//dev

    let componentsArr = [];
    for (let i = 0; i < cnt; i++) {
        componentsArr.push(<option key={i} value={aid_arr[i]}>{name_arr[i]}</option>);
    }
    
    return (
        /* 
        Правый компонент(выбора) ответа вопроса с соответствием
        */

        <div className="matches">
            <select className="matchboxes select custom-select menuquest_897580_0" id={aid} defaultValue={anum}>
                {componentsArr}
            </select><br/>
            <br/>
        </div>

    )
}