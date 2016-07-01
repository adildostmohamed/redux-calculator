import React, { Component } from 'react';
import CalculatorInput from '../containers/calculator-input';
import CalculatorOutput from '../containers/calculator-output';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <CalculatorInput />
        <CalculatorOutput />
      </div>
    );
  }
}
