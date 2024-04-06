import React from 'react'

export default function PictureQ({ src }) {

    /*
    Компонент картинки в вопросе
    */
    let src2 = src.url;

    if (src2 === null || src2 === "" || src2 === undefined) {
        return (
            <div style={{ display: 'none' }} ></div>
        )
    }
    else
    {
        return (
            <img className="question-pic" src={src2} alt={""} />
        )
    }
}