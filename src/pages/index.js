import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HomeHero from "../components/home/hero";
import SiteHelmet from "../components/SiteHelmet";
import WhoWeAre from "../components/home/whoWeAre";
import CaseStudies from "../components/home/whatWeDo";
import TrainForBattle from "../components/home/trainForBattle";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width: "100vw",
};
// markup
const Train = () => {
  return (
    <main style={pageStyles} className="home flex flex-col">
      <SiteHelmet
        title="Train"
        description="Become a DevSecOps Hero with Defense Unicorns"
      />
      <Header textColor="white" className="" />
      <HomeHero />
      <TrainForBattle />
      <WhoWeAre />
      <CaseStudies />
      <Footer></Footer>
    </main>
  );
};

export default Train;
