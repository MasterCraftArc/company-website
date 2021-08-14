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
    <section className="hero py-12 flex flex-col justify-center relative">
    <div className="mb-24">
          <h1 className={`${TITLE_TEXT} sm:text-7xl xl:text-8xl 2xl:text-9xl text-white lg:ml-24 md:ml-16 sm:ml-8 ml-4`}>
            <p>The World</p> 
            Needs a Hero...
          </h1>
          <motion.h1
            variants={sentenceAnim}
            initial="hidden"
            animate="visible"
            className={`${TITLE_TEXT} sm:text-7xl xl:text-8xl 2xl:text-9xl lg:ml-24 md:ml-16 sm:ml-8 ml-4 text-red-500 font-bold`}
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
      <h3 className="border-red-500 text-white border-l-4 ml-4 sm:border-l-8 pl-3 text-2xl md:text-3xl lg:text-4xl font-normal sm:text-left lg:ml-24 md:ml-16 sm:ml-8  text-center pr-2 sm:pr-24 mb-8">
        <p className="text-left">Maintaining competitive advantage in today's constantly evolving software ecosystem requires more than a unicorn...a hero.</p> 
        <p className="text-left">We grow heroes across sectors to continuously deliver software without compromising security.</p>
      </h3>
      <a 
        aria-hidden="true" 
        href="#trainForBattle" 
        className={`${TITLE_TEXT} 2xl:text-7xl w-1/12 absolute bottom-0 animate-bounce`}
        style={ {left:'50%'} }
      >
        <motion.i
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            delay: 0.5,
            default: {duration: 2.5}
          }}
          className="bi bi-chevron-down text-red-500 hover:text-blue-700 cursor-pointer">

        </motion.i>
      </a>
    </section>
  );
};

export default HomeHero;
