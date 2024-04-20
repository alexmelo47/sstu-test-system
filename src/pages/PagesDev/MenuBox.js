import React from 'react'
import Button from "@material-ui/core/Button"

export default function MenuBox({ cnt }) {

    let componentsArr = [];
    for (let i = 0; i < cnt; i++) {
        componentsArr.push(<Button className="menubox" variant="outlined">{i + 1}</Button >);
    }

    return (

        <div>
            <div className="box">

                <ul className="inbox">{componentsArr}</ul>

            </div>
        </div>

    )
}