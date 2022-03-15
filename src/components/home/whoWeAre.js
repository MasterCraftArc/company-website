import React from "react";
import Button from "../button";
import whoBackground from "../../images/whoBackground.jpg";


const WhoWeAre = () => {
  return (
    <section
      className="md:min-h-screen flex items-center justify-center w-full my-16 md:my-0 py-10 md:py-0 whoWeAreBgRight lg:whoWeAreBgCenter"
      style={{
        background: `url(${whoBackground}) no-repeat`,
        backgroundSize: "cover",
      }}
    >
    </section>
  );
};

export default WhoWeAre;
