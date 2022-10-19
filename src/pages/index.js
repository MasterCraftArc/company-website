import * as React from "react";
import "../styles/blobz.min.css";
import Footer from "../components/footer";
import SiteHelmet from "../components/SiteHelmet";
import WhatWeDo from "../components/home/whatWeDo";
import HomeHero from "../components/Rebuild/HomeHero";
import NavBar from "../components/Rebuild/NavBar/NavBar";
import TrainForBattle from "../components/home/trainForBattle";

const pageStyles = {
  color: "#232129",
  fontFamily: "Poppins, Roboto, sans-serif, serif",
};

// markup
const Home = () => {
  return (
    <div style={pageStyles}>
      <SiteHelmet
        route="Home"
        description="Become a DevSecOps Hero with Defense Unicorns"
      />
      <NavBar pathname={"/"} />
      <HomeHero />
      <TrainForBattle />
      <WhatWeDo />
      <Footer />
    </div>
  );
};

export default Home;
