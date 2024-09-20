import React, { useState } from "react";
import Accordion from "./components/accordion";
import RandomColor from "./components/random_color";
import ToDo from "./components/todo/ToDo";
import StarRating from "./components/star_rating";

const App = () => {
  const [SApp, setApp] = useState("");
  return (
    <>
      <div className="space-x-5">
        <div className="m-5">Choose App</div>
        {SApp === "" ? (
          <>
            <button
              className="bg-blue-300 p-2 rounded-lg"
              onClick={() => setApp("accordion")}>
              Accordion
            </button>
            <button
              className="bg-blue-300 p-2 rounded-lg"
              onClick={() => setApp("random")}>
              Random Color Generator
            </button>
            <button
              className="bg-blue-300 p-2 rounded-lg"
              onClick={() => setApp("todo")}>
              ToDo
            </button>
            <button
              className="bg-blue-300 p-2 rounded-lg"
              onClick={() => setApp("star")}>
              Star Rating
            </button>
          </>
        ) : (
          <button
            className="bg-blue-300 px-4 py-2 rounded-lg"
            onClick={() => setApp("")}>
            Back
          </button>
        )}
      </div>
      {SApp === "accordion" ? (
        <Accordion />
      ) : SApp === "random" ? (
        <RandomColor />
      ) : SApp === "todo" ? (
        <ToDo />
      ) : SApp === "star" ? (
        <StarRating />
      ) : null}
    </>
  );
};

export default App;
