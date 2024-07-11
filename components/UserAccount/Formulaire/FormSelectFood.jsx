import React from "react";
import { LinkImg } from "@/data/data";
import FoodCard from "../Cards/FoodCard";

export default function FormSelectFood() {
  return (
    <form
      action="/user"
      className="flex  flex-col  gap-5 items-center text-2xl"
    >
      <label>Choose From Our Collection Here !</label>
      <div className=" grid xl:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
        {LinkImg.map((items) => (
          <div key={items.link}>
            <FoodCard
              link={items.link}
              cal={items.calories}
              prot={items.protein}
              carb={items.carbs}
              fat={items.fat}
            />
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="bg-black border border-black lg:w-[200px] text-white p-4 rounded-lg text-2xl hover:bg-black/50 transition-all ease-in-out"
      >
        Submit
      </button>
    </form>
  );
}
