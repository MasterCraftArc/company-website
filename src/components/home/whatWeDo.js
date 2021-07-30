import React from "react";
import { Link } from "gatsby";
import { buttonStyle, TITLE_TEXT } from "./homeStyles";
import whatWeDoPng from "../../images/caseStudies.png";
import keyPoints from "../../images/keyPointsLight.png";

const CaseStudies = () => {
  return (
    <section className="min-h-screen flex flex-col lg:justify-center lg:ml-auto justify-start w-full lg:w-4/5 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 px-5 lg:bg-transparent bg-white">
        <div className="p-16 pt-0 lg:hidden block object-cover">
          <img src={whatWeDoPng} className="w-4/5" alt="Who we are" />
        </div>
        <div className="flex flex-col justify-center px-10">
          <h2 className={TITLE_TEXT}>What We Do</h2>
          <p className="pt-5 pb-5 lg:pt-10 lg:pb-32 lg:pr-10 xl:pr-8 text-3xl xl:pb-16 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet.
          </p>
          <img
            className="md:w-full xl:w-1/2 py-5 pt-10"
            src={keyPoints}
            alt="Case Study Icons for Objectives solutions and results"
          ></img>

          <div className="pt-7">
            <Link to="/equip">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white"
                style={buttonStyle}
              >
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
        <div className="p-16 pt-0 lg:block hidden object-cover">
          <img src={whatWeDoPng} className="w-4/5" alt="Who we are" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
