import React from "react";
import { Link } from "gatsby";
import whoWeAre from "../../images/whoWeAre.png";
import { buttonStyle, TITLE_TEXT } from "./homeStyles";

const WhoWeAre = () => {
  return (
    <section className="pt-16 min-h-screen flex flex-col justify-center lg:ml-auto w-full xl:w-4/5 xl:mx-auto">
      <div className="px-5 p-56  lg:pl-44 xl:pl-32 2xl:pl-0 grid lg:grid-cols-2 grid-cols-1">
        <div className="px-10 p-16">
          <img
            src={whoWeAre}
            className=""
            alt="unicorn under magnifying glass"
          />
        </div>
        <div className="flex flex-col justify-center px-10">
          <h2 className={TITLE_TEXT}>Who we are</h2>
          <p className="pt-5 pb-5 lg:pt-10 lg:pb-32 lg:pr-10 xl:pr-8 text-3xl xl:pb-16 font-light">
            We are innovators, software engineers, and veterans with decades of
            experience delivering technology programs across DoD and the broader
            federal market. Defense Unicorns exists to accelerate the impact of
            digital warriors inside and outside the government - enabling their
            transformation from unicorn to hero.
          </p>
          <div className="">
            <Link to="/equip">
              <button
                className="bg-red-500 hover:bg-red-700 text-white mr-5 mb-5"
                style={buttonStyle}
              >
                LEARN MORE
              </button>
            </Link>
            <Link to="/contact">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white xl:ml-5"
                style={buttonStyle}
              >
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
