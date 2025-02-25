import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <p>
        <strong>Count:</strong> {count}
      </p>
      <button className="increment" onClick={increment}>
        Increment
      </button>
      <button className="decrement" onClick={decrement}>
        Decrement
      </button>
    </>
  );
};

export default Counter;
