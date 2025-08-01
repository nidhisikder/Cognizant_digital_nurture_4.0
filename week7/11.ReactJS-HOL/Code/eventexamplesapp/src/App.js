import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: ''
    };
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.sayHello();
    alert("Hello");
  };
  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };
  sayHello = () => {
    this.setState({ message: "Hello! This is a static message after increment." });
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleSyntheticEvent = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  render() {
    return (
      <div className="App">
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <p>{this.state.message}</p>

        <hr />

        <button onClick={() => this.sayWelcome("Welcome!")}>
          Say Welcome
        </button>

        <hr />

        <button onClick={this.handleSyntheticEvent}>
          OnPress
        </button>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
