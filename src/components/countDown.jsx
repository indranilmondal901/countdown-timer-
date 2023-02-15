import React, { useEffect, useState } from "react";
import "./countDown.css"

function CountDown() {
    const [hourCount, setHourCount] = useState("");
    const [minCount, setMinCount] = useState("");
    const [secondCount, setSecondCount] = useState("");
    const [dispHour, setDispHour] = useState(0);
    const [dispMin, setDispMin] = useState(0);
    const [dispSec, setDispSec] = useState(0);
    const [timerId, setTimerId] = useState(null);


    useEffect(() => {
        if (dispMin === 0 && dispSec === 0) {
            clearInterval(timerId);
        }
    }, [dispMin, dispSec]);

    const startCountdown = () => {
        let hour = Math.floor(hourCount);
        let min = Math.floor(minCount);
        let sec = Math.floor(secondCount)

        if (isNaN(min) && isNaN(sec) && isNaN(hour)) {
            setDispHour(0);
            setDispMin(0);
            setDispSec(0);
            return;
        }
        setDispHour(hour);
        setDispMin(min);
        setDispSec(sec);

        setTimerId(
            setInterval(() => {
                if (sec === 0) {
                    if (min !== 0) {
                        min = min - 1;
                        setDispMin(min);
                        sec = 59;
                        setDispSec(sec);
                    } else if (min === 0) {
                        if (hour !== 0) {
                            hour = hour - 1;
                            setDispHour(hour);
                            min = 59;
                            setDispMin(min);
                            sec = 59;
                            setDispSec(sec);
                        } else {
                            setDispHour(0);
                            setDispMin(0);
                            setDispSec(0);
                        }
                    }
                } else if (sec !== 0) {
                    sec = sec - 1;
                    setDispSec(sec);
                }
            }, 1000)
        );
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            startCountdown();
        }
    };

    return (
        <>
            <h1 id="heading">CountDown Timer</h1>
            <div id="inputBox">
                <input
                    type="number" placeholder="Hr" onChange={(event) => setHourCount(event.target.value)} value={hourCount} onKeyDown={handleKeyDown}
                />
                <input
                    type="number" placeholder="Min" onChange={event => setMinCount(event.target.value)} value={minCount} onKeyDown={handleKeyDown}
                />
                <input
                    type="number" placeholder="Sec" onChange={event => setSecondCount(event.target.value)} value={secondCount} onKeyDown={handleKeyDown}
                />
            </div>
            <div id="current-time">
                <h1 id="DispTime">
                    {dispHour}<span class="smaller-text"> Hr </span>
                    : {dispMin} <span class="smaller-text"> Min </span>
                    : {dispSec}<span class="smaller-text"> Sec </span>
                </h1>
            </div>
        </>
    )
}

export default CountDown;