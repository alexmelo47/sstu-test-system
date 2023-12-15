import React from 'react'

export default function ASorting({ cnt, aid_arr, aname, anum }) {

    let componentsArr = [];
    for (let i = 0; i < cnt; i++) {
        componentsArr.push(<option value={aid_arr[i]}>{i + 1}</option>);
    }
    
    return (
        /* 
        Компонент выбора ответа вопроса с сортировкой
        */

        <div>
            <label>{aname}</label>
            <select className="orderboxes" defaultValue={anum}>
                {componentsArr}
            </select><br/>
            <br/>
        </div>

    )
}