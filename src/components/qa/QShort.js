import React from 'react'
import AShort from './AShort'
import PictureQ from './PictureQ'

export default function QShort({ qname, qa, Qpic }) {
    
    return (
        /* 
        Компонент условия вопроса с ручным вводом ответа 
        */
  
        <div>

            <div className="question">
                <br/>
                <p className="questiontext">{qname}</p>
                <br />
                <PictureQ src={Qpic} />
                <br />

                <AShort value={qa} />
                <br/><br/>

            </div>

        </div>

    )
}
