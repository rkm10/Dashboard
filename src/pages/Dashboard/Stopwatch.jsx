import React, { useState, useEffect } from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(0); // Time in seconds
    const [isRunning, setIsRunning] = useState(false); // Timer state

    // Effect to manage the timer interval
    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer); // Cleanup interval on unmount
    }, [isRunning]);

    // Format time into HH:MM:SS
    const formatTime = (time) => {
        const hours = Math.floor(time / 3600000).toString().padStart(2, "0"); // Convert time to hours
        const minutes = Math.floor((time % 3600000) / 60000).toString().padStart(2, "0"); // Convert remaining time to minutes
        const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, "0"); // Convert remaining time to seconds
        const milliseconds = ("0" + ((time / 10) % 100)).slice(-2); // Convert remaining time to two-digit milliseconds

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    };


    // Handlers
    const handleStartPause = () => setIsRunning(!isRunning);
    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial" }}>
            <h1>Stopwatch</h1>
            <h2>{formatTime(time)}</h2>
            <button onClick={handleStartPause}>
                {isRunning ? "Pause" : "Start"}
            </button>
            <button onClick={handleReset} style={{ marginLeft: "10px" }}>
                Reset
            </button>
        </div>
    );
};

export default Stopwatch;
