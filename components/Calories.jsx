"use client";
import React from "react";
import AnimatedNumber from "numbers-animation-react";

export default function Calories() {
  return (
    <div className="flex items-center gap-4 justify-center md:text-2xl text-sm">
      <div className="flex flex-col items-center">
        <p>Calories Goal per Day</p>
        <div className="text-red-700">
          <AnimatedNumber
            value={2750}
            startValue={0}
            duration={5000}
            generateCommas={true}
            generateDecimals={false}
          />
          <span> kcal</span>
        </div>
      </div>
      <div className=" before:content-[''] h-[60px] w-[1px] bg-black" />
      <div className="flex flex-col items-center">
        <p>Calories Achived Today</p>
        <div className=" text-green-800">
          <AnimatedNumber
            value={2750}
            startValue={0}
            duration={5000}
            generateCommas={true}
            generateDecimals={false}
          />
          <span> kcal</span>
        </div>
      </div>
    </div>
  );
}
