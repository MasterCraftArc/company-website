import { Box } from "@mui/material";
import React from "react";
import ContactHeroBg from "../../assets/jpg/contact-us-bg.jpg";

function ContactHero() {
  return (
    <Box
      component="section"
      backgroundColor="background.paper"
      sx={{
        backgroundImage: `url(${ContactHeroBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: { xs: "top left", md: "bottom" },
        width: "100vw",
        minHeight: "700px",
        height: "calc(100vh - 6rem)",
        marginTop: "-6rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    ></Box>
  );
}

export default ContactHero;
