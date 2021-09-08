import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SiteHelmet from "../components/SiteHelmet";
import pageData from "../components/about/pageData"
import Hero from "../components/about/hero"
import Section from "../components/about/section"

const pageStyles = {
  color: "#232129",
};


// markup
const About = () => {
  return (
    <div style={pageStyles} className="container flex flex-col bg-top max-w-full">
      <SiteHelmet 
      route="About" 
      />
      <Header />
      <Hero/>
      {
        pageData.map( (section, i) => {
          return(
            <Section title={section.title} subtitle={section.subtitle} text={section.text} img={section.img} contentStyle={section.contentStyle}/>
          )
        })
      }
      <Footer />
    </div>
  );
};

export default About;
