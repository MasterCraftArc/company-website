import React from "react";
import CardRow from "./CardRow";
import { Box, Typography } from "@mui/material";
import { zarfCapabilityCards } from "../../assets/data/cardData";

function ZarfCapabilities() {
  return (
    <Box component="section">
      <Typography
        component="h6"
        sx={{
          typography: { xs: "h6", md: "h6" },
          color: "text.secondary",
          textAlign: "center",
          mb: "12px",
        }}
      >
        ZARF CAPABILITIES
      </Typography>
      <Typography
        sx={{
          mb: "60px",
          typography: { xs: "h2", md: "h2" },
          textAlign: "center",
          color: "secondary.main",
        }}
      >
        Deploy Anything - Anywhere
      </Typography>
      <CardRow cards={zarfCapabilityCards} />
    </Box>
  );
}

export default ZarfCapabilities;
