import React from "react";
import unicornPin from "../../images/pinBlue.png"


const Section = (props) => {
  return (
    <section id={props.sectionId} className="aboutSection max-w-full flex flex-col sm:flex-row px-5 lg:px-11 md:px-24 xl:px-32 mt-24">
        <div className={`flex flex-col justify-center items-center sm:items-start h-1/2 sm:h-full sm:w-1/2 p-5 lg:p-12 ${props.contentStyle}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-medium md:font-bold flex items-center text-blue-900">
            
            <span className={props.titleStyle}>
              {props.title}
            </span>
          </h2>


          <h3 className="text-red-600 text-3xl lg:text-4xl mt-10 text-center sm:text-justify whitespace-pre">
            {props.subtitle}
          </h3>

          <p className=" text-lg lg:text-2xl xl:text-xl 2xl:pr-24 whitespace-normal text-center sm:text-left lg:py-5 leading-loose">
      
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
