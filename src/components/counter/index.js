import React, { useEffect } from "react";
const StyledButton = ({ children, onClick }) => {
  return (
    <button className="border p-2 bg-blue-300 rounded-md" onClick={onClick}>
      {children}
    </button>
  );
};

const Counter = () => {
  const [counter, setCounter] = React.useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleIncrement();
    }, 1000);
    return () => clearTimeout(timeout);
  });
  const handleClear = () => {
    setCounter(0);
  };
  const handleDecrement = () => {
    // setCounter(counter - 1);
    setCounter((count) => count - 1);
  };
  const handleIncrement = () => {
    // setCounter(counter + 1);
    setCounter((count) => count + 1);
  };
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-3xl">Current Number: {counter}</span>
      <div className="flex gap-2 ">
        <StyledButton onClick={handleIncrement}>Increment</StyledButton>
        <StyledButton onClick={handleDecrement}>Decrement</StyledButton>
        <StyledButton onClick={handleClear}>Clear</StyledButton>
      </div>
    </div>
  );
};

export default Counter;
