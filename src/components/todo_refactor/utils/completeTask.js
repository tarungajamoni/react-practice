export const completeTask = (key, lists, setLists) => {
  const updatedLists = [...lists];
  updatedLists[key].completed = !updatedLists[key].completed;
  setLists(updatedLists);
};
