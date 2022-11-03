import React from "react";
import { Box, styled } from "@mui/material";
import SiteHelmet from "../components/SiteHelmet";
import Footer from "../components/sections/Footer";
import NavBar from "../components/sections/NavBar/NavBar";
import SocialsBar from "../components/sections/SocialsBar";
import useDarkBackground from "../hooks/useDarkBackground";
import ContactHero from "../components/sections/ContactHero";
import WhereToFindUs from "../components/sections/WhereToFindUs";

const ContactPaper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 150px 0;
  z-index: -1;
`;

function Contact() {
  useDarkBackground();
  return (
    <>
      <SiteHelmet route="Contact" />
      <NavBar pathname={"/contact"} />
      <ContactHero />
      <SocialsBar />
      <ContactPaper>
        <WhereToFindUs />
      </ContactPaper>
      <Footer />
    </>
  );
}

export default Contact;
