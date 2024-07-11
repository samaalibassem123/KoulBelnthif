"use client";
import React, { useState } from "react";
import AnimatedNumber from "numbers-animation-react";
import { motion } from "framer-motion";

const AnimateCards = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 1,
    },
  },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function FoodCard({ link, cal, carb, prot, fat }) {
  const [selected, setSelected] = useState(false);
  return (
    <div className=" relative h-fit w-fit bg-white rounded-lg p-2 flex flex-col items-center gap-3 text-sm cursor-pointer  border-[2px] border-black  ">
      <motion.div
        variants={AnimateCards}
        initial="hidden"
        animate="visible"
        className=" relative h-full w-full bg-white rounded-lg p-5 flex flex-col items-center gap-3 text-sm cursor-pointer  border-[2px] border-black  "
        whileTap={{
          scale: 0.99,
        }}
        onClick={() => setSelected(!selected)}
      >
        {selected && (
          <img
            src="/check.png"
            alt="Checked"
            className="absolute size-8 top-2 left-2"
          />
        )}
        <span className="text-sm p-1">For 100g</span>
        <img src={link} alt={link} className="size-28 select-none" />
        <motion.span variants={item} className=" text-green-800 font-semibold">
          Calories:{" "}
          <AnimatedNumber
            value={cal}
            startValue={0}
            duration={6000}
            generateCommas={true}
            generateDecimals={false}
          />{" "}
          Kcal
        </motion.span>
        <motion.span variants={item} className=" text-red-500 font-semibold">
          Proteins:{" "}
          <AnimatedNumber
            value={prot}
            startValue={0}
            duration={6000}
            generateCommas={true}
            generateDecimals={false}
          />{" "}
          g
        </motion.span>
        <motion.span variants={item} className=" text-blue-300 font-semibold">
          Carbs:{" "}
          <AnimatedNumber
            value={carb}
            startValue={0}
            duration={6000}
            generateCommas={true}
            generateDecimals={true}
          />{" "}
          g
        </motion.span>{" "}
        <motion.span variants={item} className=" text-gray-500 font-semibold">
          Fat:{" "}
          <AnimatedNumber
            value={fat}
            startValue={0}
            duration={6000}
            generateCommas={true}
            generateDecimals={true}
          />{" "}
          g
        </motion.span>
      </motion.div>
      <input
        type="number"
        className=" w-auto border-none text-center cursor-pointer rounded-lg "
        placeholder="1 piece Click to Modify"
      />
    </div>
  );
}
