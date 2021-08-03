import React from "react";
import ReactRotatingText from "react-rotating-text";
import { motion } from "framer-motion";
import { TITLE_TEXT } from "./homeStyles";

const sentenceAnim = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const tagLine = "That hero is ";
const tagLineItems = [
  " You.",
  " a Program Manager",
  " an Entrepreneur",
  " an Innovator",
  " an Operator",
];

const HomeHero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center ">
      <h1 className={`${TITLE_TEXT} lg:ml-24 md:ml-16 sm:ml-8 ml-4`}>
        The World Needs a Hero...
      </h1>
      <motion.h1
        variants={sentenceAnim}
        initial="hidden"
        animate="visible"
        className={`${TITLE_TEXT} lg:ml-24 md:ml-16 sm:ml-8 ml-4 text-red-500 font-bold`}
      >
        {tagLine.split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.5,
          }}
        >
          <ReactRotatingText items={tagLineItems} />
        </motion.span>
      </motion.h1>
    </section>
  );
};

export default HomeHero;
