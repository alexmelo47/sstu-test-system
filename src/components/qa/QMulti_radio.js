import React from 'react'
import AMulti_radio from './AMulti_radio'

export default function QMulti_radio({ qname, cnt, a_arr}) {
    
    let componentsArr = [];
    for (let i = 0; i < cnt*2; i += 2) {
        componentsArr.push(<AMulti_radio aid = a_arr[i], aname = a_arr[i+1] />);
    }

    return (
        /* 
        Компонент условия вопроса с одним вариантом ответа
        */
  
        <div>
            <div className="question">
                <br/><br/><p className="questiontext">
                    <span><p>Напишите оператор сравнения НЕРАВНО в среде MS Excel?</p></span>
                </p><br/><br/>
                
                <div><ul class="multichoice">{componentsArr}</ul></div>      

            </div>
        </div>

    )
}
