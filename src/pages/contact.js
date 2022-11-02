import React from "react";
import palette from "../theme/palette";
import { Box, styled } from "@mui/material";
import SiteHelmet from "../components/SiteHelmet";
import Footer from "../components/Rebuild/footer";
import NavBar from "../components/Rebuild/NavBar/NavBar";
import SocialsBar from "../components/Rebuild/SocialsBar";
import ContactHero from "../components/Rebuild/ContactHero";
import WhereToFindUs from "../components/Rebuild/WhereToFindUs";

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
