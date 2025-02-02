import React, { useState, useEffect } from 'react';

const Timer = ({ dl }) => {

    //компонент таймера

    //const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = dl;

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        if (time <= 0) {
            setHours(0);
            setMinutes(0);
            setSeconds(0);
        }
        else {
            //setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        }
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    });

    return (
        <div className="t" role="timer">

            <ul className="timer">
                
                <span className="text"> Осталось:&nbsp; </span><br />
                <li className="">
                    <span id="hour">{hours < 10 ? "0" + hours : hours }:</span>                                 
                </li>
                        
                <li className="">
                    <span id="minute">{minutes < 10 ? "0" + minutes : minutes }:</span>                          
                </li>
                        
                <li className="">   
                    <span id="second">{seconds < 10 ? "0" + seconds : seconds }</span>                                  
                </li>
            </ul>

        </div>
    );
};

export default Timer;

/*
<li className="">
    <span className="text"> Дней &nbsp; </span><br/>  
    <span id="day">{days < 10 ? 0 + days : days }</span>                                      
</li>
*/