import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(-1);
  const handleClick = (index) => {
    setRating(index);
  };
  return (
    <div className="flex justify-center">
      <span className="m-3 text-3xl">Provide Rating:</span>
      {[...Array(10).keys()].map((index) => {
        return (
          <div
            key={index}
            className={`${index <= rating && " text-yellow-400"}`}
            onClick={() => handleClick(index)}>
            <FaStar size={60} />
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
