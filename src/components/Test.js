import React from 'react';

const Test = ({ tid, name, status, method }) => {
    if (status !== 1){//to actual statuses
    return(
        <ul className="test-list examinational">
            <li>{tid}</li>
            <li>{name}</li>
            <li>{method}</li>
            <li>{status}</li>
            <li>
                <button className="open-test">Открыть тест</button>
            </li>
        </ul>
    )
    }
    if (status === 2){
    return(
        <ul className="test-list training">
            <li>{name}</li>
            <li>{method}</li>
            <li>{status}</li>
            <li>
                <button className="open-test">Открыть тест</button>
            </li>
        </ul>
        )
    }
    if (status === 3){
    return(
        <ul className="test-list debugging">
            <li>{name}</li>
            <li>{method}</li>
            <li>{status}</li>
            <li>
                <button className="open-test">Открыть тест</button>
            </li>
        </ul>
        )
    }
}

export default Test