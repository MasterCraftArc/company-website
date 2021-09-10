import React from "react";
import BackgroundSection from "./background";


const Hero = () => {
  return (
    <BackgroundSection className="bg-cover bg-center aboutHero">
      <section className="h-full flex flex-col justify-center p-10 xl:pl-20  text-white ">
        <h1 className="font-bold text-3xl sm:text-5xl lg:text-7xl  xl:text-8xl 2xl:text-9xl ">
          The Defense Unicorns Blog
        </h1>
        <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl text-red-500">
          translating thoughts into action
        </h2>
        <p className="mt-4 md:mt-8 text-xl md:text-2xl xl:text-4xl 2xl:text-5xl ">
          <span className="mx:block">
            This blog is your source for context-first guides, stories&nbsp;
          </span>
          <span className="md:block">
            and news on the people, process and technology&nbsp;
          </span>
          <span className="md:block">
            neccesary to accelerate your mission.
          </span>
        </p>
      </section>
    </BackgroundSection>
  );
};

export default Hero;
