import React from 'react';

const Test = ({ tid, status, adaptive, name, discipline, teacher, time, try_time, try_cnt, testing_attr, q_cnt }) => {
    if (status === "WIP"){
        return (
            <div>
                <ul className="test-list wip">
                    <li>{name}</li>
                    <li>{discipline}</li>
                    <li>В разработке</li>
                    <li>{time}</li>
                    <li>
                        <button onClick={() => { localStorage.setItem("tid", tid) }} className="open-test">Открыть тест</button>
                    </li>
                </ul>
            </div>

        )
    }
    if (status === "TRAINING"){
        return (
            <div>
                <ul className="test-list training">
                    <li>{name}</li>
                    <li>{discipline}</li>
                    <li>Тренировочный</li>
                    <li>{time}</li>
                    <li>
                        <button onClick={() => { localStorage.setItem("tid", tid) }} className="open-test">Открыть тест</button>
                    </li>
                </ul>
            </div>
        )
    }
    if (status === "INTERMEDIATE_TEST"){
        return (
            <div>
                <ul className="test-list intermediate">
                    <li>{name}</li>
                    <li>{discipline}</li>
                    <li>Промежуточный</li>
                    <li>{time}</li>
                    <li>
                        <button onClick={() => { localStorage.setItem("tid", tid) }} className="open-test">Открыть тест</button>
                    </li>
                </ul>
            </div>
        )
    }
    if (status === "EXAMINATION") {
        return (
            <div>
                <ul className="test-list examinational">
                    <li>{name}</li>
                    <li>{discipline}</li>
                    <li>Итоговый</li>
                    <li>{time}</li>
                    <li>
                        <button onClick={() => { localStorage.setItem("tid", tid) }} className="open-test">Открыть тест</button>
                    </li>
                </ul>
            </div>
        )
    }
    if (status === "DEBUG") {
        return (
            <div>
                <ul className="test-list debug">
                    <li>{name}</li>
                    <li>{discipline}</li>
                    <li>Отладка</li>
                    <li>{time}</li>
                    <li>
                        <button onClick={() => { localStorage.setItem("tid", tid) }} className="open-test">Открыть тест</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Test