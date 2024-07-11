"use client";
import { SignUpButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Statics from "./Statics";

const AnimateHome = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      spring: "none",
      delayChildren: 0.8,
      staggerChildren: 0.6,
    },
  },
};

export default function Section() {
  const { isSignedIn, user } = useUser();
  return (
    <motion.section
      className="flex justify-around gap-4  w-full lg:flex-row flex-col lg:p-2 p-1"
      variants={AnimateHome}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex flex-col gap-5 p-1" variants={AnimateHome}>
        <motion.p
          variants={AnimateHome}
          className="md:text-7xl text-5xl text-wrap font-semibold md:p-2 p-0 w-fit"
        >
          Change Your life <br /> to the better <br /> Build your <br /> Own
          Diet With{" "}
        </motion.p>
        <motion.p
          variants={AnimateHome}
          className="md:text-9xl  text-6xl md:bg-transparent bg-black p-2   text-white w-fit drop-shadow-2xl "
        >
          KoulBelNthiF
        </motion.p>
        <SignUpButton>
          <motion.button
            variants={AnimateHome}
            className="bg-white font-semibold p-5 text-5xl rounded-xl w-fit hover:bg-slate-300 transition-all"
          >
            {isSignedIn ? (
              <div
                className="flex items-center gap-3"
                onClick={() => redirect("/user/" + user.id)}
              >
                Return To Dashboard
                <FaRegArrowAltCircleRight />
              </div>
            ) : (
              "Sign-up Here !"
            )}
          </motion.button>
        </SignUpButton>
      </motion.div>
      <hr className="lg:hidden p-[0.5px] w-full bg-black border-none outline-none" />

      <div className="flex flex-col lg:gap-10 gap-5 items-center justify-center">
        <Statics
          description="In 2019, diabetes was the direct cause of"
          value="1.5"
          unit="Million"
        />
        <hr className="p-[0.5px] w-full bg-black outline-none border-none" />
        <div>
          <Statics description="Another" value="460000" />
          <p className="text-3xl font-semibold text-center">
            kidney disease deaths were caused by diabetes
          </p>
        </div>
      </div>
    </motion.section>
  );
}
