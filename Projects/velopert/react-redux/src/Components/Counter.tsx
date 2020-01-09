import React from "react";

export interface CounterParam {
  number?: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
}

function Counter(labell: CounterParam) {
  const { number, onIncrease, onDecrease } = labell;
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
