import React from "react";

const TaskItem = ({
  task,
  index,
  editIndex,
  editInput,
  enableEditTask,
  handleEditChange,
  saveEditTask,
  cancelEditTask,
  completeTask,
  deleteTask,
}) => {
  return (
    <div className="bg-gray-400 px-4 py-2 justify-between flex border border-gray-500">
      <div className="flex gap-2 text-lg">
        <button
          className={` rounded-full p-4 my-auto ${
            task.completed ? "bg-green-500" : "bg-white"
          }`}
          onClick={completeTask}></button>
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
              onClick={saveEditTask}>
              Save
            </button>
          </>
        ) : (
          <>
            <button
              className="bg-white rounded-md px-2 py-1"
              onClick={deleteTask}>
              Delete
            </button>
            <button
              className="bg-white rounded-md px-2 py-1"
              onClick={enableEditTask}>
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
