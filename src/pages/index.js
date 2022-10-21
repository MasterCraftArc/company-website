import * as React from "react";
import "../styles/blobz.min.css";
import Footer from "../components/Rebuild/footer";
import SiteHelmet from "../components/SiteHelmet";
import WhatWeDo from "../components/Rebuild/WhatWeDo";
import HomeHero from "../components/Rebuild/HomeHero";
import NavBar from "../components/Rebuild/NavBar/NavBar";
import TrainForBattle from "../components/home/trainForBattle";
import palette from "../theme/palette";
import { Paper, styled } from "@mui/material";

const pageStyles = {
  color: "#232129",
  fontFamily: "Poppins, Roboto, sans-serif, serif",
};

const HomePaper = styled(Paper)`
  width: 100vw;
  padding: 150px 32px;
  background-color: ${palette.background.paper};
`;

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
      <HomePaper elevation={0} square>
        <WhatWeDo />
      </HomePaper>
      <TrainForBattle />
      <Footer />
    </div>
  );
};

export default Home;
