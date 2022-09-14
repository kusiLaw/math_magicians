import React from 'react';
import TextInput from './inputs';
import Button from './button';

/* Disable Slint Rules */
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkGray: 'darkGray',
      lightGray: 'lightGray',
      orange: 'orange',
    };
  }

  render() {
    const { darkGray, lightGray, orange } = this.state;

    return (
      <div className="calculator">
        <TextInput color={darkGray} />
        <ul>
          <li className="row-1">
            <Button color={lightGray} name="AC" />
            <Button color={lightGray} name="+/-" />
            <Button color={lightGray} name="%" />
            <Button color={orange} name="+" />
          </li>
          <li className="row-2">
            <Button color={lightGray} name="7" />
            <Button color={lightGray} name="8" />
            <Button color={lightGray} name="9" />
            <Button color={orange} name="x" />
          </li>
          <li className="row-3">
            <Button color={lightGray} name="4" />
            <Button color={lightGray} name="5" />
            <Button color={lightGray} name="6" />
            <Button color={orange} name="-" />
          </li>
          <li className="row-4">
            <Button color={lightGray} name="1" />
            <Button color={lightGray} name="2" />
            <Button color={lightGray} name="3" />
            <Button color={orange} name="4" />
          </li>
          <li className="row-5">
            <Button color={lightGray} name="0" />
            <Button color={lightGray} name="." />
            <Button color={orange} name="=" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Calculator;

// this.state = {
//  darkGray: '#858694',
//  lightGray: 'e0e0e0',
//  orange: '#f5913e',
// };
