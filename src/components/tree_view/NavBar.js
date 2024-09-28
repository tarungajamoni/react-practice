import React from "react";
import Menu from ".";
import data from "./data";

const NavBar = () => {
  return (
    <div className="border border-black h-screen w-2/12">
      <h1>Online Store</h1>
      <Menu data={data} />
    </div>
  );
};

export default NavBar;
