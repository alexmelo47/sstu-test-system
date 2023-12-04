import React from 'react'
import AMultiCheckbox from './AMultiCheckbox'

export default function QMulti_checkbox({ qname, cnt, a_arr }) {
    
    let componentsArr = [];
    for (let i = 0; i < cnt; i++) {
        componentsArr.push(<AMultiCheckbox aid={a_arr[i].id} aname={a_arr[i].answer} selected={a_arr[i].selected} />);
    }

    return (
        /* 
        Компонент условия вопроса с ручным вводом ответа 
        */
  
        <div>
            <div className="question">
                <br/><br/><p className="questiontext">
                    <span>
                        {qname}
                    </span>
                </p><br/><br/>
                
                <ul className="multichoice">{componentsArr}</ul>           

            </div>
        </div>

    )
}