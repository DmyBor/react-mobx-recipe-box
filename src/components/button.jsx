import React, { Component } from 'react';
import '../styles/button.scss'

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onlick} className="button">
        {this.props.value}
      </button>
    );
  }
}

export default Button;