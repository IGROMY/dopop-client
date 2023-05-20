import React, { Component } from 'react';

class Timer extends Component {
    state = {
        hours: 24,
        minutes: 0,
        seconds: 0,
    };

    componentDidMount() {
        this.timerId = setInterval(() => {
            const { hours, minutes, seconds } = this.state;
            if (hours === 0 && minutes === 0 && seconds === 0) {
                clearInterval(this.timerId);
                return;
            }
            if (minutes === 0 && seconds === 0) {
                this.setState(({ hours }) => ({ hours: hours - 1, minutes: 59, seconds: 59 }));
            } else if (seconds === 0) {
                this.setState(({ minutes }) => ({ minutes: minutes - 1, seconds: 59 }));
            } else {
                this.setState(({ seconds }) => ({ seconds: seconds - 1 }));
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        const { hours, minutes, seconds } = this.state;
        return (
            <div>
                {hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes} :{' '}
                {seconds < 10 ? `0${seconds}` : seconds}
            </div>
        );
    }
}

export default Timer;