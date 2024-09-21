import React, { useEffect, useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const list = ["first", "second", "third"];
  useEffect(() => {
    searching();
  }, [searchText]);
  const searching = () => {
    const result = list.filter((e) =>
      e.toLowerCase().includes(searchText.toLowerCase())
    );
    setData(result);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(item) => setSearchText(item.target.value)}
      />
      <ul className="m-2">
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
