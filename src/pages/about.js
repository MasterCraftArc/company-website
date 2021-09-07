import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SiteHelmet from "../components/SiteHelmet";
import pageData from "../components/about/pageData"
import Hero from "../components/about/hero"

const pageStyles = {
  color: "#232129",
//   fontFamily: "Poppins, Roboto, sans-serif, serif",
};


// markup
const Home = () => {
  return (
    <div style={pageStyles} className="home flex flex-col bg-top max-w-screen">
      <SiteHelmet 
      route="About" 
      />

      <Header />
      <Hero/>
      <Footer />
    </div>
  );
};

export default Home;
