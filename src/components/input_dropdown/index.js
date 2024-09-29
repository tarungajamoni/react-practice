import React, { useEffect, useState } from "react";

const Dropdown = () => {
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState(false);
  const [data, setData] = useState([]);
  const list = ["1data", "2data", "3data", "4data"];
  useEffect(() => {
    data.filter((item) => item.includes(searchText));
    searching();
  }, [searchText]);
  const searching = () => {
    const result = list.filter((item) => item.includes(searchText));
    setData(result);
  };
  return (
    <div className="ml-5">
      <input
        type="text"
        placeholder="select"
        value={searchText}
        onClick={() => setSearch(!search)}
        onChange={(e) => setSearchText(e.target.value)}
        className="pl-3"
      />
      <button
        className="px-2"
        onClick={() => {
          setSearchText("");
          setSearch(false);
        }}>
        clear
      </button>
      {search && (
        <>
          {data.map((item, index) => (
            <button
              key={index}
              className="flex flex-col"
              onClick={() => {
                setSearchText(item);
                setSearch(false);
              }}>
              {item}
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default Dropdown;
