import React, { useEffect, useState } from "react";

const ToDo = () => {
  const [userInput, setUserInput] = useState("");
  const [lists, setLists] = useState(() => {
    const savedTasks = localStorage.getItem("lists");
    return savedTasks ? JSON.parse(savedTasks) : [];
    // if (savedTasks) return JSON.parse(savedTasks);
    // else return [];
  });

  const [editIndex, setEditIndex] = useState(null); // To track which task is being edited
  const [editInput, setEditInput] = useState("");

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const addTask = () => {
    if (userInput !== "") {
      const userInputText = {
        id: Date.now(),
        value: userInput,
        completed: false,
      };
      //   const listValue = [...lists];
      //   listValue.push(userInputText);
      setUserInput("");
      setLists([...lists, userInputText]);
    }
  };
  const deleteTask = (key) => {
    // const listValue = [...lists];
    // const updateList = listValue.filter((item) => item.id !== key);
    setLists(lists.filter((item) => item.id !== key));
  };
  const enableEditTask = (index, currentValue) => {
    setEditIndex(index);
    setEditInput(currentValue);
  };
  const handleEditChange = (index) => {
    setEditInput(index);
  };
  const saveEditTask = (key) => {
    if (editInput.trim() !== "") {
      const updatedTasks = [...lists];
      updatedTasks[key].value = editInput;
      setLists(updatedTasks);
      setEditIndex(null);
      setEditInput("");
    }
  };
  const cancelEditTask = () => {
    setEditInput("");
    setEditIndex(null);
  };
  //   const editTask = (key) => {
  //     const listValue = [...lists];
  //     const editedTask = prompt("Edit this task");
  //     if (editedTask !== null && editedTask.trim() !== "") {
  //       let updatedTasks = [...listValue];
  //       updatedTasks[key].value = editedTask;
  //       setUserInput(listValue[key].value);
  //       setLists(listValue);
  //     }
  //   };
  const completeTask = (key) => {
    const updatedLists = [...lists];
    updatedLists[key].completed = !updatedLists[key].completed;
    setLists(updatedLists);
  };
  //   const tasks = [
  //     {
  //       id: 1,
  //       text: "Task1",
  //       completed: false,
  //     },
  //     {
  //       id: 2,
  //       text: "Task2",
  //       completed: false,
  //     },
  //     {
  //       id: 3,
  //       text: "Task3",
  //       completed: false,
  //     },
  //   ];
  return (
    <div className="flex flex-col mx-auto w-1/3 m-2 gap-5">
      <div className="text-3xl">
        Tasks Completed {lists.filter((item) => item.completed === true).length}{" "}
        / {lists.length}
      </div>
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
      <div>
        {lists.map((task, index) => (
          <div
            className="bg-gray-400 px-4 py-2 justify-between flex border border-gray-500"
            key={index}>
            <div className="flex gap-2 text-lg">
              <button
                className={` rounded-full p-4 my-auto ${
                  task.completed === true ? "bg-green-500" : "bg-white"
                }`}
                onClick={() => completeTask(index)}></button>
              {editIndex === index ? (
                <input
                  type="text"
                  value={editInput}
                  onChange={(e) => handleEditChange(e.target.value)}
                />
              ) : (
                <span>{task.value}</span>
              )}
            </div>
            <div className="space-x-4">
              {editIndex === index ? (
                <>
                  <button
                    className="bg-white rounded-md px-2 py-1"
                    onClick={cancelEditTask}>
                    Cancel
                  </button>
                  <button
                    className="bg-white rounded-md px-2 py-1"
                    onClick={() => saveEditTask(index)}>
                    Save
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-white rounded-md px-2 py-1"
                    onClick={() => deleteTask(task.id)}>
                    Delete
                  </button>
                  <button
                    className="bg-white rounded-md px-2 py-1"
                    onClick={() => enableEditTask(index, task.value)}>
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
