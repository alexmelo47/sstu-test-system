import React, { Component } from 'react'
import axios from 'axios'

export default function QShort({ qname }) {
    
    return (
        /* 
        Компонент условия вопроса с ручным вводом ответа 
        */
  
        <div>
            <div className="question">
                <br/>
                <p className="questiontext">Напишите оператор сравнения НЕРАВНО в среде MS Excel?</p>
                <br/><br/>

                <AShort/>

                <br/>
            </div>

        </div>

    )
}
