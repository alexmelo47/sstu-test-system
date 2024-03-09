import React from 'react'

export default function AMatching({ cnt, aid, aid_arr, aname, name_arr }) {

    let componentsArr = [];
    for (let i = 0; i < cnt; i++) {
        componentsArr.push(<option key={i} value={aid_arr[i]}>{name_arr[i]}</option>);
    }
    
    return (
        /* 
        компонент ответа вопроса с соответствием (обе части)

        добавить в select конструкцию defaultValue={anum}
        */
        <div className="matches">
            <label className="accesshide">{aname} - </label>
            
            <select className="matchboxes select custom-select menuquest_897580_0" id={aid}>
                {componentsArr}
            </select>
            <br/>
        </div>

    )
}