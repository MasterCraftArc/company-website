import { Paper } from "@mui/material";
import * as React from "react";
import ThemeProvider from "@mui/material";
import { theme } from "../theme/theme";
import NavBar from "../components/NavBar/NavBar";
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
