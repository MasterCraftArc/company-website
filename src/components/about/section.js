import React from "react";


const Section = (props) => {
  return (
    <section id={props.sectionId} className="aboutSection max-w-full flex flex-col sm:flex-row px-5 lg:px-11 md:px-24 xl:px-32 mt-24">
        <div className={`flex flex-col justify-center items-center p-5 sm:w-1/2 lg:p-12 ${props.contentStyle}`}>

          <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-medium md:font-bold flex items-center text-blue-900">
            
            <span className={props.titleStyle}>
              {props.title}
            </span>
          </h2>
        

          <p className=" text-lg lg:text-2xl xl:text-xl whitespace-normal text-center lg:py-5 leading-loose">
      
            {props.text}
          </p>
          
        </div>
        </div>

        <div className="imageContainer h-1/2 sm:h-full sm:w-1/2 flex justify-center items-center p-14 sm:p-5 xl:p-16 my-auto">
          <img 
            className={`${props.img} w-2/3 sm:h-auto mx-auto`}
            alt="section thumbnail"
          />
        </div>
    </section>
  );
};

export default Section;
