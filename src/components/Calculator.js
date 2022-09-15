import React from 'react';
import TextInput from './inputs';
import Button from './button';
import calculate from '../logic/calculator';

/* Disable Slint Rules */
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: 0,
    };
    //   lightGray: 'lightGray',
    //   orange: 'orange',
    //   items: [
    //     ['AC', '+/-', '%', '+'],
    //     ['7', '8', '9', 'x'],
    //     ['4', '5', '6', '-'],
    //     ['1', '2', '3', '+'],
    //     ['0', '.', '='],
    //   ],
    //   result: {
    //     total: null,
    //     next: null,
    //     operation: null,
    //   },
    // };
  }

  handleButtonClicked = (event) => {
    // { console.log(event.target.innerText); }
    const newCal = calculate(this.state, event.target.innerText);
    // { console.log(newCal); }
    this.setState(newCal);
    // { console.log(this.state); }
  }

  render() {
    return (
      <div className="calculator">
        <TextInput color="darkGray" result={this.state} />
        <ul className="list">
          <li key={0} className="row">
            <Button key={1} color="lightGray" name="AC" itemClicked={this.handleButtonClicked} />
            <Button key={2} color="lightGray" name="+/-" itemClicked={this.handleButtonClicked} />
            <Button key={3} color="lightGray" name="%" itemClicked={this.handleButtonClicked} />
            <Button key={4} color="orange" name="+" itemClicked={this.handleButtonClicked} />
          </li>
          <li key={2} className="row">
            <Button key={21} color="lightGray" name="7" itemClicked={this.handleButtonClicked} />
            <Button key={22} color="lightGray" name="8" itemClicked={this.handleButtonClicked} />
            <Button key={23} color="lightGray" name="9" itemClicked={this.handleButtonClicked} />
            <Button key={24} color="orange" name="x" itemClicked={this.handleButtonClicked} />
          </li>
          <li key={3} className="row">
            <Button key={31} color="lightGray" name="4" itemClicked={this.handleButtonClicked} />
            <Button key={32} color="lightGray" name="5" itemClicked={this.handleButtonClicked} />
            <Button key={33} color="lightGray" name="6" itemClicked={this.handleButtonClicked} />
            <Button key={34} color="orange" name="-" itemClicked={this.handleButtonClicked} />
          </li>
          <li key={4} className="row">
            <Button key={41} color="lightGray" name="1" itemClicked={this.handleButtonClicked} />
            <Button key={42} color="lightGray" name="2" itemClicked={this.handleButtonClicked} />
            <Button key={43} color="lightGray" name="3" itemClicked={this.handleButtonClicked} />
            <Button key={44} color="orange" name="+" itemClicked={this.handleButtonClicked} />
          </li>
          <li key={5} className="row last">
            <Button key={51} color="lightGray2" name="0" itemClicked={this.handleButtonClicked} />
            <Button key={52} color="lightGray" name="." itemClicked={this.handleButtonClicked} />
            <Button key={53} color="orange" name="=" itemClicked={this.handleButtonClicked} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Calculator;
