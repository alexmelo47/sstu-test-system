import React, { useState } from 'react'

export default function AShort(props) {

    const [input, setInput] = useState(props?.value ?? '');
    let rname = Math.floor(Math.random() * (8000 - 1001) + 1001);
    rname = "q_" + rname.toString();

    return (
        /*
        Компонент ответа на вопрос с ручным вводом ответа 
        */
        <ul className="shortanswer/numerical">
            <li>
                <label className="accesshide" htmlFor="AnsShort">Ответ:</label>
                <input id="AnsShort" name={rname} type="text" placeholder="Введите ответ здесь" value={input} onInput={e => setInput(e.target.value)} autoComplete="off" />
            </li>
        </ul>

    )
}