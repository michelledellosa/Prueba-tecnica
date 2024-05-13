import React from "react";
import logo from "../assets/images/img1.png";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="flex justify-center p-2">
      <img src={logo} height={40} alt="Logo" className="rounded-lg" />
    </div>
  );
};

export default Header;
