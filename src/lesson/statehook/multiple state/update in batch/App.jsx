import React, { use, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const incrementCount = () => {
    setCount(count + step);
  };
  const incrementBy2 = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  const decrementCount = () => {
    setCount(count - step);
  };
  return (
    <div className="app-container">
      <h1>Counter value: {count}</h1>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(parseInt(e.target.value))}
      ></input>
      <button onClick={() => incrementCount()}>increment</button>
      <button onClick={() => decrementCount()}>decrement</button>
      <button onClick={() => incrementBy2()}>increment by 2</button>
    </div>
  );
}

export default App;
