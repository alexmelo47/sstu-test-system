import React from 'react'
import PictureA from './PictureA'

export default function AMultiRadio({ aid, aname, selected, picture }) {
    
    return (
        /* 
        Компонент выбора ответа вопроса с одним вариантом ответа
        */
  
        <div>                         
            <li>
                <input className="radioboxes" name="quest_897582" type="radio" value={aid} defaultChecked={selected} />
                <label>{aname}</label>
                <PictureA src={picture} />
            </li>
            <br/>
        </div>

    )
}
