import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HomeHero from "../components/home/hero";
import SiteHelmet from "../components/SiteHelmet";
import WhatWeDo from "../components/home/whatWeDo";
import TrainForBattle from "../components/home/trainForBattle";
import "../styles/blobz.min.css";

const pageStyles = {
  color: "#232129",
  fontFamily: "Poppins, Roboto, sans-serif, serif",
};

// markup
const Home = () => {
  return (
    <div style={pageStyles} className="home flex flex-col bg-top max-w-screen">
      <SiteHelmet
        route="Home"
        description="Become a DevSecOps Hero with Defense Unicorns"
      />
      <Header />
      <HomeHero />
      <TrainForBattle />
      <WhatWeDo />
      <Footer />
    </div>
  );
};

export default Home;
