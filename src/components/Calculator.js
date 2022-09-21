import React, { useState } from 'react';
import TextInput from './inputs';
import Button from './button';
import calculate from '../logic/calculator';

const Calculator = () => {
  const [stateValue, stateFunc] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClicked = (event) => {
    const newCal = calculate(stateValue, event.target.innerText);

    stateFunc(newCal); // to set the state
  };

  return (
    <div className="calculator-container d-flex">
      <h2>Let do some math</h2>
      <div className="calculator d-flex">
        <TextInput color="darkGray" result={stateValue} />
        <ul className="list">
          <li key={0} className="row">
            <Button key={1} color="lightGray" name="AC" itemClicked={handleButtonClicked} />
            <Button key={2} color="lightGray" name="+/-" itemClicked={handleButtonClicked} />
            <Button key={3} color="lightGray" name="%" itemClicked={handleButtonClicked} />
            <Button key={4} color="orange" name="+" itemClicked={handleButtonClicked} />
          </li>
          <li key={2} className="row">
            <Button key={21} color="lightGray" name="7" itemClicked={handleButtonClicked} />
            <Button key={22} color="lightGray" name="8" itemClicked={handleButtonClicked} />
            <Button key={23} color="lightGray" name="9" itemClicked={handleButtonClicked} />
            <Button key={24} color="orange" name="x" itemClicked={handleButtonClicked} />
          </li>
          <li key={3} className="row">
            <Button key={31} color="lightGray" name="4" itemClicked={handleButtonClicked} />
            <Button key={32} color="lightGray" name="5" itemClicked={handleButtonClicked} />
            <Button key={33} color="lightGray" name="6" itemClicked={handleButtonClicked} />
            <Button key={34} color="orange" name="-" itemClicked={handleButtonClicked} />
          </li>
          <li key={4} className="row">
            <Button key={41} color="lightGray" name="1" itemClicked={handleButtonClicked} />
            <Button key={42} color="lightGray" name="2" itemClicked={handleButtonClicked} />
            <Button key={43} color="lightGray" name="3" itemClicked={handleButtonClicked} />
            <Button key={44} color="orange" name="+" itemClicked={handleButtonClicked} />
          </li>
          <li key={5} className="row last">
            <Button key={51} color="lightGray2" name="0" itemClicked={handleButtonClicked} />
            <Button key={52} color="lightGray" name="." itemClicked={handleButtonClicked} />
            <Button key={53} color="orange" name="=" itemClicked={handleButtonClicked} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
