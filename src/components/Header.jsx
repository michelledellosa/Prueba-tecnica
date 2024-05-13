// MyCartList.js
import React from "react";
import logo from "../assets/images/img1.png";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <div className="flex flex-wrap w-full">
    <div className="w-1/3">
      <img src={logo} height={10} alt="Descripción de la imagen"  />
    </div>
    <div className="w-2/3 ">
      <SearchBar />
    </div>
  </div>
  );
};

export default Header;
