import { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState({ hours: 24, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime((prevTime) => {
                const { hours, minutes, seconds } = prevTime;
                if (hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(timerId);
                    return prevTime;
                }
                if (minutes === 0 && seconds === 0) {
                    return { hours: hours - 1, minutes: 59, seconds: 59 };
                } else if (seconds === 0) {
                    return { hours, minutes: minutes - 1, seconds: 59 };
                } else {
                    return { hours, minutes, seconds: seconds - 1 };
                }
            });
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    const { hours, minutes, seconds } = time;

    return (
        <div>
            {hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}
        </div>
    );
};

export default Timer;
