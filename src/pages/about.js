import React from 'react';
import NavBar from '../components/sections/NavBar/NavBar';
import Footer from '../components/sections/Footer';
import SiteHelmet from '../components/SiteHelmet';
import pageData from '../components/about/pageData.json';
import Hero from '../components/about/hero';
import AboutSection from '../components/about/section';

const pageStyles = {
  color: '#232129',
  marginTop: '-6rem',
};

// markup
const About = () => {
  const refs = pageData.map(() => React.createRef());

  return (
    <div style={pageStyles} className="container flex flex-col bg-top max-w-full">
      <SiteHelmet route="About" />
      <NavBar pathname="/about" />
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
