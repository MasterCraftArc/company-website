import React from "react";
import whatWeDoPng from "../../images/home/whatWeDo.png";
import keyPoints from "../../images/home/keyPoints.png";
import Button from "../button";
import pin from "../../images/locationPin.png";
import unicornStars from "../../images/unicornStars.png";

const CaseStudies = () => {
  return (
    <section className="py-16 md:py-48 flex items-center justify-center w-full md:my-0 my-16 relative">
      <div className="xl:w-4/5 mx-auto grid lg:grid-cols-2 grid-cols-1">
        <div className="order-2 p-16 pt-0 mt-16 md:mt-0 mx-10 relative">
          <div className="tk-blob">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 317.5 353.7">
              <path d="M291.8 55.3c30.4 39.9 30.7 102 17 160.4-13.8 58.3-41.6 112.9-84 130.9s-99.3-.6-137-30C50.2 287.1 32 246.9 17 200.5 2.1 154.1-9.6 101.4 11.5 63.6 32.6 25.8 86.6 2.8 143.8.2c57.2-2.6 117.6 15.2 148 55.1z"></path>
            </svg>
          </div>
          <img
            src={whatWeDoPng}
            className="blobTop max-w-full pb-24"
            alt="What we do"
          />
        </div>
        <div className="flex flex-col justify-center px-10">
          <h2
            className={` text-4xl md:text-5xl xl:text-6xl font-bold text-blue-900 flex items-center`}
          >
            <img
              className="justify-self-bottom"
              style={{ maxWidth: "60px" }}
              src={pin}
              alt="Unicorn standing on card"
            />
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
            className="caseStudies md:w-full py-5 pt-10"
            src={keyPoints}
            alt="Case Study Icons for Objectives solutions and results"
          ></img>

          <div className="pt-7">
            <Button
              linkTo="/contact"
              className="bg-red-500 text-white hover:text-white hover:font-bold hover:bg-red-700"
              text="Contact Us"
            />
          </div>
        </div>
        {/* <div className="p-16 pt-0 lg:block hidden relative">
          <div className="blob tk-blob heavy">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 317.5 353.7">
              <path d="M291.8 55.3c30.4 39.9 30.7 102 17 160.4-13.8 58.3-41.6 112.9-84 130.9s-99.3-.6-137-30C50.2 287.1 32 246.9 17 200.5 2.1 154.1-9.6 101.4 11.5 63.6 32.6 25.8 86.6 2.8 143.8.2c57.2-2.6 117.6 15.2 148 55.1z"></path>
            </svg>
          </div>
          <img src={whatWeDoPng} className="absolute top-10" alt="Who we are" />
        </div> */}
      </div>

      <img
        className="absolute bottom-11 right-24 invisible md:visible"
        src={unicornStars}
        alt="Unicorn standing on card"
        style={{ right: "0%", width: "200px", zIndex: "-2" }}
      />
    </section>
  );
};

export default CaseStudies;
