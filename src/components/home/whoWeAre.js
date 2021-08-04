import React from "react";
import whoWeAre from "../../images/whoWeAre.png";
import { TITLE_TEXT } from "./homeStyles";
import Button from "../button";
import whoBackground from "../../images/Hero.jpg";

const WhoWeAre = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center w-full md:my-0 my-16"
      style={{ background: `url(${whoBackground}) 100% 100% fixed` }}
    >
      <div className="xl:w-4/5 mx-auto grid lg:grid-cols-2 grid-cols-1">
        <div className="px-10 p-16">
          <img
            src={whoWeAre}
            className=""
            alt="unicorn under magnifying glass"
          />
        </div>
        <div className="flex flex-col justify-center px-10 text-white">
          <h2 className={TITLE_TEXT}>Who we are</h2>
          <p className="pt-5 pb-5 lg:pt-10 lg:pb-32 lg:pr-10 xl:pr-8 text-3xl xl:pb-16 font-light">
            We are innovators, software engineers, and veterans with decades of
            experience delivering technology programs across DoD and the broader
            federal market. Defense Unicorns exists to accelerate the impact of
            digital warriors inside and outside the government - enabling their
            transformation from unicorn to hero.
          </p>
          <div className="">
            <Button
              linkTo="/contact"
              className="bg-red-500 hover:bg-red-700 text-white mr-5 mb-5"
              text="Contact Us"
            />
            <Button
              linkTo="/equip"
              className="hover:bg-transparent border-blue-900 border-2 border-solid bg-blue-900 hover:text-blue-900 text-white mr-5 mb-5"
              text="Learn More"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
