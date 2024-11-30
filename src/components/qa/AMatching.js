import React, { useRef } from 'react'
import PictureA from './PictureA'

export default function AMatching({ cnt, aid, aid_arr, aname, name_arr, anum, picture, rtype = 0, status = false }) {

    const inputRef = React.useRef(null);
    if (inputRef.current) {
        inputRef.current.value = anum;
    }

    //for result start
    let classes = "";
    if (rtype === 2) {
        status ? classes += " a-true" : classes += " a-false";
    }
    //for result end

    let componentsArr = [];
    for (let i = 0; i < cnt; i++) {
        componentsArr.push(<option key={i} value={aid_arr[i]}>{name_arr[i]}</option>);
    }
    
    return (
        /* 
        Компонент ответа вопроса с соответствием (обе части)

        ПЕРЕСМОТРЕТЬ в select конструкцию defaultValue={anum}
        */

        <li className={classes}>
            <div className="matches">
                <label className="accesshide"><PictureA src={picture} /> {aname} - </label>
            
                <select className="matchboxes select custom-select" defaultValue={anum} ref={inputRef} id={aid} disabled={rtype > 0}>
                    {componentsArr}
                </select>

                <br/>
            </div>

            {rtype === 3 && <div className="matches">
                <div className="accesshide">Правильный ответ к <PictureA src={picture} /> {aname} - </div>

                <div className="matchboxes select custom-select" id={aid + 1}>
                    {anum}
                </div>

                <br />
            </div>}
        </li>
    )
}