import React from 'react';

/* Disable Slint Rules */
// eslint-disable-next-line react/prefer-stateless-function
class TextInput extends React.Component {
  render() {
    const { color } = this.props;
    return (
      <p type="text" className={color}>0</p>
    );
  }
}

export default TextInput;
