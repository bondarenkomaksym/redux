// import React from "react";
// import { connect } from "react-redux";
// import { increment, decrement, reset } from '../counter.actions';

// const Counter = ({ counter, incr, decr, res }) => {

//   return (
//     <div className="counter">
//       <button className="counter__button"
//         onClick={decr}
//       >
//         -
//     </button>
//       <span className="counter__value" onClick={res}>
//         {counter}
//       </span>
//       <button className="counter__button"
//         onClick={incr}
//       >
//         +
//     </button>
//     </div>
//   )
// }

// const mapState = state => {
//   return {
//     counter: state
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     incr: () => dispatch(increment()),
//     decr: () => dispatch(decrement()),
//     res: () => dispatch(reset()),
//   }
// }

// const connector = connect(mapState, mapDispatch);

// export default connector(Counter);

//более короткая и удобная запись:

import React from "react";
import { connect } from "react-redux";
import * as counterActions from '../counter.actions';

const Counter = ({ counter, increment, decrement, reset }) => {

  return (
    <div className="counter">
      <button className="counter__button"
        onClick={decrement}
      >
        -
    </button>
      <span className="counter__value" onClick={reset}>
        {counter}
      </span>
      <button className="counter__button"
        onClick={increment}
      >
        +
    </button>
    </div>
  )
}

const mapState = state => {
  return {
    counter: state,
  }
}

const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,

}

const connector = connect(mapState, mapDispatch);

export default connector(Counter);