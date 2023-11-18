import { useState } from "react";

export function useCounter(initialValue = 10) {
  const [counter, setCounter] = useState(initialValue);
  const increment = (value = 1) => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(initialValue);
  };
  const decrement = (value = 1) => {
    if (counter == 0) return;
    setCounter(counter - 1);
  };
  return {
    counter,
    increment,
    decrement,
    reset,
  };
}
