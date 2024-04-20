import React from 'react'
import PictureA from './PictureA'

export default function AMultiCheckbox({ aid, aname, selected, picture }) {
    
    return (
        /* 
        Компонент ответа с несколькими правильными вариантами ответа
        */
  
        <div>               
            <li>
                <input className="checkboxes" name="quest_897582" type="checkbox" value={aid} defaultChecked={selected} />
                <label>{aname}</label>
                <PictureA src={picture} />
            </li>

            <br/>
        </div>

    )
}