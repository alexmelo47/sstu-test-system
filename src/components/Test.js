import React from 'react';

const Test = ({ tid, name, discipline, status, time }) => {
    if (status === "WIP"){
        return(
            <ul className="test-list examinational">
                <li>{name}</li>
                <li>{discipline}</li>
                <li>WIP</li>
                <li>{time}</li>
                <li>
                    <button onClick={() => { localStorage.setItem("tid", tid) } } className="open-test">Открыть тест</button>
                </li>
            </ul>
        )
    }
    if (status === "TRAINING"){
        return(
            <ul className="test-list training">
                <li>{name}</li>
                <li>{discipline}</li>
                <li>Тренировочный</li>
                <li>{time}</li>
                <li>
                    <button onClick={() => { localStorage.setItem("tid", tid) }} className="open-test">Открыть тест</button>
                </li>
            </ul>
        )
    }
    if (status === "INTERMEDIATE_TEST"){
        return(
            <ul className="test-list examinational">
                <li>{name}</li>
                <li>{discipline}</li>
                <li>Промежуточный</li>
                <li>{time}</li>
                <li>
                    <button onClick={() => { localStorage.setItem("tid", tid) }} className="open-test">Открыть тест</button>
                </li>
            </ul>
        )
    }
    if (status === "EXAMINATION") {
        return (
            <ul className="test-list examinational">
                <li>{name}</li>
                <li>{discipline}</li>
                <li>Оценочный</li>
                <li>{time}</li>
                <li>
                    <button onClick={() => { localStorage.setItem("tid", tid) }} className="open-test">Открыть тест</button>
                </li>
            </ul>
        )
    }
    if (status === "DEBUG") {
        return (
            <ul className="test-list debugging">
                <li>{name}</li>
                <li>{discipline}</li>
                <li>Отладка</li>
                <li>{time}</li>
                <li>
                    <button onClick={() => { localStorage.setItem("tid", tid) }} className="open-test">Открыть тест</button>
                </li>
            </ul>
        )
    }
}

export default Test