import React from "react";
import ReactRotatingText from "react-rotating-text";
import { motion } from "framer-motion";
import { TITLE_TEXT } from "./homeStyles";
import Button from "../button";
import BackgroundSection from "../home/homeBg";

const sentenceAnim = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.08,
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

const tagLine = "That Hero is ";
const tagLineItems = [
  " You.",
  " an Innovator",
  " a Manager",
  " an Operator",
  " a Founder",
];

const DEFAULT_PAUSE = 1000;
const YOU_PAUSE = 3000;

const HomeHero = () => {
  let [heroCount, setHeroCount] = React.useState(0);
  const [pause, setPause] = React.useState(DEFAULT_PAUSE);
 
 const showYou = () => {
    if(heroCount === 0) {
      setPause(DEFAULT_PAUSE); 
    }
    if(heroCount === 4) {
      setHeroCount(0);
      setPause(YOU_PAUSE)
    } else {
      setHeroCount(heroCount + 1);
    }
  };

  return (
    <BackgroundSection className="bg-cover bg-center">
      <section className="homeHero min-h-screen py-24 flex flex-col justify-center max-w-full">
        <div className="mb-24 ">
          <h1
            className={`${TITLE_TEXT} sm:text-7xl xl:text-8xl 2xl:text-9xl text-white lg:ml-24 md:ml-16 sm:ml-8 ml-4 mt-10`}
          >
            <p>The world</p>
            needs a hero...
          </h1>
          <motion.h1
            variants={sentenceAnim}
            initial="hidden"
            animate="visible"
            className={`${TITLE_TEXT} sm:text-7xl xl:text-8xl 2xl:text-9xl lg:ml-24 md:ml-16 sm:ml-8 ml-4 text-red-500 font-bold `}
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
              className="block sm:inline-block"
            >
              <ReactRotatingText 
                items={tagLineItems} 
                pause={pause} 
                emptyPause={700} 
                typingInterval={20} 
                deletingInterval={40}
                onTypingEnd={() => showYou()}
              />
            </motion.span>
          </motion.h1>
        </div>
        <h3 className="border-red-500 text-white border-l-4 ml-4 sm:border-l-8 pl-3 text-2xl md:text-3xl xl:text-4xl xl:pr-16 font-normal sm:text-left lg:ml-24 md:ml-16 sm:ml-8  text-center pr-2 sm:pr-24 mb-8">
          <p className="text-left">
            Helping mission innovators become heroes through continuous software delivery.
          </p>
        </h3>

        <div className="lg:ml-24 md:ml-16 sm:ml-8 ml-4 mt-10">
          <Button
            linkTo="/contact"
            className=""
            text="Contact Us"
            width="190px"
            height="60px"
          />
        </div>

        <a
          aria-hidden="true"
          href="#trainForBattle"
          className={`${TITLE_TEXT} 2xl:text-7xl absolute bottom-2 animate-bounce w-full text-center hidden md:block`}
        >
          <motion.i
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              delay: 0.5,
              default: { duration: 2.5 },
            }}
            className="bi bi-chevron-down text-red-500 hover:text-blue-700 cursor-pointer"
          ></motion.i>
        </a>
      </section>
    </BackgroundSection>
  );
};

export default HomeHero;
