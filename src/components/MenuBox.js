import React from 'react'
import Button from "@material-ui/core/Button";

export default function MenuBox({ cnt, q_arr }) {

    let componentsArr = [];
    for (let i = 0; i < cnt; i++) {
        componentsArr.push(<Button variant="outlined">{ q_arr[i].id }</Button >);
    }

    return (

        <div>
            <div className="box">

                <ul className="inbox">{componentsArr}</ul>

            </div>
        </div>

    )
}