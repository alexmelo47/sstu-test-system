import React from 'react'
import AShort from './AShort'
import PictureQ from './PictureQ'

export default function QShort({ qname, qa, correctN, correctT, Qpic, rtype = 0, status = false }) {

    //for result start
    let corr, classes = "question";
    if (rtype === 1 || rtype === 2) {
        status ? classes += " q-true" : classes += " q-false";
    }
    if (Number.isFinite(correctN)) {
        corr = correctN;
    }
    else if (correctT != null) {
        if (correctT.length > 0) {
            corr = correctT;
        }
    }
    //for result end

    return (
        /* 
        Компонент условия вопроса с ручным вводом ответа 
        */
  
        <div>
            <div className={classes}>
                <br/>
                <p className="questiontext">{qname}</p>                
                <PictureQ src={Qpic} />
                <br />

                {rtype !== 1 && <AShort value={qa} correct={corr} rtype={rtype} />}
                <br/>

            </div>
            <br />

        </div>

    )
}
