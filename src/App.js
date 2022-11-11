import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  add,
  subtract,
  multiply,
  divide,
} from "./Features/CounterSlice";
import { Button } from "@progress/kendo-react-buttons";

const App = () => {
  const [num, setNum] = useState(0);
  const answer = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <center>
      <h1>Calculator App</h1>
      <div>
        <h2>OUTPUT : {answer}</h2>
        <Button themeColor={"primary"} onClick={() => dispatch(increment())}>
          INCREMENT
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button onClick={() => dispatch(decrement())}>DECREMENT</Button>
        <label>
          <b>ENTER A NUMBER:</b>
        </label>
        <input type="number" onChange={(e) => setNum(e.target.value)} />
        <br />
        <Button onClick={() => dispatch(add(Number(num)))}>ADD</Button>{" "}
        &nbsp;&nbsp;&nbsp;
        <Button onClick={() => dispatch(subtract(Number(num)))}>
          SUBTRACT
        </Button>{" "}
        &nbsp;&nbsp;&nbsp;
        <Button onClick={() => dispatch(multiply(Number(num)))}>
          MULTIPLY
        </Button>{" "}
        &nbsp;&nbsp;&nbsp;
        <Button onClick={() => dispatch(divide(Number(num)))}>DIVIDE</Button>
      </div>
    </center>
  );
};
export default App;
