import React, { useRef } from 'react'
import PictureA from './PictureA'

export default function AMultiRadio({ aid, aname, rname, selected, picture, rtype = 0, status = false }) {

    const inputRef = React.useRef(null);
    if (inputRef.current) {
        inputRef.current.checked = selected;
    }
    //for result start
    let classes = "";
    if (rtype === 2) {
        status ? classes += " a-true" : classes += " a-false";
    }
    //for result end

    return (
        /* 
        Компонент выбора ответа вопроса с одним вариантом ответа
        */
  
        <div>                         
            <li className={classes}>
                <label>
                <input className="radioboxes" name={rname} type="radio" value={aid} defaultChecked={selected} ref={inputRef} autoComplete="off" disabled={rtype > 0} />
                {aname}<PictureA src={picture} />
                </label>
            </li>
            <br/>
        </div>

    )
}
