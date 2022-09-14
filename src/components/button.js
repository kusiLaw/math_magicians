import React from 'react';

/* Disable Slint Rules */
// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  render() {
    return (
      <button type="button" className={this.props.color}>{this.props.name}</button>
    );
  }
}

export default Button;
