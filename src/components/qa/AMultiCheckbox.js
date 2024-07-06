import React from 'react'
import PictureA from './PictureA'

export default function AMultiCheckbox({ aid, aname, rname, selected, picture }) {
    
    return (
        /* 
        Компонент ответа с несколькими правильными вариантами ответа
        */
  
        <div>               
            <li>
                <input className="checkboxes" name={rname} type="checkbox" value={aid} defaultChecked={selected} autoComplete="off" />
                <label>{aname}</label>
                <PictureA src={picture} />
            </li>

            <br/>
        </div>

    )
}