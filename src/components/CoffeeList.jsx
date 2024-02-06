import React, { useEffect, useState } from "react";
import CoffeeBtnContainer from "./CoffeeBtnContainer";

import CoffeeCard from "./CoffeeCard";

function CoffeeList() {
  const [coffee, setCoffee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [category, setCategory] = useState("all");

  const displayedCoffee =
    category === "all" ? coffee : coffee.filter((cf) => cf.available);

  const handleCategory = (cat) => {
    setCategory(cat);
  };

  useEffect(() => {
    const getCoffee = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json",
        );
        if (!response.ok) {
          console.log(response);
          throw new Error("Cant load coffee data at this time");
        }
        const data = await response.json();
        setCoffee(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getCoffee();
  }, []);

  if (loading) {
    return (
      <div className="mt-5 text-center text-xl font-bold text-white">
        Loading Coffee...
      </div>
    );
  }
  if (error && !loading) {
    return (
      <div className="mt-5 text-center text-xl font-bold text-white">
        {" "}
        Unable to load coffee data at this time. Please try again.
      </div>
    );
  }

  return (
    <div>
      <CoffeeBtnContainer category={category} handleCategory={handleCategory} />
      <div className="mx-auto mt-8 w-full max-w-5xl space-y-9 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3">
        {displayedCoffee.map((cf) => {
          return <CoffeeCard key={cf.id} cf={cf} />;
        })}
      </div>
    </div>
  );
}

export default CoffeeList;
