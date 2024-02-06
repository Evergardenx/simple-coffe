import React from "react";

function CoffeeBtns({ onClick, category, text, children }) {
  return (
    <button
      className={`rounded p-3 text-sm font-bold capitalize text-white ${
        category === text ? "bg-[#6F757C]" : null
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CoffeeBtns;
