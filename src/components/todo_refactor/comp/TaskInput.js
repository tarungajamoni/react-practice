import React from "react";

const TaskInput = ({ userInput, setUserInput, addTask }) => {
  return (
    <>
      <input
        className="h-10 pl-3 border border-black"
        placeholder="Enter Task"
        value={userInput}
        onChange={(item) => setUserInput(item.target.value)}
      />
      <button
        className="text-white bg-black w-fit rounded-md px-4 py-2"
        onClick={addTask}>
        Add
      </button>
    </>
  );
};

export default TaskInput;
