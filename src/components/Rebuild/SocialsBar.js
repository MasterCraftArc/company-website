import { IconButton, styled, SvgIcon, Box, Typography } from "@mui/material";
import React from "react";
import { hideSmall } from "../../utilities/display";
import {socialsBarLinks} from '../../assets/data/navLinks';
import { createTabPropsFromNavLink } from "../../utilities/navLink";

const SocialsBarWrapper = styled("section")`
  width: 100vw;
  height: 160px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(
    90deg,
    #002555 0%,
    #244a8f 25.83%,
    #42447f 48.95%,
    #6c3b69 73.64%,
    #eb2126 100%
  );
`;

const IconButtonWithLabel = styled(Box) `
    display: flex;
    align-items: center;
    gap: 8px;
`

function SocialsBar() {
  return <SocialsBarWrapper sx={{ ...hideSmall }}>
    {socialsBarLinks.map((link, index) => {
    const uniqueId = `socials-bar-${link.text}-${index}`; 
      return (
        <IconButtonWithLabel  >
          <IconButton size="large" aria-labelledby={uniqueId}  {...createTabPropsFromNavLink(link)}>
            <SvgIcon fontSize="large" component={link.icon} inheritViewBox></SvgIcon>
          </IconButton>
          <Typography variant="h6" color='primary.contrastText' id={uniqueId}>
            {link.text}
          </Typography>
        </IconButtonWithLabel>
      )
    })}
  </SocialsBarWrapper>;
}

export default SocialsBar;
