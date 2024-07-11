"use client";
import AnimatedNumber from "numbers-animation-react";
export default function Statics({ description, unit, value }) {
  return (
    <div className="text-5xl font-semibold flex flex-col justify-center gap-2 items-center  text-center ">
      <p className="text-3xl">{description} </p>
      <div>
        <span className="text-5xl font-semibold">
          <AnimatedNumber
            value={value}
            startValue={0}
            duration={2000}
            generateCommas={true}
            generateDecimals={true}
          />
        </span>
        <span>{unit}</span>
      </div>
    </div>
  );
}
