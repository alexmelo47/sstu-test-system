import React from 'react'
import AnsShort from './AnsShort';

export default function QShort({ qname }) {
    return (
        /* 
        —траница с примерами визуализации разных типов вопросов: на 1 вариант ответа, 
        несколько вариантов ответа, 
        ввод ответа вручную, 
        на соответствие 
        и выбор правильного пор¤дка 
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