import React, { Component } from 'react';
import Timer from './Timer'
import './App.css';

  export default class App extends Component {
    state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
componentDidMount = () => {
  Timer();
};
    render() {
    return (
      <div className="App">
      <header className="App-header">
      <p>Coming soon</p>
      <p id="countDown"></p>
      </header>
      </div>
      )
    };
    };
    
    