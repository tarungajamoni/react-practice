import React, { useState } from "react";

const Menu = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="ml-3">
        {data.name}
        {data.type && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-3xl px-2">
            +
          </button>
        )}
      </div>

      {expanded && data.type && (
        <div className="ml-10">
          {data.type.map((i) => (
            <Menu data={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
