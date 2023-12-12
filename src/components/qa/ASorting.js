import React from 'react'

export default function ASorting({ cnt, aid_arr, aname, anum }) {

    let componentsArr = [];
    for (let i = 0; i < cnt; i++) {
        if (i + 1 === anum) {
            componentsArr.push(<option selected="selected" value={aid_arr[i]}>{i + 1}</option>);
        }
        else {
            componentsArr.push(<option value={aid_arr[i]}>{i + 1}</option>);
        }
    }
    
    return (
        /* 
        Компонент выбора ответа вопроса с сортировкой
        */

        <div>
            <label>{aname}</label>
            <select className="orderboxes" value={anum}>
                {componentsArr}
            </select><br/>
            <br/>
        </div>

    )
}