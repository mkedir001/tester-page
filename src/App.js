import React, { Component } from 'react';
import CalcTime from './helper/calc';

export default class Timer extends Component {
    state = {
        days: 0,
        hours: 0,
        minutes: 3,
        seconds: 0,
    }

    componentDidMount() {
      CalcTime();
      this.x = setInterval(function() {
    
        this.theDates = CalcTime('London', '+0.0');
      console.log('theeDates ==>', this.theDates);
        var countDownDate = new Date(this.theDates).getTime();
        var now = new Date().getTime();
        
        var distance = countDownDate - now;
        console.log('this is distance ==>', distance);
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // document.getElementById("countDown").innerHTML = days + "d " + hours + "h " + minutes + "m "+ seconds + "s";;
    
        }, 1000);
        this.myInterval = setInterval(() => {
            const { days, hours, seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div>
                { minutes === 0 && seconds === 0
                    ? <h1>Busted!</h1>
                    : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
        )
    }
}