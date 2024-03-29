import React from 'react'

export default function PictureQ({ src }) {

    /*
    Компонент картинки в вопросе
    */

    if (src === null || src === "") {
        return (
            <div style={{ display: 'none' }} ></div>
        )
    }
    else
    {
        return (
            <img className="question-pic" src={src} alt={""} />
        )
    }
}