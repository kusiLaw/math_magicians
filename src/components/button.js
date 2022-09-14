import React from 'react';
import PropTypes from 'prop-types';

/* Disable Slint Rules */
// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  render() {
    const { color, name } = this.props;
    return (
      <button type="button" className={color}>{name}</button>
    );
  }
}

Button.propTypes = {
  color: PropTypes.string.isRequired,

  name: PropTypes.string.isRequired,
};
export default Button;
