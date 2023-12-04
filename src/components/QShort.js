import React from 'react'
import AnsShort from './AnsShort';

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

                    <AnsShort />
                <br/><br/>

            </div>

        </div>

    )
}
