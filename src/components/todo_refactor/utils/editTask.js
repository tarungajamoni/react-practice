export const enableEditTask = (
  index,
  currentValue,
  setEditIndex,
  setEditInput
) => {
  setEditIndex(index);
  setEditInput(currentValue);
};
export const handleEditChange = (index, setEditInput) => {
  setEditInput(index);
};
export const saveEditTask = (
  key,
  editInput,
  lists,
  setLists,
  setEditIndex,
  setEditInput
) => {
  if (editInput.trim() !== "") {
    const updatedTasks = [...lists];
    updatedTasks[key].value = editInput;
    setLists(updatedTasks);
    setEditIndex(null);
    setEditInput("");
  }
};
export const cancelEditTask = (setEditIndex, setEditInput) => {
  setEditInput("");
  setEditIndex(null);
};
