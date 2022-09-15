import React from 'react';
import PropTypes from 'prop-types';

/* Disable Slint Rules */
// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  itemClick

  itemClick = (e) => {
    // this.props.itemClicked(e);
    // const { color, name, itemClicked } = this.props;
    Button.itemClick(e);
  }

  render() {
    const { color, name, itemClicked } = this.props;
    Button.itemClick = itemClicked;
    return (
      <button type="button" className={color} onClick={this.itemClick}>{name}</button>
    );
  }
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
  itemClicked: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
export default Button;
