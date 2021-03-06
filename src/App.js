import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }
    onInputChange(e) {
        const val = e.target.value;
        const parts = val.match(/(\d+)([+\-*])(\d+)/); // ?
        let result;
        if (Array.isArray(parts) && parts.length > 3) {
            const left = parseInt(parts[1], 10); // ?
            const operator = parts[2]; // ?
            const right = parseInt(parts[3], 10); // ?
            if (operator === '+') {
                result = left + right; // ?
            } else if (operator === '-') {
                result = left - right; // ?
            } else if (operator === '*') {
                result = left * right; // ?
            }
        }
        this.setState({result});
    }

    render() {
        return (
        <div className="App">
            <input onChange={this.onInputChange.bind(this)} />
            <div id="result">{this.state.result}</div>
        </div>
        );
    }
}

export default App;
