import React, { useEffect, useState } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

  useEffect(() => {
    console.log("component mounted");
  }, [count]);
  useEffect(() => {
    console.log(`count changes to : ${count},${num}`);
  }, [count, num]);
  return (
    <div>
      <h2>UseEffect Hook</h2>
      <h2>
        count:{count},Num:{num}
      </h2>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setNum(num - 1)}>decrement</button>
    </div>
  );
}
