import React from 'react'

export default function AMatches({ aid, aname, anum }) {
    
    return (
        /* 
        Компонент выбора ответа вопроса с несколькими вариантами ответа
        */

        <div>
            <label>Создать стиль ячейки - &nbsp;</label>
            <select value={anum}>
                <option value="2">2</option>
                <option value="1">1</option>
                <option value="4">4</option>
                <option value="3">3</option>
            </select><br/>
            <br/>
        </div>

    )
}