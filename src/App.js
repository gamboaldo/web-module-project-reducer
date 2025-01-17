import React, { useReducer } from "react";

import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

import reducer, { initialState } from "./reducers";

import {
  addOne,
  applyNumber,
  changeOperation,
  clear,
  addToMemory,
  clearMemory,
} from "./actions";

// console.log(reducer);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  // const mathShit = (num) => {
  //   dispatch(applyNumber(num));
  //   console.log(state.total);
  //   console.log(state.operation);
  // };

  const mathStuff = (num) => {
    dispatch(applyNumber(num));
    console.log(state.total);
    // // console.log(value.target.innerText)
    console.log(state.operation);
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                onClick={() => dispatch(addToMemory(state.total))}
                value={"M+"}
              />
              <CalcButton
                onClick={() => mathStuff(state.memory)}
                value={"MR"}
              />
              <CalcButton
                onClick={() => dispatch(clearMemory())}
                value={"MC"}
              />
            </div>

            <div className="row">
              <CalcButton onClick={() => mathStuff(1)} value={1} />
              <CalcButton onClick={() => mathStuff(2)} value={2} />
              <CalcButton onClick={() => mathStuff(3)} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => mathStuff(4)} value={4} />
              <CalcButton onClick={() => mathStuff(5)} value={5} />
              <CalcButton onClick={() => mathStuff(6)} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => mathStuff(7)} value={7} />
              <CalcButton onClick={() => mathStuff(8)} value={8} />
              <CalcButton onClick={() => mathStuff(9)} value={9} />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => dispatch(changeOperation("+"))}
                value={"+"}
              />
              <CalcButton
                onClick={() => dispatch(changeOperation("*"))}
                value={"*"}
              />
              <CalcButton
                onClick={() => dispatch(changeOperation("-"))}
                value={"-"}
              />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => dispatch(clear())} value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
