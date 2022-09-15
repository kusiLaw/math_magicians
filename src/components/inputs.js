import React from 'react';
import PropTypes from 'prop-types';

/* Disable Slint Rules */
// eslint-disable-next-line react/prefer-stateless-function
class TextInput extends React.Component {
  render() {
    const { color, result } = this.props;
    return (
      <p type="text" className={color}>
        {
       result.next
        || result.total || 0
}
      </p>
    );
  }
}

TextInput.propTypes = {
  color: PropTypes.string.isRequired,
  result: PropTypes.string,
};

TextInput.defaultProps = {
  result: {},
};

export default TextInput;
