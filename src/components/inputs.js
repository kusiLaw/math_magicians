import React from 'react';

/* Disable Slint Rules */
// eslint-disable-next-line react/prefer-stateless-function
class TextInput extends React.Component {
  render() {
    return (
      <input type="text" placeholder="0" className={this.props.color} />
    );
  }
}

export default TextInput;
