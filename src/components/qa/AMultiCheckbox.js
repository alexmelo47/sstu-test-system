import React from 'react'

export default function AMultiCheckbox({ aid, aname, selected }) {
    
    return (
        /* 
        Компонент условия вопроса с ручным вводом ответа 
        */
  
        <div>               
            <li>
                <input className="checkboxes" name="quest_897582" type="checkbox" value={aid} defaultChecked={selected} />
                <label>{aname}</label>
            </li>

            <br/>
        </div>

    )
}