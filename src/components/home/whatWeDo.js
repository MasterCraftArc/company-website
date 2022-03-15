import React from "react";
import whatWeDoPng from "../../images/home/whatWeDo.png";
import keyPoints from "../../images/home/keyPoints.png";
import Button from "../button";


const WhatWeDo = () => {
  return (
    <section className="md:py-48 flex items-center justify-center w-full md:my-0 relative">
      <div className="xl:w-4/5 mx-auto grid lg:grid-cols-2 grid-cols-1">
        <div className="w-5/6 md:w-4/6 lg:w-full lg:order-2 p-16 pt-0 mt-16 md:mt-0 mx-auto lg:mx-10 relative">
          <div className="tk-blob">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 317.5 353.7">
              <path d="M291.8 55.3c30.4 39.9 30.7 102 17 160.4-13.8 58.3-41.6 112.9-84 130.9s-99.3-.6-137-30C50.2 287.1 32 246.9 17 200.5 2.1 154.1-9.6 101.4 11.5 63.6 32.6 25.8 86.6 2.8 143.8.2c57.2-2.6 117.6 15.2 148 55.1z"></path>
            </svg>
          </div>
          <img
            loading="lazy"
            src={whatWeDoPng}
            className="absolute blobTop max-w-full pb-24 mx-auto"
            alt="What we do"
          />
        </div>
        <div className="flex flex-col justify-center px-10">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-medium md:font-bold text-blue-900 flex items-center`}
          >
      
            What we do
          </h2>
          <p className="pt-5 pb-5 lg:pt-10 lg:pb-32 lg:pr-8 xl:pr-5 text-xl xl:pb-16 font-light">
            We make it easier for mission-driven organizations to buy, accredit,
            and integrate software solutions. We provide a secure, open source
            and infrastructure agnostic DevSecOps platform while continuously
            expanding the base of software product companies accessible to the
            federal market to create an end-to-end solution for continuous
            software integration.
          </p>
          <img
            loading="lazy"
            className="caseStudies md:w-full py-5 pt-10"
            src={keyPoints}
            alt="Case Study Icons for Objectives solutions and results"
          ></img>

          <div className="flex justify-center w-full sm:block pt-7 pb-10 sm:pb-7">
            <Button
              linkTo="/contact"
              className="bg-red-500 text-white hover:text-white hover:font-bold hover:bg-red-700"
              text="Contact Us"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default WhatWeDo;
