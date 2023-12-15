import React from 'react'
import AShort from './AShort';

export default function QShort({ qname, qa }) {
    
    return (
        /* 
        Компонент условия вопроса с ручным вводом ответа 
        */
  
        <div>

            <div className="question">
                <br/>
                <p className="questiontext">{qname}</p>
                <br/>

                <AShort value={qa} />
                <br/><br/>

            </div>

        </div>

    )
}
