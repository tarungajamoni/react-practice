import React, { useState } from "react";
const RandomColor = () => {
  const [color, setColor] = useState("#fff");
  const [type, setType] = useState("HEX");
  const genNum = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleHex = () => {
    setType("HEX");
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[genNum(hex.length)];
    }
    setColor(hexColor);
  };
  const handleRgb = () => {
    setType("RGB");
    const r = genNum(256);
    const g = genNum(256);
    const b = genNum(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };
  return (
    <div
      className={`flex flex-col h-[100vh] w-[100vw]`}
      style={{ background: color }}>
      <div className="flex">
        <button
          className="mx-auto p-2 bg-gray-200 my-4 rounded-lg"
          onClick={handleRgb}>
          Generate RGB
        </button>
        <button
          className="mx-auto p-2 bg-gray-200 my-4 rounded-lg"
          onClick={handleHex}>
          Generate HEX
        </button>
        <button
          className="mx-auto p-2 bg-gray-200 my-4 rounded-lg"
          onClick={type === "HEX" ? handleHex : handleRgb}>
          Generate Random
        </button>
      </div>
      <div className="text-7xl text-orange-500 mx-auto mt-20">
        {type} {}
      </div>
    </div>
  );
};

export default RandomColor;
