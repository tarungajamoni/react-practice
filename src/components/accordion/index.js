import React, { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selectAns, setSelectAns] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const singleSelection = (id) => {
    setSelectAns(id === selectAns ? null : id);
  };
  const multiSelection = (id) => {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(id);
    if (findIndexOfCurrentId === -1) copyMultiple.push(id);
    else copyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(copyMultiple);
  };
  return (
    <div>
      <button
        className={`${
          enableMulti ? "bg-green-400" : "bg-gray-200"
        } ml-10 mt-10`}
        onClick={() => {
          setEnableMulti(!enableMulti);
          // setSelectAns(null)
          // setMultiple([])
        }}>
        Enable Multi-Selection
      </button>
      {data.map((i) => (
        <div className="m-5">
          <li
            key={i.id}
            className="text-purple-600 cursor-pointer "
            onClick={
              enableMulti
                ? () => multiSelection(i.id)
                : () => singleSelection(i.id)
            }>
            {i.question}
          </li>
          {enableMulti
            ? multiple.indexOf(i.id) !== -1 && <div>{i.answer}</div>
            : selectAns === i.id && <div>{i.answer}</div>}
          {/* {(selectAns === i.id || multiple.indexOf(i.id) !== -1) && (
            <div>{i.answer}</div>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
