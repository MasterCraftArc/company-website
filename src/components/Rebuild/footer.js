import React from "react";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { Divider, Link, Typography } from "@mui/material";
import NavLogo from "./NavBar/NavLogo";
import { footerLinks } from "../../assets/data/navLinks";
import { createTabPropsFromNavLink } from "../../utilities/navLink";
import palette from "../../theme/palette";

const FooterWrapper = styled(Box)`
  height: 41.1875rem;
  width: 100vw;
  background: linear-gradient(
    0deg,
    #2a2153 0.42%,
    #252960 48.25%,
    #1a3873 71.16%,
    #163e7b 99.99%
  );
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled(Link)`
  color: ${palette.text.primary};
  text-decoration: none;
  flex: 1;
  :hover {
    color: ${palette.secondary.main};
  }
`;

const FooterText = styled(Typography)`
  display: flex;
  color: ${palette.text.primary};
`;

const footerSx = {
  justifyContent: { xs: "center", md: "inherit" },
  padding: { xs: "4rem", md: "5rem", lg: `7rem` },
};

function Footer() {
  return (
    <FooterWrapper component="footer" sx={footerSx}>
      <Box
        component="section"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: { xs: "center", md: "end" },
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "2rem", md: "0" },
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "inherit" },
            height: { xs: "auto", md: "110px" },
            gap: { xs: "3rem", md: "10.4375rem" },
          }}
        >
          <Box alignSelf={"start"}>
            <NavLogo height="100px" width="225.3px" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              columnGap: { xs: "2rem", MozBoxDirection: "12rem" },
              flexWrap: "wrap",
              height: "95px",
              justifyContent: "space-around",
              alignContent: { xs: "center", md: "inherit" },
            }}
          >
            {footerLinks.map((l, i) => (
              <FooterLink
                key={`footer-link-${l.text}-${i}`}
                variant="subtitle2"
                {...createTabPropsFromNavLink(l)}
              >
                {l.text}
              </FooterLink>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "end" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "start" },
            }}
          >
            <FooterText variant="subtitle2">555 Pikes Place Ave</FooterText>
            <FooterText variant="subtitle2">Colorado Springs,</FooterText>
            <FooterText variant="subtitle2">CO, 80903</FooterText>
            <FooterLink
              href={"mailto:hello@defenseunicorns.com"}
              variant="subtitle2"
              marginTop={"1rem"}
            >
              hello@defenseunicorns.com
            </FooterLink>
          </Box>
        </Box>
      </Box>
      <Divider
        variant="fullWidth"
        sx={{
          marginTop: { xs: "2rem", md: "4rem" },
          borderColor: "text.primary",
        }}
      ></Divider>
      <Box component="section"></Box>
    </FooterWrapper>
  );
}

export default Footer;
