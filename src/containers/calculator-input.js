import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addOperator } from '../actions/index';
import { subtractOperator } from '../actions/index';
import { clearOperator } from '../actions/index';

class CalculatorInput extends Component {
  constructor(props) {
    super(props);

    this.state = ({ number: 0})
    this.onInputChange = this.onInputChange.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
    this.onSubtractClick = this.onSubtractClick.bind(this);
    this.onClearClick = this.onClearClick.bind(this);
  }
  onInputChange(event) {
    this.setState({ number: event.target.value });
  }
  onAddClick() {
    this.props.addOperator(this.state.number);
    this.setState({ number: 0});
  }
  onSubtractClick() {
    this.props.subtractOperator(this.state.number);
    this.setState({ number: 0});
  }
  onClearClick() {
    this.props.clearOperator();
    this.setState({ number: 0});
  }
  render() {
    return (
      <div>
        <label htmlFor="input">Input</label>
        <input
          value={ this.state.number }
          onChange = { this.onInputChange }
          type="number"
          placeholder="Start calculating!"
          id="input"/>
          <button onClick={ this.onAddClick }>+</button>
          <button onClick={ this.onSubtractClick }>-</button>
          <button>*</button>
          <button>/</button>
          <button onClick={ this.onClearClick }>Clear</button>
      </div>
    )
  }
}

function mapStateToDispatch(dispatch) {
  return bindActionCreators({ addOperator: addOperator, subtractOperator: subtractOperator, clearOperator: clearOperator}, dispatch);
}

export default connect(null, mapStateToDispatch)(CalculatorInput);
