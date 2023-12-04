import React from 'react'

export default function AnsShort() {
    return (
        <ul className="shortanswer/numerical">
            <li>
                <label className="accesshide" for="">Ответ</label>
                <input id="AnsShort" name="answer-input" type="text" />
            </li>
        </ul>

    )
}