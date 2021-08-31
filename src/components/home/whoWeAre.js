import React from "react";
import whoWeAre from "../../images/home/whoWeAre.png";
import Button from "../button";
import whoBackground from "../../images/contact.jpg";
import pin from "../../images/locationPin.png";

const WhoWeAre = () => {
  return (
    <section
      className="md:min-h-screen flex items-center justify-center w-full my-16 md:my-0 py-10 md:py-0"
      style={{
        background: `url(${whoBackground}) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className="xl:w-4/5 mx-auto grid lg:grid-cols-2 grid-cols-1">
        <div className="w-5/6 md:w-4/6 lg:w-full mx-auto px-16 md:p-16 lg:px-5 relative">
          <div className="tk-blob">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 303.2">
              <path d="M260.2 41.4c20 29.2 14.6 74.5 7.2 124.4-7.3 49.9-16.6 104.5-49.2 126-32.5 21.6-88.4 10.2-132-15.2s-75-64.7-83.6-107.8C-6.1 125.7 8 79 36.3 47.8 64.5 16.7 107 1.3 150.9.1c43.9-1.1 89.3 12 109.3 41.3z"></path>
            </svg>
          </div>
          <img
            loading="lazy"
            src={whoWeAre}
            className="absolute blobTop z-10 p-16 lg:p-5"
            alt="unicorn under magnifying glass"
          />
        </div>
        <div className="flex flex-col justify-center px-8 md:px-20 text-white">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-medium md:font-bold flex items-center`}
          >
            <img
              className="pinMobile md:pinDesktop mr-2 md:mr-0"
              src={pin}
              alt="Unicorn pin"
            />
            Who we are
          </h2>
          <p className="pt-5 pb-5 lg:pt-10 lg:pb-32 lg:pr-10 xl:pr-5 text-xl xl:pb-16 font-light">
            We are innovators, software engineers, and veterans with decades of
            experience delivering technology programs across DoD and the broader
            federal market. Defense Unicorns exists to accelerate the impact of
            digital warriors inside and outside the government - enabling their
            transformation from unicorn to hero.
          </p>
          <div className="flex justify-center w-full sm:block">
            <Button
              linkTo="/contact"
              className="bg-red-500 hover:bg-red-700 text-white mr-5 mb-5"
              text="Contact Us"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
