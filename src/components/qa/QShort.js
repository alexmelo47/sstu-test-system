import React from 'react'
import AShort from './AShort';

export default function QShort({ qname }) {
    
    return (
        /* 
        Компонент условия вопроса с ручным вводом ответа 
        */
  
        <div>

            <div className="question">
                <br/>
                    <p className="questiontext">{qname}</p>
                    <br/>

                    <AShort />
                <br/><br/>

            </div>

        </div>

    )
}
