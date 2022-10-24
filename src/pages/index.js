import * as React from "react";
import "../styles/blobz.min.css";
import palette from "../theme/palette";
import { Box, styled } from "@mui/material";
import Footer from "../components/Rebuild/footer";
import SiteHelmet from "../components/SiteHelmet";
import WhatWeDo from "../components/Rebuild/WhatWeDo";
import HomeHero from "../components/Rebuild/HomeHero";
import WhoWeAre from "../components/Rebuild/WhoWeAre";
import OurVision from "../components/Rebuild/OurVision";
import NavBar from "../components/Rebuild/NavBar/NavBar";
import ZarfCapabilities from "../components/Rebuild/ZarfCapabilities/ZarfCapabilities";
import OpenSourceStats from "../components/Rebuild/OpenSourceStats/StatsCard";

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
  React.useEffect(() => {
    document.body.style.background = palette.background.paper;
  }, []);
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
      </HomePaper>
      <Footer />
    </>
  );
};

export default Home;
