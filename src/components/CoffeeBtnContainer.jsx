import React from "react";
import CoffeeBtns from "./CoffeeBtns";

function CoffeeBtnContainer({ category, handleCategory }) {
  return (
    <div className="mt-8 flex justify-center gap-4">
      <CoffeeBtns
        category={category}
        text={"all"}
        onClick={() => handleCategory("all")}
      >
        All products
      </CoffeeBtns>
      <CoffeeBtns
        category={category}
        text={"available"}
        onClick={() => handleCategory("available")}
      >
        available
      </CoffeeBtns>
    </div>
  );
}

export default CoffeeBtnContainer;
