import { styled } from "@mui/material";
import React from "react";
import { hideSmall } from "../../utilities/display";

const SocialsBarWrapper = styled("section")`
  width: 100vw;
  height: 160px;
  background: linear-gradient(
    90deg,
    #002555 0%,
    #244a8f 25.83%,
    #42447f 48.95%,
    #6c3b69 73.64%,
    #eb2126 100%
  );
`;

function SocialsBar() {
  return <SocialsBarWrapper sx={{ ...hideSmall }}></SocialsBarWrapper>;
}

export default SocialsBar;
