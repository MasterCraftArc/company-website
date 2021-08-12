import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HomeHero from "../components/home/hero";
import SiteHelmet from "../components/SiteHelmet";
import WhoWeAre from "../components/home/whoWeAre";
import CaseStudies from "../components/home/whatWeDo";
import TrainForBattle from "../components/home/trainForBattle";
import headerBackground from "../images/BG_Banner.jpg";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width: "100vw",
};

const headerStyle = {
  background: `url(${headerBackground}) 100% 100% fixed`,
};

// markup
const Train = () => {
  return (
    <div style={pageStyles} className="home flex flex-col bg-top">
      <SiteHelmet
        title="Train"
        description="Become a DevSecOps Hero with Defense Unicorns"
      />
      <Header textColor="white" className="" />
      <div style={headerStyle}>
        <HomeHero />
      </div>
      <TrainForBattle />
      <WhoWeAre />
      <CaseStudies />
      <Footer></Footer>
    </div>
  );
};

export default Train;
