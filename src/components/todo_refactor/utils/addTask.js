export const addTask = (userInput, setUserInput, lists,setLists) => {
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
