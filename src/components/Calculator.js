import React from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.btnClick = this.btnClick.bind(this);
  }

  btnClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="container">
        <div className="initial-zero">
          <span>{next || total || 0}</span>
        </div>

        <div className="btnContainer">
          <button type="button" className="AC" onClick={this.btnClick}>AC</button>
          <button type="button" className="plus-minus" onClick={this.btnClick}>+/-</button>
          <button type="button" className="percentage" onClick={this.btnClick}>%</button>
          <button type="button" className="divide active" onClick={this.btnClick}><span>&#247;</span></button>
          <button type="button" className="seven" onClick={this.btnClick}>7</button>
          <button type="button" className="eight" onClick={this.btnClick}>8</button>
          <button type="button" className="nine" onClick={this.btnClick}>9</button>
          <button type="button" className="multi active" onClick={this.btnClick}>x</button>
          <button type="button" className="four" onClick={this.btnClick}>4</button>
          <button type="button" className="five" onClick={this.btnClick}>5</button>
          <button type="button" className="six" onClick={this.btnClick}>6</button>
          <button type="button" className="minus active" onClick={this.btnClick}>-</button>
          <button type="button" className="one" onClick={this.btnClick}>1</button>
          <button type="button" className="two" onClick={this.btnClick}>2</button>
          <button type="button" className="three" onClick={this.btnClick}>3</button>
          <button type="button" className="plus active" onClick={this.btnClick}>+</button>
          <button type="button" className="zero" onClick={this.btnClick}>0</button>
          <button type="button" className="dot" onClick={this.btnClick}>.</button>
          <button type="button" className="equal active" onClick={this.btnClick}>=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;
