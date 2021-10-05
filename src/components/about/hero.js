import React from "react";
import BackgroundSection from "./background";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <BackgroundSection className="bg-cover bg-center aboutHero">
      <section className="h-full flex flex-col justify-center p-10 xl:pl-20  text-white ">
        <h1 className="font-semi-bold text-3xl sm:text-5xl lg:text-7xl  xl:text-8xl 2xl:text-9xl ">
          Our Core Values
        </h1>
        <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl text-red-500">
 
        </h2>
        <p className="mt-4 md:mt-8 text-xl md:text-2xl xl:text-4xl 2xl:text-5xl ">
          <span className="mx:block">
            At Defense Unicorns we believe that an organizational value stated&nbsp;
          </span>
          <span className="md:block">
           but not lived is not a value at all. Our team exercises&nbsp;
          </span>
          <span className="md:block">
           habits every day that bring our values to life.
          </span>
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
                  type: "spring",
                  delay: 0.5,
                  default: { duration: 2.5 },
                }}
                className=" bi bi-chevron-down hover:text-red-600 cursor-pointer font-bold"
              ></motion.i>
            </a>
      </section>
    </BackgroundSection>
  );
};

export default Hero;
