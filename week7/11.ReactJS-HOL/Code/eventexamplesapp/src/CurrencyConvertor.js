import React, { Component } from 'react';
class CurrencyConvertor extends Component {
  constructor() {
    super();
    this.state = {
      rupees: '',
      euros: ''
    };
  }
  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const euroRate = 0.011; 
    const euros = parseFloat(this.state.rupees) * euroRate;
    this.setState({ euros: euros.toFixed(2) });
  };
  sayconvert = (msg) => {
    alert(msg);
  };
  render() {
    return (
      <div>
        <h2>Currency Convertor (INR to EUR)</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="Enter INR"
            value={this.state.rupees}
            onChange={this.handleChange}
          />
          <button type="submit" onClick={() => this.sayconvert("Converting Indian Rupees to Euros")}>
      Convert</button>
        </form>
        {this.state.euros && (
          <p>Converted Amount: €{this.state.euros}</p>
        )}
      </div>
    );
  }
}
export default CurrencyConvertor;
