import { useCounter } from "./store.ts";
const Counter = () => {
  const { count, increament, decrement, reset, toggleTheme, theme } =
    useCounter();
  return (
    <div>
      <p>{count}</p>
      <button onClick={increament}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={toggleTheme}>{theme}</button>
    </div>
  );
};

export default Counter;
