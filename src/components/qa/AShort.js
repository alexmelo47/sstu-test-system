import React, { useRef } from 'react'

export default function AShort({ value, correct, rtype = 0 }) {

    const inputRef = React.useRef(null);
    if (inputRef.current) {
        inputRef.current.value = value;
    }
    //const [input, setInput] = useState(value ?? '');
    let rname = Math.floor(Math.random() * (8000 - 1001) + 1001);
    rname = "q_" + rname.toString();

    return (
        /*
        Компонент ответа на вопрос с ручным вводом ответа 
        */

        <ul className="shortanswer/numerical">
            <li>
                <label className="accesshide" htmlFor="AnsShort">Ответ:</label>
                <input className="q-input-text" id="AnsShort" name={rname} type="text" placeholder="Введите ответ здесь" defaultValue={value} ref={inputRef} autoComplete="off" disabled={rtype > 0} />
            </li>
            {rtype === 3 && <li>
                <label className="accesshide" htmlFor="AnsShortC">Правильный ответ:</label>
                <input className="q-input-text" id="AnsShortC" name={rname + "1"} type="text" defaultValue={correct} autoComplete="off" disabled />
            </li>}
        </ul>

    )
}