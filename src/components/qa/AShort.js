import React, { useState } from 'react'

export default function AnsShort(props) {
    const [input, setInput] = useState(props?.value ?? '');
    return (
        /*
        Компонент ответа на вопрос с ручным вводом ответа 
        */
        <ul className="shortanswer/numerical">
            <li>
                <label className="accesshide" htmlFor="AnsShort">Ответ:</label>
                <input id="AnsShort" name="answer-input" type="text" placeholder="Введите ответ здесь" value={input} onInput={e => setInput(e.target.value)} />
            </li>
        </ul>

    )
}