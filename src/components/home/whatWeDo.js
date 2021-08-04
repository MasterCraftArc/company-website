import React from "react";
import { TITLE_TEXT } from "./homeStyles";
import whatWeDoPng from "../../images/caseStudies.png";
import keyPoints from "../../images/keyPointsLight.png";
import Button from "../button";

const CaseStudies = () => {
  return (
    <section className="h-screen flex items-center justify-center w-full md:my-0 my-16">
      <div className="xl:w-4/5 mx-auto grid lg:grid-cols-2 grid-cols-1">
        <div className="p-16 pt-0 lg:hidden block object-cover">
          <img src={whatWeDoPng} className="w-4/5 mx-auto" alt="Who we are" />
        </div>
        <div className="flex flex-col justify-center px-10">
          <h2 className={TITLE_TEXT}>What We Do</h2>
          <p className="pt-5 pb-5 lg:pt-10 lg:pb-32 lg:pr-10 xl:pr-8 text-3xl xl:pb-16 font-light">
            We make it easier for mission-driven organizations to buy, accredit,
            and integrate software solutions. We provide a secure, open source
            and infrastructure agnostic DevSecOps platform while continuously
            expanding the base of software product companies accessible to the
            federal market to create an end-to-end solution for continuous
            software integration.
          </p>
          <img
            className="md:w-full xl:w-1/2 py-5 pt-10"
            src={keyPoints}
            alt="Case Study Icons for Objectives solutions and results"
          ></img>

          <div className="pt-7">
            <Button
              linkTo="/equip"
              className="bg-transparent border-blue-900 border-2 border-solid hover:bg-blue-900 text-blue-900 hover:text-white"
              text="Learn More"
            />
          </div>
        </div>
        <div className="p-16 pt-0 lg:block hidden object-cover">
          <img src={whatWeDoPng} className="" alt="Who we are" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
