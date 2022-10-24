import React from "react";
import ButtonLink from "./ButtonLink";
import {
  Section,
  SectionTitle,
  SectionDescription,
  SectionBody,
} from "./Section";
import { Box, styled } from "@mui/material";
import { namedLinks } from "../../assets/data/navLinks";
import ImageLeft from "../../assets/png/who-we-are/who-we-are-left.png";
import ImageRight from "../../assets/png/who-we-are/who-we-are-right.png";
import ImageCenter from "../../assets/png/who-we-are/who-we-are-center.png";

const Frame = styled(Box)`
  max-width: 100%;
  display: flex;
  justify-content: center;
  padding: 24px 0;
  gap: 32px;
  margin-top: 36px;
`;
const Image = styled(Box)`
  flex: 1;
`;
const WhoWeAre = () => (
  <Section sx={{ textAlign: "center" }}>
    <SectionTitle>Who We Are</SectionTitle>
    <SectionDescription>Unicorns on a Mission</SectionDescription>
    <SectionBody>
      We are innovators, software engineers, and veterans with decades of
      experience delivering technology programs across the DoD as well as the
      broader federal market. Our team of unicorns are zany and passionate
      individuals who are dedicated to mission success.
    </SectionBody>
    <Frame sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Image
        component="img"
        sx={{ maxWidth: { md: "30%" } }}
        src={ImageLeft}
        alt="Unicorns And Flag"
      />
      <Image
        component="img"
        sx={{ maxWidth: { md: "30%" } }}
        src={ImageCenter}
        alt="San Diego retreat."
      />
      <Image
        component="img"
        sx={{ maxWidth: { md: "30%" } }}
        src={ImageRight}
        alt="HR retreat"
      />
    </Frame>
    <ButtonLink
      variant="outlined"
      color="secondary"
      sx={{ mx: "auto", mt: "60px" }}
      {...namedLinks.careers}
      text="Join Our Team"
    />
  </Section>
);

export default WhoWeAre;
