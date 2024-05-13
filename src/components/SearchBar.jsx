import React from "react";

const SearchBar = ({ onChange }) => {
  return (
    <div className="flex justify-start lg:justify-end items-center h-full mr-4"> 
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full lg:w-4/5 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        onChange={onChange}
        style={{ verticalAlign: "middle" }} 
      />
    </div>
  );
};

export default SearchBar;
