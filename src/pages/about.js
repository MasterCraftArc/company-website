import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SiteHelmet from "../components/SiteHelmet";
import pageData from "../components/about/pageData.json";
import Hero from "../components/about/hero";
import AboutSection from "../components/about/section";

const pageStyles = {
  color: "#232129",
};

// markup
const About = () => {
  const refs = pageData.map(() => React.createRef());

  return (
    <div
      style={pageStyles}
      className="container flex flex-col bg-top max-w-full"
    >
      <SiteHelmet route="About" />
      <Header />
      <Hero />

      {pageData.map((page, i) => {
        return (
          <div ref={refs[i]} key={i + 1} id={`section${i + 1}`} className="">
            <AboutSection {...page} />
          </div>
        );
      })}

      <Footer />
    </div>
  );
};

export default About;
