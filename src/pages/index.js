import { Paper } from "@mui/material";
import * as React from "react";
import ThemeProvider from "@mui/material";
import { theme } from "../theme/theme";
import NavBar from "../components/NavBar/NavBar";
import SiteHelmet from "../components/SiteHelmet";

// markup
const Home = () => {
  return (
    <Paper sx={{ width: "100vw", height: "100vh", borderRadius: "0" }}>
      <SiteHelmet
        route="Home"
        description="Become a DevSecOps Hero with Defense Unicorns"
      />
      <NavBar />
    </Paper>
  );
};

export default Home;
