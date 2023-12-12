import React from 'react'

export default function AMatching({ cnt, aid, aname, anum, side }) {//dev

    let componentsArr = [];
   // for (let i = 0; i < cnt; i++) {
   //     componentsArr.push(<option value={i + 1}>{i + 1}</option>);
   // }
    
    return (
        /* 
        Компонент выбора ответа вопроса с соответствием
        */

        <div>
            <label>{aname}</label>
            <select className="matchboxes" id={aid} value={anum}>
                {componentsArr}
            </select><br/>
            <br/>
        </div>

    )
}