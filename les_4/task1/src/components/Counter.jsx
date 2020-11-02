// import React, { useState } from "react";
import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from '../counter.actions';


const Counter = ({ counter, incr, decr, res }) => {

  // const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <button className="counter__button"
        onClick={decr}
      >
        -
    </button>
      <span className="counter__value" onClick={res}>
        {counter}
      </span>
      <button className="counter__button"
        onClick={incr}
      >
        +
    </button>
    </div>
  )
}

const mapState = state => {
  return {
    counter: state
  }
}

const mapDispatch = dispatch => {
  return {
    incr: () => dispatch(increment()),
    decr: () => dispatch(decrement()),
    res: () => dispatch(reset()),
  }
}


const connector = connect(mapState, mapDispatch);

export default connector(Counter);