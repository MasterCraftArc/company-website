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
  text-align: left;
  color: ${palette.text.primary};
`;

const footerSx = {
  padding: `9.625rem 7.0625rem`,
};

function Footer() {
  return (
    <FooterWrapper component="footer" sx={footerSx}>
      <Box
        component="section"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "end",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            height: "110px",
            gap: "167px",
          }}
        >
          <NavLogo height="100px" width="225.3px" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              height: "95px",
              justifyContent: "space-between",
              alignSelf: "end",
            }}
          >
            {footerLinks.map((l, i) => (
              <FooterLink
                key={`footer-link-${l.text}-${i}`}
                variant="subtitle2"
                marginRight={"2rem"}
                sx={{ width: "10rem" }}
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
            // height: "95px",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <Box>
            <FooterText variant="subtitle2">555 Pikes Place Aves</FooterText>
            <FooterText variant="subtitle2">Colorado Springs,</FooterText>
            <FooterText variant="subtitle2">CO, 80903</FooterText>
            <FooterLink
              href={"mailto:hello@defenseunicorns.com"}
              variant="subtitle2"
              marginTop={"2rem"}
            >
              hello@defenseunicorns.com
            </FooterLink>
          </Box>
        </Box>
      </Box>
      <Divider
        variant="middle"
        sx={{ marginTop: "60px", borderColor: "text.primary" }}
      ></Divider>
    </FooterWrapper>
  );
}

export default Footer;
