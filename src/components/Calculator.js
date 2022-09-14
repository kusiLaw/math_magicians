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
    let keys = 0;
    return (

      <div className="calculator">
        <TextInput color={darkGray} />
        <ul className="list">
          { items.map((item) => {
            if (item.length === 4) {
              keys += 1;
              return (
                <li key={keys} className="row">
                  <Button key={keys + 20} color={lightGray} name={item[0]} />
                  <Button key={keys + 30} color={lightGray} name={item[1]} />
                  <Button key={keys + 40} color={lightGray} name={item[2]} />
                  <Button key={keys + 50} color={orange} name={item[3]} />
                </li>
              );
            }
            keys += 1;
            return (
              <li key={keys} className="row last">
                <Button key={keys + 60} color={lightGray.concat('2')} name={item[0]} />
                <Button key={keys + 70} color={lightGray} name={item[1]} />
                <Button key={keys + 80} color={orange} name={item[2]} />
              </li>
            );
          })}

        </ul>
      </div>
    );
  }
}

export default Calculator;
