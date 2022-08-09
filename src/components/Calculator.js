import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="initial-zero">
          <span>0</span>
        </div>

        <div className="btnContainer">
          <button type="button" className="AC">AC</button>
          <button type="button" className="plus-minus">+/-</button>
          <button type="button" className="percentage">%</button>
          <button type="button" className="divide active"><span>&#247;</span></button>
          <button type="button" className="seven">7</button>
          <button type="button" className="eight">8</button>
          <button type="button" className="nine">9</button>
          <button type="button" className="multi active">x</button>
          <button type="button" className="four">4</button>
          <button type="button" className="five">5</button>
          <button type="button" className="six">6</button>
          <button type="button" className="minus active">-</button>
          <button type="button" className="one">1</button>
          <button type="button" className="two">2</button>
          <button type="button" className="three">3</button>
          <button type="button" className="plus active">+</button>
          <button type="button" className="zero">0</button>
          <button type="button" className="dot">.</button>
          <button type="button" className="equal active">=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;
