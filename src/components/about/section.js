import React from "react";
import unicornPin from "../../images/pinBlue.png"


const Section = (props) => {
  return (
    <section id={props.sectionId} className="aboutSection max-w-full flex flex-col sm:flex-row px-5 lg:px-11 md:px-24 xl:px-32 mt-24">
        <div className={`h-1/2 sm:h-full sm:w-1/2 p-5 lg:p-12 ${props.contentStyle}`}>
          <h2 className="flex items-center">
            <img
              className="self-start aboutPin 2xl:aboutPinDesktop"
              // style={{ maxWidth: "80px" }}
              src={unicornPin}
              alt="Unicorn standing on card"
            />
            <span className="text-blue-900 text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold pr-5">{props.title}</span>
          </h2>
          <h3 className="text-red-600 text-3xl lg:text-4xl mt-10">
            {props.subtitle}
          </h3>
          <p className="mt-10 text-lg lg:text-2xl 2xl:pr-24">
            {props.text}
          </p>
        </div>

        <div className="imageContainer h-1/2 sm:h-full sm:w-1/2 flex justify-center items-center p-14 sm:p-5 xl:p-16 my-auto">
          <img 
            className={`${props.img} h-full sm:h-auto mx-auto`}
            alt="section thumbnail"
          />
        </div>
    </section>
  );
};

export default Section;
