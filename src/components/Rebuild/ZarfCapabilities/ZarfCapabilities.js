import React from "react";
import CapabilitiesCardRow from "./CapabilitiesCardRow";
import { Box, Typography } from "@mui/material";
import { zarfCapabilityCards } from "../../../assets/data/cardData";
import { namedLinks } from "../../../assets/data/navLinks";
import ButtonLink from "../ButtonLink";
import { fontWeights } from "../../../theme/typography";

function ZarfCapabilities() {
  return (
    <Box component="section" sx={{ px: "32px" }}>
      <Typography
        variant="h6"
        sx={{
          mb: "12px",
          textAlign: "center",
          color: "text.primary",
          textTransform: "uppercase",
        }}
      >
        ZARF CAPABILITIES
      </Typography>
      <Typography
        component="h2"
        sx={{
          mb: "60px",
          typography: "h2",
          textAlign: "center",
          fontSize: { md: 60 },
          color: "secondary.main",
          fontWeight: fontWeights.regular,
        }}
      >
        Deploy Anything - Anywhere
      </Typography>
      <CapabilitiesCardRow cards={zarfCapabilityCards} />
      <ButtonLink
        variant="outlined"
        color="secondary"
        sx={{ mx: "auto", mt: "60px", width: "155px", height: "42px" }}
        {...namedLinks.zarfInstall}
      />
    </Box>
  );
}

export default ZarfCapabilities;
