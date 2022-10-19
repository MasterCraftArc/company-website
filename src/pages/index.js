import * as React from "react";
import NavBar from "../components/Rebuild/NavBar/NavBar";
import SiteHelmet from "../components/SiteHelmet";
import HomeHero from "../components/home/hero";

// markup
const Home = () => {
  return (
    <>
      <SiteHelmet
        route="Home"
        description="Become a DevSecOps Hero with Defense Unicorns"
      />
      <NavBar pathname={"/"} />
      <HomeHero />
    </>
  );
};

export default Home;
