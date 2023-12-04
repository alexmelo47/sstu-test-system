import React from 'react'
import AMultiRadio from './AMultiRadio'

export default function QMulti_radio({ qname, cnt, a_arr}) {
    
    let componentsArr = [];
    for (let i = 0; i < cnt; i++) {
        componentsArr.push(<AMultiRadio aid={a_arr[i].id} aname={a_arr[i].answer} selected={a_arr[i].selected} />);
    }

    return (
        /* 
        Компонент условия вопроса с одним вариантом ответа
        */
  
        <div>
            <div className="question">
                <br/><br/><p className="questiontext">
                    <span>
                        {qname}
                    </span>
                </p><br/><br/>
                
                <div><ul class="multichoice">{componentsArr}</ul></div>      

            </div>
        </div>

    )
}
