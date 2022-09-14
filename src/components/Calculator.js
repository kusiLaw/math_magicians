import React from 'react';
import TextInput from './inputs';
import Button from './button';
import PropTypes from 'prop-types'

/* Disable Slint Rules */
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkGray: 'darkGray',
      lightGray: 'lightGray',
      orange: 'orange',
      items: [
        ['AC', '+/-', '%', '+'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '='],
      ],
    };
  }

  render() {
    const {
      darkGray, lightGray, orange, items,
    } = this.state;

    const count = 0;
    return (

      <div className="calculator">
        <TextInput color={darkGray} />
        <ul className="list">
          { items.map((item) => {
            { console.log(item); }
            if (item.length === 4) {
              return (
                <li className="row">
                  <Button key={item[0]} color={lightGray} name={item[0]} />
                  <Button key={item[1]} color={lightGray} name={item[1]} />
                  <Button key={item[2]} color={lightGray} name={item[2]} />
                  <Button key={item[3]} color={orange} name={item[3]} />
                </li>
              );
            }
            return (
              <li className="row last">
                <Button key={item[0]} color={lightGray.concat('2')} name={item[0]} />
                <Button key={item[1]} color={lightGray} name={item[1]} />
                <Button key={item[2]} color={orange} name={item[2]} />
              </li>
            );
          })}

        </ul>
      </div>
    );
  }
}

// Calculator.prototype ={
//  items
// }

export default Calculator;

// this.state = {
//  darkGray: '#858694',
//  lightGray: 'e0e0e0',
//  orange: '#f5913e',
// };
