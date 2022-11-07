import { Box } from "@mui/material";
import React from "react";
import ContactHeroBg from "../../assets/jpg/contact-us-bg.jpg";
import ContactForm from "./ContactForm/ContactForm";

function ContactHero() {
  return (
    <Box
      component="section"
      backgroundColor="background.paper"
      sx={{
        backgroundImage: `url(${ContactHeroBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: { xs: "bottom", md: "bottom" },
        width: "100vw",
        minHeight: "700px",
        height: "100vh",
        marginTop: "-6rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ContactForm />
    </Box>
  );
}

export default ContactHero;
