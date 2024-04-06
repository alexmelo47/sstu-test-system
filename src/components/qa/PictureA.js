import React from 'react'

export default function PictureA({ src }) {

    /* 
    Компонент картинки в вопросе
    */

    if (src === null || src === "" || src === undefined) {
        return (
            <div style={{ display: 'none' }} ></div>
        )
    }
    else
    {
        return (
            <label>&nbsp;<img className="answer-pic" src={src} alt={""} /></label>
        )
    }
}