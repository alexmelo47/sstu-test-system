import React, { useRef } from 'react'
import PictureA from './PictureA'

export default function AMultiCheckbox({ aid, aname, rname, selected, picture, rtype = 0, status = false }) {

    const inputRef = React.useRef(null);
    if (inputRef.current) {
        inputRef.current.checked = selected;
    }
    //for result start
    let classes = "";
    if (rtype >= 2) {
        status ? classes += " a-true" : classes += " a-false";
    }
    //for result end

    return (
        /* 
        Компонент ответа с несколькими правильными вариантами ответа
        */
  
        <div>               
            <li className={classes}>
                <label>
                <input className="checkboxes" name={rname} type="checkbox" value={aid} defaultChecked={selected} ref={inputRef} autoComplete="off" disabled={rtype > 0} />
                {aname}<PictureA src={picture} />
                </label>
            </li>
            <br/>
        </div>

    )
}