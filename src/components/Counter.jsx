import {  useState } from "react";
import useCustomEffect from "../hooks/use-custom-effect";

function Counter() {
  const [count, setCount] = useState(0);

  

  useCustomEffect(() => {
    console.log("Effect Triggered", count);
  }, [count]);

  console.log("rendered");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default Counter;
