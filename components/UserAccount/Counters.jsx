"use client";
import React from "react";
import AnimatedNumber from "numbers-animation-react";
import { delay, motion } from "framer-motion";
const animateCard = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
export default function Counters({ value, text, unit, color }) {
  return (
    <motion.div
      variants={animateCard}
      initial="hidden"
      animate="visible"
      className="flex flex-col  items-center justify-center gap-5  p-10 pt-0 font-semibold text-center  rounded-xl h-[250px]"
    >
      <motion.p variants={animateCard} className="text-5xl">
        {text}
      </motion.p>

      <motion.p variants={animateCard} className="text-4xl text-white">
        <AnimatedNumber
          value={value}
          startValue={0}
          duration={5000}
          generateCommas={true}
          generateDecimals={false}
        />{" "}
        {unit}
      </motion.p>
    </motion.div>
  );
}
