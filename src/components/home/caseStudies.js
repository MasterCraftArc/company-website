import React from "react";
import { Link } from "gatsby";
import { buttonStyle, altTitle, TITLE_TEXT } from "./homeStyles";
import caseStudies from "../../images/caseStudies.png";
import keyPoints from "../../images/keyPointsLight.png";

const CaseStudies = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center w-full xl:w-3/4 lg:ml-10">
      <div className="grid lg:grid-cols-2 xs:grid-cols-1 px-5">
        <div className="p-16 pt-0 lg:hidden block object-cover">
          <img src={caseStudies} className="w-4/5" alt="case study" />
        </div>
        <div className="flex flex-col justify-center px-10">
          <h2 className={TITLE_TEXT}>Case Studies</h2>
          <p className="p-0 sm:pt-10 xl:pr-44 text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet.
          </p>

          <div className="pt-7">
            <Link to="/train">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white"
                style={buttonStyle}
              >
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
        <div className="p-16 pt-0 lg:block xs:hidden object-cover">
          <img src={caseStudies} className="w-4/5" alt="case study" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
