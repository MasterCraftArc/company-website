import React from "react";
import { fonts } from "../../theme/typography";
import { Box, styled, Typography } from "@mui/material";
import DougRocket from "../../assets/svg/doug-rocket.svg";

const WhatWeDoSection = styled(Box)`
  display: flex;
  width: 100%;
  height: auto;
`;

function WhatWeDo() {
  return (
    <WhatWeDoSection
      component="section"
      sx={{
        flexDirection: { xs: "column", lg: "row" },
        gap: { xs: 0, lg: "146px" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "100%" }}>
        <DougRocket width="100%" height="100%" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <Typography
          component="h6"
          sx={{
            typography: { xs: "body1", md: "h6" },
          }}
        >
          WHAT WE DO
        </Typography>
        <Typography
          component="h2"
          sx={{
            typography: { xs: "h3", lg: "h2" },
            fontFamily: fonts.teko,
            color: "secondary.main",
            maxWidth: { md: "450px" },
          }}
        >
          Develop Mission Focused Open Source Products
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            maxWidth: { md: "515px" },
            typography: { xs: "body2", md: "body1" },
          }}
        >
          We provide secure, open source and infrastructure agnostic
          applications and tools that enable our partners to rapidly accelerate
          their software acquisition and delivery processes. Our open source
          applications enable DevSecOps on even the most secure systems.{" "}
        </Typography>
      </Box>
    </WhatWeDoSection>
  );
}

export default WhatWeDo;
