import * as React from "react";
import { Box, styled } from "@mui/material";
import SiteHelmet from "../components/SiteHelmet";
import Footer from "../components/sections/Footer";
import WhatWeDo from "../components/sections/WhatWeDo";
import HomeHero from "../components/sections/HomeHero";
import WhoWeAre from "../components/sections/WhoWeAre";
import OurVision from "../components/sections/OurVision";
import NavBar from "../components/sections/NavBar/NavBar";
import SocialsBar from "../components/sections/SocialsBar";
import useDarkBackground from "../hooks/useDarkBackground";
import LearnWithUs from "../components/sections/LearnWithUs";
import OpenSourceStats from "../components/sections/OpenSourceStats/StatsCard";
import ZarfCapabilities from "../components/sections/ZarfCapabilities/ZarfCapabilities";
import OurCulture from "../components/sections/OurCulture/OurCulture";

const HomePaper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 150px 0;
  z-index: -1;
  gap: 170px;
`;

// markup
const Home = () => {
  useDarkBackground();
  return (
    <>
      <SiteHelmet
        route="Home"
        description="Become a DevSecOps Hero with Defense Unicorns"
      />
      <NavBar pathname={"/"} />
      <HomeHero />
      <HomePaper>
        <WhatWeDo />
        <OpenSourceStats />
        <ZarfCapabilities />
        <OurVision />
        <WhoWeAre />
        <SocialsBar />
        <LearnWithUs />
        <OurCulture />
      </HomePaper>
      <Footer />
    </>
  );
};

export default Home;
