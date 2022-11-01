import React from "react";
import {
  createTabPropsFromNavLink,
  isLocalLink,
} from "../../utilities/navLink";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import NavLogo from "./NavBar/NavLogo";
import palette from "../../theme/palette";
import { Link as GatsbyLink } from "gatsby";
import {
  footerLinks,
  namedLinks,
  socialsBarLinks,
} from "../../assets/data/navLinks";
import { Divider, IconButton, Link, SvgIcon, Typography } from "@mui/material";

const FooterWrapper = styled(Box)`
  height: auto;
  width: 100vw;
  background-image: linear-gradient(
    0deg,
    #2a2153 0.42%,
    #252960 48.25%,
    #1a3873 71.16%,
    #163e7b 99.99%
  );
  display: flex;
  flex-direction: column;
`;

const footerWrapperSx = {
  justifyContent: { xs: "center", md: "inherit" },
  padding: { xs: "4rem", md: "5rem", lg: `7rem` },
};

const FooterLink = styled(Link)`
  color: ${palette.primary.contrastText};
  font-size: 18;
  text-decoration: none;
  :hover {
    color: ${palette.secondary.main};
  }
`;

const FooterIconButton = styled(IconButton)`
  color: ${palette.primary.contrastText};
`;

function Footer() {
  return (
    <FooterWrapper component="footer" sx={footerWrapperSx}>
      <Box
        component="section"
        sx={{
          display: "flex",
          gap: { xs: "2rem", md: "0" },
          alignItems: { xs: "center", md: "end" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            height: { xs: "auto", md: "110px" },
            gap: { xs: "3rem", md: "10.4375rem" },
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "start" },
          }}
        >
          <Box alignSelf={"start"}>
            <NavLogo height="100px" width="225.3px" />
          </Box>
          <Box
            sx={{
              height: "95px",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              justifyContent: "space-around",
              columnGap: { xs: "2rem", lg: "12rem" },
              alignContent: { xs: "center", md: "inherit" },
            }}
          >
            {footerLinks.map((l, i) =>
              isLocalLink(l.url) ? (
                <FooterLink
                  component={GatsbyLink}
                  key={`footer-link-${l.text}-${i}`}
                  variant="subtitle2"
                  to={l.url}
                  id={`footer-link-${l.text}-${i}`}
                >
                  {l.text}
                </FooterLink>
              ) : (
                <FooterLink
                  key={`footer-link-${l.text}-${i}`}
                  variant="subtitle2"
                  {...createTabPropsFromNavLink(l)}
                  id={`footer-link-${l.text}-${i}`}
                >
                  {l.text}
                </FooterLink>
              )
            )}
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
      <Box
        component="section"
        sx={{
          display: "flex",
          marginTop: "1rem",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "center" },
          justifyContent: { xs: "center", md: "end" },
          gap: "8px",
        }}
      >
        <Typography variant="body1" sx={{ color: "primary.contrastText" }}>
          Follow us on:
        </Typography>
        <Box>
          {socialsBarLinks.map((link, index) => {
            let key = `footer-social-link-${link.text}-${index}`;
            return (
              <FooterIconButton
                size="large"
                {...createTabPropsFromNavLink(link)}
                key={key}
                aria-label={link.text}
              >
                <SvgIcon
                  fontSize="large"
                  component={link.icon}
                  inheritViewBox
                />
              </FooterIconButton>
            );
          })}
        </Box>
      </Box>
      <Box
        component="section"
        sx={{
          flexGrow: 1,
          gap: "1rem",
          width: "100%",
          display: "flex",
          marginTop: "2rem",
          alignItems: "center",
          justifyContent: "end",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="caption"
          sx={{ color: "primary.contrastText", textAlign: "center" }}
        >
          Copyright © 2022 Defense Unicorns. All rights reserved
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: ".5rem",
            color: "primary.contrastText",
          }}
        >
          <FooterLink
            component={GatsbyLink}
            sx={{ typography: "caption" }}
            to={namedLinks.privacyPolicy.url}
          >
            {namedLinks.privacyPolicy.text}
          </FooterLink>
          <Typography variant="caption">|</Typography>
          <FooterLink
            component={GatsbyLink}
            sx={{ typography: "caption" }}
            to={namedLinks.termsOfService.url}
          >
            {namedLinks.termsOfService.text}
          </FooterLink>
        </Box>
      </Box>
    </FooterWrapper>
  );
}

export default Footer;
