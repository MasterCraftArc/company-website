import React from "react";
import ReactRotatingText from "react-rotating-text";
import { motion } from "framer-motion";
import { TITLE_TEXT } from "./homeStyles";

const sentenceAnim = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.1,
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
  " an Innovator",
  " a Manager",
  " an Operator",
  " a Founder",
];

const HomeHero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center">
    <div className="mb-24">
          <h1 className={`${TITLE_TEXT} text-white lg:ml-24 md:ml-16 sm:ml-8 ml-4`}>
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
                delay: 2,
              }}
            >
              <ReactRotatingText items={tagLineItems} typingInterval="30"/>
            </motion.span>
          </motion.h1>
    </div>
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-thin sm:text-left lg:ml-24 md:ml-16 sm:ml-8  text-center">
        <p>Maintaining competitive advantage in today's constantly evolving software ecosystem requires more than a unicorn...a hero.</p> 
        <p>We grow heroes across sectors to continuously deliver software without compromising security.</p>
      </h3>
      <a aria-hidden="true" href="#trainForBattle" className={`${TITLE_TEXT} lg:ml-24 md:ml-16 sm:ml-8 ml-4 mt-8 text-white hover:text-blue-900 cursor-pointer`}><i className="bi bi-arrow-down-circle-fill"></i></a>
    </section>
  );
};

export default HomeHero;
