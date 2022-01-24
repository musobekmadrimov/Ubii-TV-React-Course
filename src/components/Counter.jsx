import React, { useState } from "react";
import MyButton from "./UI/Button/MyButton";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="functional-component-counter">
      <h1>Functional Component Counter</h1>
      <h2>{counter}</h2>
      <MyButton onClick={increment}>Increment</MyButton>
      <MyButton danger onClick={decrement}>
        Decrement
      </MyButton>
    </div>
  );
}
