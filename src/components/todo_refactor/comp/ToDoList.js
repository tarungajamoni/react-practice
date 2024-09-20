import React, { useEffect, useState } from "react";
import { addTask } from "../utils/addTask";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import {
  cancelEditTask,
  enableEditTask,
  handleEditChange,
  saveEditTask,
} from "../utils/editTask";
import { completeTask } from "../utils/completeTask";
import { deleteTask } from "../utils/deleteTask";

const ToDoList = () => {
  const [userInput, setUserInput] = useState("");
  const [lists, setLists] = useState(() => {
    const savedTasks = localStorage.getItem("tasklists");
    return savedTasks ? JSON.parse(savedTasks) : [];
    // if (savedTasks) return JSON.parse(savedTasks);
    // else return [];
  });

  const [editIndex, setEditIndex] = useState(null); // To track which task is being edited
  const [editInput, setEditInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasklists", JSON.stringify(lists));
  }, [lists]);

  return (
    <div className="flex flex-col mx-auto w-1/3 m-2 gap-5">
      <div className="text-3xl">
        Tasks Completed {lists.filter((item) => item.completed).length} /{" "}
        {lists.length}
      </div>
      <TaskInput
        userInput={userInput}
        setUserInput={setUserInput}
        addTask={() => addTask(userInput, setUserInput, lists, setLists)}
      />
      <div>
        {lists.map((task, index) => (
          <TaskItem
            key={task.id}
            task={task}
            index={index}
            editIndex={editIndex}
            editInput={editInput}
            enableEditTask={() =>
              enableEditTask(index, task.value, setEditIndex, setEditInput)
            }
            handleEditChange={(value) => handleEditChange(value, setEditInput)}
            saveEditTask={() =>
              saveEditTask(
                index,
                editInput,
                lists,
                setLists,
                setEditIndex,
                setEditInput
              )
            }
            cancelEditTask={() => cancelEditTask(setEditIndex, setEditInput)}
            completeTask={() => completeTask(index, lists, setLists)}
            deleteTask={() => deleteTask(task.id, lists, setLists)}
          />
        ))}
      </div>
    </div>
  );
};
export default ToDoList;
