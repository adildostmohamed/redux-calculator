import React, { Component } from 'react';
import { connect } from 'react-redux';

class CalculatorOutput extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    if(!this.props.calculation) {
      return <div>Let's get started</div>
    }
    return (
      <div>
        <p>{ this.props.calculation }</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    calculation: state.calculation
  };
}

export default connect(mapStateToProps)(CalculatorOutput);
