export const deleteTask = (key, lists, setLists) => {
  // const listValue = [...lists];
  // const updateList = listValue.filter((item) => item.id !== key);
  setLists(lists.filter((item) => item.id !== key));
};
