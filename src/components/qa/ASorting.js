import React from 'react'
import PictureA from './PictureA'

export default function ASorting({ cnt, aid, aname, anum, picture, rtype = 0, status = false }) {

    //for result start
    let classes = "";
    if (rtype === 2) {
        status ? classes += " a-true" : classes += " a-false";
    }
    //for result end

    let componentsArr = [];
    for (let i = 0; i < cnt; i++) {
        componentsArr.push(<option key={i} value={i}>{i + 1}</option>);
    }
    
    return (
        /* 
        Компонент выбора ответа вопроса с сортировкой (обе части)

        ПЕРЕСМОТРЕТЬ в select конструкцию defaultValue={anum}
        */

        <li className={classes}>
            <div className="matches">
                <label className="accesshide"><PictureA src={picture} /> {aname} - </label>

                <select className="orderboxes select custom-select" defaultValue={anum} id={aid} disabled={rtype > 0}>
                    {componentsArr}
                </select>

                <br/>
            </div>
        </li>
    )
}