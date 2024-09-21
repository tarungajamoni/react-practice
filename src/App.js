import React, { useState } from "react";
import Accordion from "./components/accordion";
import RandomColor from "./components/random_color";
import ToDo from "./components/todo/ToDo";
import StarRating from "./components/star_rating";
import ToDoList from "./components/todo_refactor/comp/ToDoList";
const componentsMap = {
  accordion: { component: Accordion, label: "Accordion" },
  random: { component: RandomColor, label: "Random Color Generator" },
  todo: { component: ToDo, label: "ToDo App" },
  todoRefactored: { component: ToDoList, label: "ToDo_Refactored" },
  star: { component: StarRating, label: "Star Rating" },
};
const App = () => {
  const [SApp, setApp] = useState("");

  const SelectedComponent = SApp ? componentsMap[SApp].component : null;
  console.log(SelectedComponent, "SelectedComponent");
  return (
    <>
      <div className="space-x-5">
        {SApp === "" ? (
          <>
            <div className="m-5">Choose App</div>
            {Object.keys(componentsMap).map((key) => (
              <button
                className="bg-blue-300 p-2 rounded-lg"
                key={key}
                onClick={() => setApp(key)}>
                {componentsMap[key].label}
              </button>
            ))}
          </>
        ) : (
          <button
            className="bg-blue-300 px-4 py-2 rounded-lg m-5"
            onClick={() => setApp("")}>
            Back
          </button>
        )}
      </div>
      {SelectedComponent && <SelectedComponent />}
    </>
  );
};

export default App;
