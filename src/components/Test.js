import React from 'react';

const Test = (props) => {
    if (props.status === 1){
    return(
        <ul className="test-list examinational"><li>{props.name}</li><li>{props.method}</li><li>{props.status}</li><li><button className="open-test">Открыть тест</button></li></ul>
    )
    }
    if (props.status === 2){
    return(
        <ul className="test-list training"><li>{props.name}</li><li>{props.method}</li><li>{props.status}</li><li><button className="open-test">Открыть тест</button></li></ul>
        )
    }
    if (props.status === 3){
    return(
        <ul className="test-list debugging"><li>{props.name}</li><li>{props.method}</li><li>{props.status}</li><li><button className="open-test">Открыть тест</button></li></ul>
        )
    }
} 
const Test = ({ tid, name, status, method }) => {
    return (
        <div>{tid} | {name} | {status} | {method} </div>
    )
} 

export default Test