import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState(0);
  const btnClick = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  return (
    <>
      <div className="container">
        <div>
          <h1>Let&apos;s do some math!</h1>
        </div>
        <div>
          <div className="initial-zero">
            <span>{state.next || state.total || 0}</span>
          </div>

          <div className="btnContainer">
            <button type="button" className="AC" onClick={btnClick}>
              AC
            </button>
            <button type="button" className="plus-minus" onClick={btnClick}>
              +/-
            </button>
            <button type="button" className="percentage" onClick={btnClick}>
              %
            </button>
            <button type="button" className="divide active" onClick={btnClick}>
              <span>&#247;</span>
            </button>
            <button type="button" className="seven" onClick={btnClick}>
              7
            </button>
            <button type="button" className="eight" onClick={btnClick}>
              8
            </button>
            <button type="button" className="nine" onClick={btnClick}>
              9
            </button>
            <button type="button" className="multi active" onClick={btnClick}>
              x
            </button>
            <button type="button" className="four" onClick={btnClick}>
              4
            </button>
            <button type="button" className="five" onClick={btnClick}>
              5
            </button>
            <button type="button" className="six" onClick={btnClick}>
              6
            </button>
            <button type="button" className="minus active" onClick={btnClick}>
              -
            </button>
            <button type="button" className="one" onClick={btnClick}>
              1
            </button>
            <button type="button" className="two" onClick={btnClick}>
              2
            </button>
            <button type="button" className="three" onClick={btnClick}>
              3
            </button>
            <button type="button" className="plus active" onClick={btnClick}>
              +
            </button>
            <button type="button" className="zero" onClick={btnClick}>
              0
            </button>
            <button type="button" className="dot" onClick={btnClick}>
              .
            </button>
            <button type="button" className="equal active" onClick={btnClick}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
