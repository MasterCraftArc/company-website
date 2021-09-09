import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SiteHelmet from "../components/SiteHelmet";
import pageData from "../components/about/pageData.json"
import Hero from "../components/about/hero"
import Section from "../components/about/section"
import SideNav from "../components/about/sideNav";

const pageStyles = {
  color: "#232129",
};


// markup
const About = () => {
  const sectionRef = React.createRef()
  const sectionHeights = []

  return (
    <div style={pageStyles} className="container flex flex-col bg-top max-w-full">
      <SiteHelmet 
      route="About" 
      />
      <Header />
      <Hero/>


      {
        pageData.map( (page, i) => {
          return(
            <div key={i + 1} id={`section${i + 1}`} className="pb-5" ref={sectionRef} onLoad={ (test) => { console.log(test.nativeEvent, 'top')}}>
              <Section title={page.title} subtitle={page.subtitle} text={page.text} img={page.img} contentStyle={page.contentStyle}/>
            </div>
          )
        })
      }

      <SideNav sectionHeight={sectionRef.current}/>

      <Footer />
    </div>
  );
};

export default About;
