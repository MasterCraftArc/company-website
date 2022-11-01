import { Box, styled } from "@mui/material";
import React from "react";
import ContactHero from "../components/Rebuild/ContactHero";
import NavBar from "../components/Rebuild/NavBar/NavBar";
import SocialsBar from "../components/Rebuild/SocialsBar";
import SiteHelmet from "../components/SiteHelmet";
import palette from "../theme/palette";

const ContactPaper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 150px 0;
  z-index: -1;
`;

function Contact() {
  React.useEffect(() => {
    document.body.style.background = palette.background.paper;
  }, []);
  return (
    <>
      <SiteHelmet route="Contact" />
      <NavBar pathname={"/contact-new"} />
      <ContactHero />
      <SocialsBar />
      <ContactPaper></ContactPaper>
    </>
  );
}

export default Contact;
