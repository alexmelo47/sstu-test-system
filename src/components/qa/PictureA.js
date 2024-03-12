import React from 'react'

export default function PictureA({ src }) {

    /* 
    Компонент картинки в вопросе
    */

    if (src === null) {
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