import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HomeHero from "../components/home/hero";
import SiteHelmet from "../components/SiteHelmet";
import WhoWeAre from "../components/home/whoWeAre";
import WhatWeDo from "../components/home/whatWeDo";
import TrainForBattle from "../components/home/trainForBattle";
// import headerBackground from "../images/home/hero.jpg";
import "../styles/blobz.min.css";

const pageStyles = {
  color: "#232129",
  fontFamily: "Poppins, Roboto, sans-serif, serif",
};

// markup
const Train = () => {
  return (
    <div style={pageStyles} className="home flex flex-col bg-top max-w-screen">
      <SiteHelmet
        route="Train"
        description="Become a DevSecOps Hero with Defense Unicorns"
      />
      <Header />
      <HomeHero />
      <TrainForBattle />
      <WhoWeAre />
      <WhatWeDo />
      <Footer />
    </div>
  );
};

export default Train;
