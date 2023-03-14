import React from 'react';
import BackgroundSection from './background';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <BackgroundSection className="bg-cover bg-center aboutHero">
      <section className="h-full flex flex-col justify-center p-10 xl:pl-20  text-white ">
        <h1 className="pl-4 md:pl-6 lg:pl-16 pb-8 text-white text-4xl sm:text-5xl md:text-6xl  lg:text-7xl xl:text-8xl flex flex-col font-semibold">
          Our Core Values
        </h1>
        <p className="heroText md:text-3xl text-2xl md:w-1/2 w-full text-white pl-4 md:pl-6 lg:pl-16">
          <span className="mx:block">
            Defense Unicorns operates with a single belief - that a value&nbsp;
          </span>
          <span className="md:block">
            not lived is not a value at all. Our team exercises&nbsp;
          </span>
          <span className="md:block">habits every day that bring our values to life.</span>
        </p>

        <a
          aria-hidden="true"
          href="#section1"
          className={`text-5xl xl:text-6xl 2xl:text-7xl absolute bottom-5 left-0 animate-bounce text-center w-full font-bold`}
        >
          <motion.i
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'spring',
              delay: 0.5,
              default: { duration: 2.5 }
            }}
            className=" bi bi-chevron-down hover:text-red-600 cursor-pointer font-bold"
          ></motion.i>
        </a>
      </section>
    </BackgroundSection>
  );
};

export default Hero;
