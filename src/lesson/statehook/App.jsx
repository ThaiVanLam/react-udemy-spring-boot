import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => incrementCount()}>increment</button>
      <button onClick={() => decrementCount()}>decrement</button>
    </div>
  );
}

export default App;
