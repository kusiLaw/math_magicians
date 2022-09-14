import React from 'react';
import PropTypes from 'prop-types';

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

TextInput.propTypes = {
  color: PropTypes.string.isRequired,
};
export default TextInput;
