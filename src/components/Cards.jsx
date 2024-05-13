import React from "react";

const Cards = () => {
  return (
    <div className="flex flex-col items-center p-2">
      <div className="bg-white shadow-md rounded-lg p-6 m-4 w-full max-h-40 overflow-hidden">
        <h2 className="text-base font-bold mb-2">Total de visitantes</h2>
        <p className="text-xl font-bold">300k</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 m-4 w-full max-h-40 overflow-hidden">
        <h2 className="text-base font-bold mb-2">Test</h2>
        <p className="text-xl font-bold">2.5k</p>
      </div>
    </div>
  );
};

export default Cards;
