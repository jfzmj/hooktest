import React, { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(count1 => 1);
  return (
    <div>
      {count}
      <h1>{count1}</h1>
      <button onClick={() => setCount(x => x + 1)}>+1</button>
      <p>
        <button onClick={() => setCount1(x => x + 1)}>+1</button>
      </p>
    </div>
  );
};
