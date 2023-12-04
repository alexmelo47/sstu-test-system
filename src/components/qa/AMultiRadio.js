import React from 'react'

export default function AMultiRadio({ aid, aname, selected }) {
    
    return (
        /* 
        Компонент выбора ответа вопроса с одним вариантом ответа
        */
  
        <div>                         
            <li>
                <input className="radioboxes" name="quest_897582" type="radio" value={aid} defaultChecked={selected} />
                <label>{aname}</label>
            </li>
            <br/>
        </div>

    )
}
