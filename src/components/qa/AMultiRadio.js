import React from 'react'
import PictureA from './PictureA'

export default function AMultiRadio({ aid, aname, rname, selected, picture }) {
    
    return (
        /* 
        Компонент выбора ответа вопроса с одним вариантом ответа
        */
  
        <div>                         
            <li>
                <input className="radioboxes" name={rname} type="radio" value={aid} defaultChecked={selected} autoComplete="off" />
                <label>{aname}</label>
                <PictureA src={picture} />
            </li>
            <br/>
        </div>

    )
}
